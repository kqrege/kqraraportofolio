# kq — Roblox scripter portfolio

V5 redesign based on the project brief plus Roblox-specific portfolio references.

## Run

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm run preview
```

## GitHub Pages

Every push to `main` builds and deploys the site to [https://kqrege.github.io/kqraraportofolio/](https://kqrege.github.io/kqraraportofolio/).

## Add real work

Edit `src/data.ts`.

`projects` and `testimonials` intentionally start empty. Their sections appear automatically once real entries are added. Do not add fake content for layout filler.

## Main files

- `src/components/Hero.tsx` — first-screen identity / hire path
- `src/components/Work.tsx` — project video presentation
- `src/components/Services.tsx` — services + process
- `src/components/Info.tsx` — testimonials / about / FAQ
- `src/components/Closing.tsx` — contact + footer
- `src/index.css` — full design system and responsive layout
- `src/data.ts` — portfolio content
- `V5_DESIGN_DIRECTION.md` — current design rationale
