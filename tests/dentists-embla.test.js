/**
 * Verifies the dentists Embla carousel loops with neighbors visible and forward motion.
 * Run: npm test (starts a local server automatically)
 */
const { chromium } = require("playwright");
const { spawn } = require("child_process");
const http = require("http");

const PORT = 8765;
const BASE = `http://127.0.0.1:${PORT}`;

function waitForServer(url, timeoutMs = 10000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = () => {
      http
        .get(url, (res) => {
          res.resume();
          resolve();
        })
        .on("error", () => {
          if (Date.now() - start > timeoutMs) reject(new Error("Server did not start"));
          else setTimeout(tick, 100);
        });
    };
    tick();
  });
}

function buildDentistsCarouselTrack(dentists) {
  if (dentists.length <= 1) {
    return { trackDentists: dentists, carouselStartIndex: 0 };
  }

  if (dentists.length === 2) {
    return {
      trackDentists: Array.from({ length: 6 }, (_, index) => dentists[(index + 1) % 2]),
      carouselStartIndex: 1,
    };
  }

  if (dentists.length >= 3 && dentists.length <= 4) {
    return {
      trackDentists: Array.from({ length: 6 }, (_, index) => dentists[index % dentists.length]),
      carouselStartIndex: 0,
    };
  }

  return { trackDentists: dentists, carouselStartIndex: 0 };
}

async function mountDentistsCarousel(page, dentists) {
  const { trackDentists, carouselStartIndex } = buildDentistsCarouselTrack(dentists);

  await page.evaluate(
    ({ trackDentists, carouselStartIndex }) => {
      const track = document.querySelector("[data-dentists-grid]");
      const viewport = document.querySelector("[data-dentists-viewport]");
      if (!track || !viewport) return;

      track.innerHTML = trackDentists
        .map(
          (d) =>
            `<article class="dentist-card"><div class="dentist-card__body"><h3>${d.name}</h3></div></article>`
        )
        .join("");

      viewport.dataset.carouselStartIndex = String(carouselStartIndex);
      viewport._dentistsEmblaApi?.destroy?.();

      const { embla, loopActive } = window.CarouselsEmbla.initLoopCarousel(viewport, {
        delay: 5000,
        startIndex: carouselStartIndex,
        slideSelector: ".dentist-card",
        label: "Dentists carousel",
      });

      viewport._dentistsEmblaApi = embla;
      viewport.dataset.emblaLoop = loopActive ? "true" : "false";
      embla.scrollTo(carouselStartIndex, true);
    },
    { trackDentists, carouselStartIndex }
  );

  await page.locator('[data-section="dentists"]').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);

  return { trackDentists, carouselStartIndex };
}

async function assertCarouselLoopWithNeighbors(page, dentists, viewportWidth) {
  const { trackDentists, carouselStartIndex } = await mountDentistsCarousel(page, dentists);
  const expectedStartName = trackDentists[carouselStartIndex].name;

  const initial = await getSlideSnapshot(page);
  if (!initial?.loopActive) {
    throw new Error(`Embla loop inactive for ${dentists.length} doctors at ${viewportWidth}px`);
  }
  if (initial.centered !== expectedStartName) {
    throw new Error(
      `Expected ${expectedStartName} centered initially for ${dentists.length} doctors at ${viewportWidth}px, got "${initial.centered}"`
    );
  }
  if (!initial.leftPeek || !initial.rightPeek) {
    throw new Error(
      `Expected neighbors on both sides initially for ${dentists.length} doctors at ${viewportWidth}px`
    );
  }

  const seenNames = new Set([initial.centered]);

  for (let step = 0; step < trackDentists.length; step += 1) {
    await page.evaluate(() => {
      document.querySelector("[data-dentists-viewport]")?._dentistsEmblaApi?.scrollNext();
    });
    await page.waitForTimeout(600);

    const snap = await getSlideSnapshot(page);
    if (!snap?.centered) {
      throw new Error(`No centered slide at step ${step + 1} for ${dentists.length} doctors`);
    }
    if (!snap.leftPeek || !snap.rightPeek) {
      throw new Error(
        `Missing neighbors at step ${step + 1} for ${dentists.length} doctors at ${viewportWidth}px (left=${snap.leftPeek}, right=${snap.rightPeek})`
      );
    }
    seenNames.add(snap.centered);
  }

  for (const dentist of dentists) {
    if (!seenNames.has(dentist.name)) {
      throw new Error(
        `Carousel for ${dentists.length} doctors never centered ${dentist.name} (saw: ${[...seenNames].join(", ")})`
      );
    }
  }
}

async function getSlideSnapshot(page) {
  return page.evaluate(() => {
    const viewport = document.querySelector("[data-dentists-viewport]");
    const track = document.querySelector("[data-dentists-grid]");
    if (!viewport || !track) return null;

    const viewportRect = viewport.getBoundingClientRect();
    const viewportCenter = viewportRect.left + viewportRect.width / 2;
    const cards = [...track.querySelectorAll(".dentist-card")];

    const visible = cards
      .map((card) => {
        const rect = card.getBoundingClientRect();
        const overlap = Math.max(
          0,
          Math.min(rect.right, viewportRect.right) - Math.max(rect.left, viewportRect.left)
        );
        return {
          name: card.querySelector("h3")?.textContent?.trim() || "",
          overlap,
          centerDist: Math.abs(rect.left + rect.width / 2 - viewportCenter),
          left: rect.left,
        };
      })
      .filter((entry) => entry.overlap > 16)
      .sort((a, b) => a.centerDist - b.centerDist);

    const leftPeek = cards.some((card) => {
      const rect = card.getBoundingClientRect();
      return rect.right > viewportRect.left + 8 && rect.left < viewportRect.left + 48;
    });

    const rightPeek = cards.some((card) => {
      const rect = card.getBoundingClientRect();
      return rect.left < viewportRect.right - 8 && rect.right > viewportRect.right - 48;
    });

    return {
      centered: visible[0]?.name || "",
      neighborCount: visible.length,
      leftPeek,
      rightPeek,
      loopActive: viewport.dataset.emblaLoop === "true",
      scrollLeft: viewport.scrollLeft,
    };
  });
}

