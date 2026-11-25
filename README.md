# PortfolioTubis — React Version

React + Vite rebuild of the Jemson Tubis web designer portfolio, keeping the
same dark/green design, layout and content as the original HTML/CSS site.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

The static output is generated in `dist/`.

## Deployment

The `.github/workflows/deploy.yml` workflow builds and publishes the site to
GitHub Pages on every push to `main`. Repository: `RoinujPlaza/TubisJemson.github.io`.
Live URL: https://roinujplaza.github.io/TubisJemson.github.io/

## Structure

- `index.html` — HTML entry point
- `src/main.jsx` — React entry point
- `src/App.jsx` — page composition + active nav tracking
- `src/components/` — Header, Hero, Stats, About, Services, Projects, Contact, Footer
- `src/data.js` — content for nav, stats, services and projects
- `src/styles.css` — all styling and responsive rules
- `src/assets/tubis.jpg` — portfolio photo
