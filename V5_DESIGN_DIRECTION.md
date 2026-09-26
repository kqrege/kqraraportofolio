# kq portfolio v5 — design direction

This pass changes the reference hierarchy.

Primary references:
- https://www.hostiile.xyz/
- https://roport.lol/AquaBlox000

Use them for the ideas behind the presentation, not for copying their layouts, writing, assets, or branding.

## What this version is trying to do

- Make `Roblox scripter` obvious immediately.
- Sell the work before trying to look like an art experiment.
- Keep the page dark and highly designed without becoming a generic AI portfolio.
- Use large type, strong spacing, thin rules, direct copy, and controlled motion.
- Make real system videos the strongest visual element once project data is added.
- Keep proof close to the hero: experience, scope, client/server capability.
- Keep the hire path obvious from the first screen onward.

## Hero rules

The hero is no longer a diagram, orbit, giant decorative `kq`, or abstract system map.

It has one job:
1. identify kq as a Roblox scripter;
2. state what he builds;
3. show enough proof to trust the claim;
4. give a direct way to continue or hire him.

Headline:
`I build Roblox / systems that work.`

The second line is intentionally softer/italic so the hierarchy feels designed without adding an accent color.

## Motion

Lenis is intentionally configured with a low lerp so discrete Windows mouse-wheel ticks are interpolated instead of inheriting rough OS scrolling.

- `lerp: 0.07` for normal sessions
- `smoothWheel: true`
- `wheelMultiplier: 0.78`
- Lenis driven by the GSAP ticker
- ScrollTrigger updated from Lenis scroll events

Motion should stay restrained: masked headline entrance, section reveals, sticky process states, hover movement, and hero scroll-away behavior.

## Project presentation

When real projects are added to `src/data.ts`, the Work section appears automatically.

Project media should be the dominant visual. Text, tags, and credits live underneath rather than inside generic cards. No fake work should be added just to fill the page.
