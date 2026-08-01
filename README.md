# NOVAWEB AI — Premium AI Web Development Agency

An award-caliber, fully animated marketing site for **NOVAWEB AI**, the premium AI web
development agency founded by Savan Karangiya.

Built to feel like a product from the top of the Awwwards podium — deep navy + electric
blue + cyan glow design system, glassmorphism, aurora backgrounds, a custom cursor, magnetic
buttons, 3D tilt devices, a premium loader and smooth, scroll-driven motion throughout.

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** — custom design system (colors, shadows, keyframes)
- **Framer Motion** — page transitions, scroll reveals, parallax, counters, tilt
- **lucide-react** — icon system
- Fully modular component architecture under `src/components`

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/          Sections & UI primitives
    ui/                Reusable building blocks (Reveal, Tilt, Magnetic, ...)
  data/                Content layer (projects, services, FAQ, stats, ...)
  hooks/               useMotion helpers
  lib/                 Icon maps & brand SVGs
  App.jsx              Composes the full experience
  index.css            Global design system
```

## Live Demo Embed

The Hero and Featured Work sections embed the two real, deployed projects in live device
mockups (Smile Dental Care, IronCore Elite Fitness). If an embed is blocked by the target
site, a styled preview fallback image is shown automatically.

## Content Notes

- Testimonials intentionally contain **no fake quotes** — the section is framed as an
  invitation for the next real success story.
- Contact form is front-end validated with an animated success state; wire the `mailto`
  link or an endpoint of your choice for delivery.
- `public/resume.pdf` is a placeholder — replace it with the real resume.
