# Kunal Sharma — Senior Backend Developer Portfolio

A production-ready, GitHub Pages–deployable portfolio built with **React** and **TailwindCSS**. Showcases experience, tech stack, projects, services, and contact for a senior backend developer.

## Project structure

```
kunal-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── TechStack.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Tech stack

- **React 18** — UI
- **Vite** — build and dev server
- **TailwindCSS** — styling
- **gh-pages** — deploy to GitHub Pages

## Local development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Deploy to GitHub Pages

### 1. Create the repo and push code

1. Create a new repository on GitHub (e.g. `kunal-portfolio`).
2. Clone it and add this project:

   ```bash
   git init
   git remote add origin https://github.com/YOUR_USERNAME/kunal-portfolio.git
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git push -u origin main
   ```

### 2. Set base URL and homepage

If your repo name is **not** `kunal-portfolio`, update:

**`vite.config.js`** — set `base` to your repo path (with leading and trailing slash):

```js
base: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '/',
```

**`package.json`** — set `homepage` to your GitHub Pages URL:

```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR-REPO-NAME"
```

### 3. Deploy with gh-pages

```bash
npm run deploy
```

This runs `npm run build` and publishes the `dist` folder to the `gh-pages` branch.

### 4. Enable GitHub Pages

1. Open the repo on GitHub → **Settings** → **Pages**.
2. Under **Source**, choose **Deploy from a branch**.
3. Branch: **gh-pages**, folder: **/ (root)**.
4. Save. The site will be available at:

   `https://YOUR_USERNAME.github.io/kunal-portfolio/`

(Replace `kunal-portfolio` with your repo name if different.)

### 5. Optional: custom domain

In **Settings → Pages**, set a custom domain and add the required DNS records. If you use a custom domain, set `base: '/'` in `vite.config.js` for production and rebuild/redeploy.

## Customization

- **Content**: Edit `src/data/portfolio.js` for name, title, about, projects, services, experience, and links.
- **GitHub / LinkedIn**: Update `links.github` and `links.linkedin` in `src/data/portfolio.js`.
- **Styling**: Adjust `tailwind.config.js` and component classes as needed.

## License

MIT.
