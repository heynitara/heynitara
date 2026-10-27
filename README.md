# HeyNitara SEO starter pack

Domain target: https://heynitara.my.id/
Repository: https://github.com/heynitara/heynitara

## Important
This is a **SEO patch pack**, not a full replacement copy of your repository. It contains root-level files and a `<head>` snippet so your current design and JavaScript are not accidentally overwritten. The public repository currently appears to be a static HTML site and already has a `favicon.svg` and a description/title. Merge the snippet into the existing `index.html` rather than replacing the whole file.

## Files
- `robots.txt` — allows normal crawling and advertises the sitemap.
- `sitemap.xml` — lists the canonical homepage only. Sections such as `/#about` are not separate pages and should not be listed as separate sitemap URLs.
- `favicon.svg` — pink HeyNitara heart icon.
- `og-image.png` — 1200 × 630 social preview image.
- `snippets/index-head-seo.html` — metadata to merge into the existing `<head>`.
- `SEO-STEP-BY-STEP-ID.md` — detailed deployment and search-engine setup guide.

## Deploy
Copy `robots.txt`, `sitemap.xml`, `favicon.svg`, and `og-image.png` to the same published root directory as `index.html`. If your hosting configuration publishes from a subfolder (for example `docs/`), put them in that published directory instead.

Then merge the snippet into the existing `<head>`. Avoid duplicate `<title>`, meta description, canonical, Open Graph or Twitter tags. Keep the current stylesheet and script references intact.

After deploying, test:
- https://heynitara.my.id/robots.txt
- https://heynitara.my.id/sitemap.xml
- https://heynitara.my.id/favicon.svg
- https://heynitara.my.id/og-image.png

Each should load successfully (not show a 404). Then follow `SEO-STEP-BY-STEP-ID.md`.

## Before submitting to Google
Confirm the domain is canonical and redirects consistently to HTTPS. If your hosting uses a different preferred hostname (www or non-www), update canonical, sitemap, robots and OG URL to match that hostname. This pack assumes the preferred URL is exactly `https://heynitara.my.id/`.
