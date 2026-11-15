# CUSP Strategic Foresight — website

A one-page static site for Dr Marius Oosthuizen / CUSP. Plain HTML, CSS and a few lines of vanilla JavaScript.
No build step, no frameworks, no tracking, no external requests (fonts are self-hosted). It costs nothing to host.

## What's in the folder

```
index.html                 the whole site (all sections and text live here)
assets/css/styles.css      colours, fonts and layout (CUSP palette at the top in :root)
assets/js/main.js          mobile menu + the "Send an enquiry" email builder
assets/fonts/              Montserrat (headings) and Nunito (body), SIL Open Font Licence
assets/img/                headshot, cone of plausibility, foresight-to-strategy visual,
                           favicon (svg/png), apple-touch-icon, og-image (link previews)
screens/                   reference screenshots (desktop 1280px, mobile 390px); not needed online
tools/                     og.html (source of og-image.png) and shoot.py (screenshot script); optional
.nojekyll                  tells GitHub Pages to serve the files as they are
```

## How to edit

- **Text**: open `index.html` in any text editor and change the words between the tags. Each section is marked
  with a comment, e.g. `<!-- ================= SERVICES ================= -->`.
- **Email address**: search `index.html` and `assets/js/main.js` for `mariusoost@gmail.com`.
- **"Book Marius" subject lines**: the `mailto:` links use `?subject=Book%20Marius%3A%20...` (`%20` is a space,
  `%3A` is a colon).
- **Colours**: change the variables at the top of `assets/css/styles.css` (`--navy`, `--blue`, `--teal`,
  `--mint`, `--accent`).
- **Headshot**: the hero uses `assets/img/marius-oosthuizen.jpg` and `.webp` (640 × 640 square, shown in a
  circle), and the link-preview image uses `assets/img/marius-oosthuizen-portrait.jpg` (760 × 863). Both are cut
  from the 1179 × 1339 stage photo (dark suit, red striped tie, microphone); the full-size original is kept outside
  the site folder in `../website-src-images/`. To change the photo, replace both files with new crops (keep the
  face centred in the square) and update the `alt` text in `index.html`, then rerun `tools/shoot.py` so
  `og-image.png` picks up the new portrait.
- **Upcoming engagements**: edit the `<ul class="timeline">` block in the Clients section. Move past events out
  or change them to past tense.
- **Link previews (WhatsApp, LinkedIn, X)**: once the site has its final address, replace
  `assets/img/og-image.png` in the `og:image` and `twitter:image` tags with the full address
  (e.g. `https://cusp.netlify.app/assets/img/og-image.png`) and uncomment the `canonical` line.
- **LinkedIn**: not included, because no profile URL was found in the source files. To add it, put
  `<li><a href="https://www.linkedin.com/in/YOUR-HANDLE/" rel="noopener">LinkedIn</a></li>` in the footer list
  and add the URL to `"sameAs"` in the JSON-LD block in the `<head>`.

To preview locally, double-click `index.html`, or run `python3 -m http.server` in this folder and open
http://localhost:8000.

## Deploy for free

### Option A: Netlify Drop (quickest, no account set-up beyond a free login)
1. Go to https://app.netlify.com/drop and sign in (free).
2. Drag the whole `website` folder onto the page. The site is live in seconds at a `*.netlify.app` address.
3. In **Site configuration → Change site name**, pick something like `cusp-foresight` → `cusp-foresight.netlify.app`.
4. To update later: **Deploys → drag and drop** the folder again.

### Option B: GitHub Pages
1. Create a free GitHub account and a new **public** repository, e.g. `cusp-site`.
2. Upload the contents of this folder (so `index.html` is at the top level of the repository):
   **Add file → Upload files**, drag everything in, **Commit changes**.
3. **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`, Save.
4. After a minute the site is at `https://YOUR-USERNAME.github.io/cusp-site/`.
5. To update: edit files on GitHub (pencil icon) or upload replacements.

### Custom domain (optional, the only part that costs money)
Both hosts accept a custom domain for free; you only pay the domain registrar. Follow the host's
"Add custom domain" steps and set the DNS records they show you. HTTPS is issued automatically.

## Regenerating screenshots and the preview image (optional)
Requires Python with Playwright and Chromium:
```
python3 -m http.server 8765 --bind 127.0.0.1 &   # in this folder
python tools/shoot.py                            # writes screens/*.png, assets/img/og-image.png and icons
```
