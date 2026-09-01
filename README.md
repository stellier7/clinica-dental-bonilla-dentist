# Dental Practice Website Template

Mobile-first, bilingual (ES/EN) dental practice site built with plain HTML, CSS, and vanilla JavaScript. All client-specific content lives in a single config file — swap the data, drop in images, and deploy.

## Quick start

1. Open the folder locally, or run a static server from the project root:

   ```bash
   npx serve .
   # or: python3 -m http.server 3000
   ```

2. Visit `http://localhost:3000` (or the port your server prints).

3. Use the **ES / EN** toggle in the header to switch languages without a page reload.

## Customize for a client

### 1. Edit `js/config.js` (required)

This file is the **only** place you should change practice content. Comments in the file mark what is `REQUIRED` vs `optional`.

| What to change | Where in `config.js` |
| --- | --- |
| Practice name, phone, address, hours | `practice` |
| Tagline (EN + ES) | `practice.tagline` |
| Brand colors + hero image | `branding` |
| Dentist photos & bios | `dentists` |
| Services list | `services` |
| Testimonials | `testimonials` |
| Financing images | `financingImages` |
| Smile gallery images | `gallery` |
| Social links | `socials` |
| Default language (`es` recommended) | `defaultLanguage` |
| Button / nav / section labels | `ui.en` / `ui.es` |

**Empty arrays hide sections.** If `testimonials: []` (or gallery / financing / dentists / services is empty), that section and its nav link are omitted automatically.

### 2. Drop images in `assets/images/`

The template ships with a **minimal demo set** (9 files). Replace them per client:

```
assets/images/
  hero.jpg                 ← branding.heroImageUrl
  dentist.jpg              ← dentists[].photoUrl
  gallery/
    smile-01.jpg … smile-05.jpg
  financing/
    financing-01.svg
    financing-02.svg
```

Then point the matching fields in `config.js` at those paths, for example:

```js
heroImageUrl: "assets/images/hero.jpg",
```

Demo images are included so the site looks complete out of the box — replace them before going live.

### 3. Optional logo

Set `branding.logoUrl` to a transparent PNG/SVG path. Leave it blank to show a lettermark + practice name.

## Project structure

```
index.html          Shell markup (mount points only — no client copy)
css/styles.css      Mobile-first styles, shadow system, responsive layout
js/config.js        ★ Single source of truth for all content
js/app.js           Renders sections, i18n, parallax, accordion, carousels
assets/images/      Demo hero, dentist, gallery, and financing assets
vercel.json         Static deploy settings for Vercel
```

## Design / behavior notes

- **Mobile-first** breakpoints, with hamburger nav on small screens and a full nav from ~900px up.
- **Sticky “Book Appointment” bar** on mobile → `tel:` click-to-call.
- **Hero parallax** uses a JS `translate3d` on a dedicated media layer (not `background-attachment: fixed`) for smoother iOS Safari behavior. Respects `prefers-reduced-motion`.
- **Services**: single-open accordion on mobile; hover-lift grid on tablet/desktop.
- **Touch targets** sized at least 44px.

## Deploy to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repo (or use the Vercel CLI).
2. In [vercel.com](https://vercel.com), click **Add New Project** and import the repo.
3. Framework preset: **Other** (static). Leave build command empty; output directory is the project root.
4. Deploy. Vercel will serve `index.html` and the `css/`, `js/`, and `assets/` folders as-is.
5. After deploy, update `practice` / image paths in `config.js` as needed and redeploy.

### Vercel CLI alternative

```bash
npm i -g vercel
vercel
```

Accept the defaults for a static site. Production deploy:

```bash
vercel --prod
```

## Checklist before handoff

- [ ] Replace demo name, phone, address, hours, and email
- [ ] Replace hero, dentist, and gallery images with client assets
- [ ] Confirm EN + ES copy for tagline, bios, services, testimonials
- [ ] Replace financing images if needed
- [ ] Set real Instagram / Facebook URLs (or clear them to hide icons)
- [ ] Tap-test click-to-call and directions on a real phone
- [ ] Smoke-test parallax scroll on iOS Safari
