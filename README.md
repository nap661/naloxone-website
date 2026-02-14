# Naloxone Advocates — Static Site

This is a static website ready for **GitHub → Cloudflare Pages**.

## Structure
```
/
├─ index.html
├─ about.html
├─ training.html
├─ resources.html
├─ news.html
├─ contact.html
├─ success.html
├─ cancel.html
├─ styles.css
├─ _headers
└─ assets/
   ├─ img/
   │  ├─ logo.svg
   │  └─ hero.jpg
   └─ docs/
      ├─ overdose-response.pdf
      ├─ naloxone-administration.pdf
      └─ harm-reduction-poster.pdf
```

## Booking Form → Google Sheets
The training form posts to a Google Apps Script Web App and writes to your Google Sheet.

- Endpoint: `https://script.google.com/macros/s/AKfycbyckpp9ACxXNftfL0lHp5lIXq1axq-VF_XG3xzaadjvre_ee_Qa2DU0baBlyg-YYLWIHQ/exec`
- Ensure your Apps Script **Web App** is deployed as: **Execute as: Me**, **Who has access: Anyone**.
- Cloudflare Pages `_headers` includes `connect-src` for `script.google.com` so the fetch works.

## Deploy to Cloudflare Pages
- Create a Pages project, **Connect to Git**.
- Framework preset: **None** (static).
- Build command: *(leave empty)*, Output directory: `/`.
- Add custom domain if desired.

## Editing
- Update contact email / copy
- Replace PDFs in `/assets/docs/`
- Replace `/assets/img/logo.svg` and `/assets/img/hero.jpg` with your real assets.
