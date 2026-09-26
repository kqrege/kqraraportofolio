# Visual direction

## Core direction

Dark, monochrome, expensive-looking, and clearly custom-designed.

It should feel professional without becoming boring. It should have enough motion and art direction that people remember it, but it cannot look like a generic “AI premium portfolio”.

The page is personal — `kq` — not a fake agency or studio.

## Palette

Use a restrained neutral palette. Starting tokens:

```css
--bg: #08090A;
--surface: #0D0F11;
--surface-2: #121416;
--text: #F3F3F0;
--muted: #92979D;
--line: rgba(255,255,255,.09);
--line-strong: rgba(255,255,255,.16);
--white-glow: rgba(255,255,255,.14);
```

White / near-white is effectively the accent color.

Do not introduce a bright brand color unless the design truly needs one later.

Allowed:

- subtle neutral radial light
- soft white glow
- grayscale texture / grain
- small changes in surface tone

Avoid:

- neon purple/blue AI gradients
- rainbow gradients
- cyberpunk palettes
- glassmorphism everywhere
- huge blurred colored blobs

## Typography

The typography should carry a lot of the design.

Recommended free starting pair:

- Display / body: **Instrument Sans**
- Technical / metadata: **IBM Plex Mono**

If the builder finds a better free pair with similar character, it may change them, but do not fall back to default system fonts or a generic Inter-only page.

Hero `kq` should be enormous and lowercase.

Suggested scale:

```css
hero wordmark: clamp(7rem, 22vw, 22rem)
section titles: clamp(2.75rem, 6vw, 5.5rem)
body: 1rem–1.125rem
meta/mono: .72rem–.82rem
```

Use typography, spacing, cropping, and motion before adding decorative objects.

## Layout

- wide desktop canvas
- clear grid
- generous negative space
- compact project cards
- strong hierarchy
- mostly sharp/clean geometry, not bubble UI
- small corner radii only where useful

Suggested content widths:

- max page shell: ~1440px
- content grid: ~1280px
- desktop gutters: 48–72px
- mobile gutters: 18–24px

## Hero background

Hero may use abstract technical visuals such as:

- lines
- grid distortions
- subtle node/connection field
- scanner-like sweeps
- masked light
- slight depth/parallax
- gentle procedural noise

Use CSS / Canvas / normal DOM effects for these. Do not hand-draw decorative SVG artwork just because an SVG is easy to generate.

No project footage in the hero.

## Anti-generic rules

Do not use these as the main design language:

- generic Tailwind SaaS cards
- giant gradient blobs
- “terminal window” gimmicks
- Matrix/code rain
- 3D glowing orb
- fake browser windows everywhere
- fake stat counters
- fake “trusted by” logo rows
- stock abstract 3D shapes
- endless pill buttons
- every section inside a rounded rectangle
- template-style “About / Skills / Projects / Contact” layout with no art direction

No emojis on the site unless they are part of user-provided content.
