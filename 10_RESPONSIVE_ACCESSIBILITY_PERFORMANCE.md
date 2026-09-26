# Responsive, accessibility and performance

## Priority

Desktop gets the fullest visual experience, but tablet and mobile still need to feel intentionally designed.

Do not treat mobile as a compressed desktop screenshot.

## Desktop

- full-screen hero
- strongest scroll motion
- 2-column project grid initially
- roomy section spacing

## Tablet

- simplify oversized hero typography if needed
- reduce pin durations
- preserve hierarchy
- 2-column or 1-column project grid depending on actual width

## Mobile

- one-column work cards
- simpler hero motion
- no scroll traps
- no horizontal overflow
- readable navigation/menu
- buttons large enough to tap
- maintain the same dark art direction

## Accessibility

Required:

- semantic landmarks
- real buttons for actions
- real links for navigation
- visible keyboard focus
- project video dialog usable by keyboard
- descriptive alt text for meaningful images
- decorative visuals hidden from screen readers
- `prefers-reduced-motion` support
- good text/background contrast
- FAQ uses accessible disclosure/accordion behavior

## Performance

Visuals matter, but the page should still feel fast.

Rules:

- do not autoplay project videos
- use poster images
- lazy-load non-critical media
- `preload="none"` for project video where appropriate
- use WebP/AVIF posters
- cap Canvas/device-pixel-ratio work where needed
- avoid a large always-running animation loop if nothing is moving
- avoid huge JS libraries for one tiny effect
- do not ship several megabytes of unused icon packs
- keep animation transforms on compositor-friendly properties when possible

The goal is not a fake benchmark score. The real goal is smooth scrolling, responsive input, and no obvious loading jank.
