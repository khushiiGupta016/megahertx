# Megahertz Clone

A single-page marketing site inspired by the [Megahertz](https://wolfthemes.com/) WordPress theme for audio and video creators. Built with React and Vite, it recreates the landing-page experience with scroll animations, demo previews, and responsive layouts.

> **Note:** This is an independent front-end recreation for learning and demonstration. It is not affiliated with WolfThemes or the official Megahertz product.

## Features

- **Animated hero** — Diagonal image marquee with Framer Motion
- **Home template demos** — Preview cards for podcast, media, and creator layouts
- **Feature highlights** — Customization, built-in tools, and time-saving benefits
- **Inner & utility pages** — Showcase cards for sponsors, studio, FAQ, press, and more
- **Content sections** — Episodes, videos, events, and shop mockups with layered browser frames
- **Testimonials carousel** — Interactive slider with reduced-motion support
- **CTA footer** — Full-screen call-to-action with site navigation

## Tech Stack

| Layer | Tools |
|-------|-------|
| UI | React 19 |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Linting | ESLint 10 |

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (included with Node.js)

## Getting Started

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Build optimized production assets to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint on the project |

## Project Structure

```
megahertx/
├── public/           # Static assets (favicon, icons)
├── src/
│   ├── App.jsx       # Main page and all section components
│   ├── App.css       # Component styles
│   ├── index.css     # Tailwind entry
│   └── main.jsx      # React root
├── index.html
├── vite.config.js
└── package.json
```

The application is a single React component tree in `src/App.jsx`. Demo images are loaded from Unsplash URLs defined in the `images` object at the top of that file.

## Build for Production

```bash
npm run build
npm run preview
```

The `dist/` folder contains static files you can deploy to any static host (Netlify, Vercel, GitHub Pages, etc.).

For a local GitHub Pages–style build (asset paths under `/megahertx/`):

```bash
npm run build:pages
```

## Develop in GitHub Codespaces

1. Open [github.com/khushiiGupta016/megahertx](https://github.com/khushiiGupta016/megahertx).
2. Click **Code** → **Codespaces** → **Create codespace on main**.
3. Wait for the container to finish setup (`npm install` runs automatically).
4. In the terminal, start the dev server:

   ```bash
   npm run dev
   ```

5. When port **5173** is forwarded, open the **Ports** tab and choose **Open in Browser** (or use the popup).

The dev container binds Vite to all interfaces so port forwarding works inside Codespaces.

## Deploy to GitHub Pages

Deployment is automated with GitHub Actions whenever you push to `main` (including from a Codespace).

### One-time setup

1. On GitHub, go to **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

### Deploy from a Codespace

```bash
git add .
git commit -m "Your message"
git push origin main
```

The [Deploy to GitHub Pages](.github/workflows/deploy-pages.yml) workflow builds the site with `BASE_PATH=/megahertx/` and publishes it.

### Live URL

After the workflow succeeds:

**https://khushiiGupta016.github.io/megahertx/**

Check progress under the repo’s **Actions** tab.

## License

This project is for educational and portfolio use. The original Megahertz theme design and branding belong to their respective owners.
