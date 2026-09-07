# Mokshly Website — Deploy Checklist

The marketing site is served at **https://mokshly.com** via GitHub Pages
(GitHub Actions → Pages, custom domain from `public/CNAME`). It's also the
destination for individual-acquisition / ad traffic (`/yousourceful`,
`/yousourceful/learn-more`).

---

## 1. Build environment

| Build var | Value | Where |
|---|---|---|
| **`VITE_APP_URL`** | `https://app.mokshly.com` | Set in `.github/workflows/deploy.yml` (Build step `env:`). Every "Begin today" / sign-in CTA points here. A gitignored `.env` will **not** reach CI — it must live in the workflow (or repo/Environment secrets). |

- [ ] `VITE_APP_URL=https://app.mokshly.com` present in the deploy workflow build step
- [ ] The app is actually live at that URL and accepting sign-ups **before** any ads run

## 2. Deploy

- [ ] `npm run build` succeeds (runs `tsc --noEmit && vite build`)
- [ ] Push to the deploy branch → Actions builds and publishes to Pages
- [ ] `public/CNAME` = `mokshly.com`; DNS points at GitHub Pages
- [ ] `robots.txt` and `sitemap.xml` resolve at the domain root

## 3. Verify after deploy

- [ ] Home, `/yousourceful`, `/yousourceful/learn-more`, and legal pages all load (incl. the 404 deep-link bounce for the nested route)
- [ ] "Begin today" → `https://app.mokshly.com/signup`; Sign-in → `https://app.mokshly.com/login`
- [ ] Header/footer nav all resolve; the dark CTA band buttons read clearly (contrast fix)
- [ ] Share a landing URL in Slack/LinkedIn and confirm a card renders (static OG tags in `index.html`)

## 4. SEO / social — nice-to-have follow-ups

- [ ] Replace the default `og:image` (currently `/logo.png`) with a real **1200×630** card for the landing pages
- [ ] For perfect per-page social previews on non-JS scrapers, prerender `/yousourceful` + `/yousourceful/learn-more` (meta is otherwise set client-side; Google renders JS fine)

## 5. Content accuracy

- [ ] The "60 days free, individual accounts only, no credit card" offer matches what the app actually does at launch (free beta today; revisit when billing ships)
- [ ] Privacy wording matches the app's privacy policy + architecture (verified sound in the audit)
- [ ] Footer entity/year: **© Mokshly PBC**, current year

See the full pre-launch audit for detail and file references.
