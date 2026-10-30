/**
 * Floating WhatsApp button, visible language toggle, and footer credit copy.
 * Run: node tests/whatsapp-fab.test.js
 */
const { chromium } = require("playwright");
const { spawn } = require("child_process");
const http = require("http");

const PORT = 8771;
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

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function readFab(page) {
  return page.locator("[data-whatsapp-fab]").evaluate((el) => {
    const style = getComputedStyle(el);
    const ring = el.querySelector(".whatsapp-fab__ring");
    const ringStyle = ring ? getComputedStyle(ring) : null;
    const rect = el.getBoundingClientRect();
    return {
      hidden: el.hidden,
      href: el.getAttribute("href") || "",
      label: el.getAttribute("aria-label") || "",
      target: el.getAttribute("target") || "",
      rel: el.getAttribute("rel") || "",
      position: style.position,
      animationName: style.animationName,
      ringAnimation: ringStyle ? ringStyle.animationName : "",
      rightGap: window.innerWidth - rect.right,
      bottomGap: window.innerHeight - rect.bottom,
      width: rect.width,
      height: rect.height,
    };
  });
}

async function assertFab(page, { label, messagePart }) {
  const fab = await readFab(page);
  assert(!fab.hidden, "WhatsApp button should be visible");
  assert(fab.href.startsWith("https://wa.me/50498875558"), `Expected wa.me link, got ${fab.href}`);
  assert(
    decodeURIComponent(fab.href).includes(messagePart),
    `Expected prefilled message "${messagePart}", got ${fab.href}`
  );
  assert(fab.label === label, `Expected aria-label "${label}", got "${fab.label}"`);
  assert(fab.target === "_blank", "WhatsApp button should open in a new tab");
  assert(fab.rel.includes("noopener"), "WhatsApp button should use noopener");
  assert(fab.position === "fixed", `Expected fixed position, got ${fab.position}`);
  assert(fab.width >= 56 && fab.height >= 56, `Expected a large tap target, got ${fab.width}x${fab.height}`);
  assert(fab.rightGap >= 8 && fab.rightGap <= 40, `Expected bottom-right placement, right gap ${fab.rightGap}`);
  assert(fab.bottomGap >= 8 && fab.bottomGap <= 48, `Expected bottom-right placement, bottom gap ${fab.bottomGap}`);
  assert(
    fab.animationName.includes("whatsapp-fab-breathe"),
    `Expected a pulsating button, animation was ${fab.animationName}`
  );
  assert(
    fab.ringAnimation.includes("whatsapp-fab-pulse"),
    `Expected a pulse ring, animation was ${fab.ringAnimation}`
  );
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

      await assertFab(page, {
        label: "Chatear por WhatsApp",
        messagePart: "agendar una cita",
      });

      const langBox = await page.locator("[data-lang-toggle]").boundingBox();
      assert(langBox && langBox.width > 0 && langBox.height > 0, "Language toggle should be visible");

      const footerText = await page.locator("[data-footer]").innerText();
      assert(!footerText.includes("footer.developedBy"), "Footer leaked an untranslated key");
      assert(footerText.includes("Desarrollado por iAGO Digital"), "Spanish iAGO footer is missing");
      const iago = page.locator(".iago-footer");
      const iagoHref = await iago.getAttribute("href");
      assert(iagoHref === "https://www.iagodigital.com", `Expected iAGO site link, got ${iagoHref}`);
      const iagoBox = await iago.boundingBox();
      assert(iagoBox && iagoBox.width > 0 && iagoBox.height >= 44, "iAGO footer should be a visible tap target");

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
      );
      assert(!overflow, `Page overflows horizontally at ${viewport.width}px`);

      await page.locator('[data-lang="en"]').click();
      await assertFab(page, {
        label: "Chat on WhatsApp",
        messagePart: "book an appointment",
      });
      const englishFooter = await page.locator("[data-footer]").innerText();
      assert(englishFooter.includes("Developed by iAGO Digital"), "English iAGO footer is missing");

      await page.close();
    }

    const reduced = await browser.newContext({
      reducedMotion: "reduce",
      viewport: { width: 1280, height: 800 },
    });
    const reducedPage = await reduced.newPage();
    await reducedPage.goto(`${BASE}/`, { waitUntil: "networkidle" });
    const reducedFab = await readFab(reducedPage);
    assert(
      reducedFab.animationName === "none" && reducedFab.ringAnimation === "none",
      `Reduced motion should stop the pulse, got button=${reducedFab.animationName} ring=${reducedFab.ringAnimation}`
    );
    await reduced.close();

    await browser.close();
    console.log("PASS: floating WhatsApp button pulses in the bottom-right corner.");
    console.log("PASS: language toggle is visible and footer credit is translated.");
  } finally {
    server.kill();
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