async function getSiteDentists(page) {
  return page.evaluate(() => {
    const dentists = window.SITE_CONFIG?.dentists || [];
    return dentists.map((d) => ({ name: d.name }));
  });
}

async function runLiveSiteDentistsTest(page, viewport) {
  const dentists = await getSiteDentists(page);
  if (dentists.length < 2) return;

  const { trackDentists, carouselStartIndex } = buildDentistsCarouselTrack(dentists);
  const expectedStartName = trackDentists[carouselStartIndex].name;
  const secondName = trackDentists[carouselStartIndex + 1]?.name;

  await page.locator('[data-section="dentists"]').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);

  const initial = await getSlideSnapshot(page);
  if (!initial) throw new Error("Dentists carousel not found");
  if (!initial.loopActive) throw new Error(`Embla loop inactive at ${viewport.width}px`);
  if (initial.centered !== expectedStartName) {
    throw new Error(
      `Expected ${expectedStartName} centered initially at ${viewport.width}px, got "${initial.centered}"`
    );
  }
  if (!initial.leftPeek || !initial.rightPeek) {
    throw new Error(
      `Expected neighbors on both sides at ${viewport.width}px (leftPeek=${initial.leftPeek}, rightPeek=${initial.rightPeek})`
    );
  }

  await page.evaluate(() => {
    document.querySelector("[data-dentists-viewport]")?._dentistsEmblaApi?.scrollNext();
  });
  await page.waitForTimeout(700);
  const secondSnap = await getSlideSnapshot(page);
  if (secondSnap.centered !== secondName) {
    throw new Error(`Expected ${secondName} after first advance at ${viewport.width}px`);
  }
  if (!secondSnap.leftPeek || !secondSnap.rightPeek) {
    throw new Error(
      `Expected neighbors on both sides at second slide (${viewport.width}px, leftPeek=${secondSnap.leftPeek}, rightPeek=${secondSnap.rightPeek})`
    );
  }

  await page.evaluate(() => {
    document.querySelector("[data-dentists-viewport]")?._dentistsEmblaApi?.scrollNext();
  });
  await page.waitForTimeout(700);
  const loopStartSnap = await getSlideSnapshot(page);
  if (loopStartSnap.centered !== expectedStartName) {
    throw new Error(`Expected ${expectedStartName} on loop boundary slide at ${viewport.width}px`);
  }

  const names = [];
  for (let i = 0; i < 6; i += 1) {
    await page.evaluate(() => {
      document.querySelector("[data-dentists-viewport]")?._dentistsEmblaApi?.scrollNext();
    });
    await page.waitForTimeout(700);
    const snap = await getSlideSnapshot(page);
    if (!snap?.centered) throw new Error(`No centered slide after forward scroll #${i + 1}`);
    names.push(snap.centered);
  }

  for (const dentist of dentists) {
    if (!names.includes(dentist.name)) {
      throw new Error(`Forward scroll missing ${dentist.name} at ${viewport.width}px: ${names.join(" -> ")}`);
    }
  }

  const beforeAutoplayIndex = await page.evaluate(
    () => document.querySelector("[data-dentists-viewport]")?._dentistsEmblaApi?.selectedScrollSnap() ?? -1
  );
  await page.waitForTimeout(5200);
  const afterAutoplayIndex = await page.evaluate(
    () => document.querySelector("[data-dentists-viewport]")?._dentistsEmblaApi?.selectedScrollSnap() ?? -1
  );
  if (beforeAutoplayIndex === afterAutoplayIndex) {
    throw new Error(`Dentists autoplay did not advance at ${viewport.width}px`);
  }
}

async function run() {
  const server = spawn("python3", ["-m", "http.server", String(PORT)], {
    cwd: process.cwd(),
    stdio: "ignore",
  });

  try {
    await waitForServer(BASE);

    const browser = await chromium.launch({ headless: true });

    for (const viewport of [
      { width: 390, height: 844 },
      { width: 1280, height: 800 },
    ]) {
      const page = await browser.newPage({ viewport });
      await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
      await runLiveSiteDentistsTest(page, viewport);
      await page.close();
    }

    for (const viewport of [
      { width: 390, height: 844 },
      { width: 1280, height: 800 },
    ]) {
      for (const doctors of [
        [
          { name: "Dr. Carlos Mendoza" },
          { name: "Dra. Elena Vasquez" },
          { name: "Dr. Sam Rivera" },
        ],
        [
          { name: "Dr. Carlos Mendoza" },
          { name: "Dra. Elena Vasquez" },
          { name: "Dr. Sam Rivera" },
          { name: "Dr. Priya Nair" },
        ],
      ]) {
        const page = await browser.newPage({ viewport });
        await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
        await assertCarouselLoopWithNeighbors(page, doctors, viewport.width);
        await page.close();
      }
    }

    await browser.close();
    console.log("PASS: dentists Embla carousel shows neighbors and loops forward.");
  } finally {
    server.kill("SIGTERM");
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
