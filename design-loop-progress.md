# Design loop progress — v5

## Reference reset

The previous direction leaned too hard toward generic creative-developer/Awwwards composition. The new primary bars are Roblox-specific:

- Hostiile — direct Roblox identity, work-led structure, large typographic sections, clear hire path.
- Aqua / Roport — proof-first hierarchy, immediate role + credibility + work evidence.

Older creative-development references remain useful only for motion restraint and spacing.

## Self-critique that triggered v5

The v4 hero failed because it relied on a clever input → kq → output diagram instead of selling the developer naturally. It also spent too much visual energy on abstract presentation before any proof existed.

## v5 changes

- Removed the system-diagram hero entirely.
- Removed decorative giant `kq` treatment.
- Rebuilt hero around a direct Roblox-scripter statement.
- Added a proof rail directly below the hero message.
- Strengthened Windows wheel smoothing through Lenis lerp interpolation.
- Rebuilt Work for large demo media rather than dark cards.
- Reworked Services around One task / Full system / Ongoing.
- Kept scripting-only boundary clear but moved it away from the main sales message.
- Reworked About into story + factual proof rows.
- Reworked Contact around the Discord handle as the main final action.
- Kept projects/testimonials hidden until real data exists.

## Checks

- TypeScript: PASS (`tsc --noEmit`)
- Fake project/testimonial content: NONE
- Project section auto-hide: PASS
- Dark-only design: PASS
- Mobile responsive rules: PRESENT
- Lenis smooth wheel: ENFORCED

Production bundling was not run in this Linux workspace because the copied dependency tree contains Windows-native optional Rollup/esbuild packages. The final ZIP intentionally excludes `node_modules`; run `npm install` on the target machine before `npm run dev` / `npm run build`.
