# kq Portfolio — Design Bar

Primary references: Arnaud Rocca (home/interaction system), Joffrey Spitzer (motion restraint), Dennis Snellenberg (hierarchy and work-first presentation).

The next redesign is not allowed to pass because it is merely clean. These are visible mechanisms the rendered site must meet.

## 1. The first screen has one dominant idea
- One visual/interaction concept owns the hero.
- `kq` and the Roblox-scripter message are immediately readable, but secondary metadata never competes with them.
- Above the fold uses no more than three obvious text scales.
- At least roughly one third of the frame remains intentional negative space; empty areas cannot be filled with decorative shapes that do nothing.

## 2. The hero has an interaction that belongs to this site
- The opening needs one memorable behavior tied to `kq` / systems / Roblox scripting.
- It cannot be a generic cursor glow, floating orb, particle field, grid, or giant decorative circle by itself.
- Mouse/scroll input must visibly affect the composition in a controlled way, and the effect must resolve back to a clean resting state.
- A screenshot with animation paused must still look designed; motion cannot be hiding a weak layout.

## 3. Motion follows one rhythm
- Smooth scrolling must be obvious on a normal Windows mouse wheel rather than depending on OS scroll smoothing.
- Text reveals use masks/lines/characters with a consistent motion language instead of unrelated fade-ups on every section.
- Major entrances should generally live around ~0.8–1.1s with restrained stagger and an expo/power-style ease; tiny hover feedback is faster.
- Scroll-linked motion always resolves in a clear direction and does not wobble, bounce, or stack multiple effects on the same element.
- Reduced-motion mode still leaves a complete, good-looking page.

## 4. Work becomes the visual proof, not UI chrome
- Once real projects exist, project media is larger and more visually dominant than tags, labels, buttons, or borders around it.
- Project entries avoid default dark-card styling. They can share a grid, but the media, crop, typography, and spacing define them.
- Technical details stay readable without turning each project into a dashboard panel.
- No fake projects, stats, thumbnails, or testimonials are added to make the layout look fuller.

## 5. Sections are composed, not boxed
- Services, process, about, FAQ, and contact cannot all reuse the same container/card pattern.
- Structural rules, whitespace, type scale, alignment changes, sticky moments, and cropping do most of the visual work.
- Pills, chips, bordered rectangles, mono labels, and numbered rows are used only when they carry actual information.
- If three consecutive sections look like interchangeable component templates, the pass fails.

## 6. Monochrome is controlled, not flat
- The base stays near-black/graphite with off-white text.
- Bright white is reserved for the focal thing in a viewport; secondary copy drops clearly in contrast.
- Roblox/brand marks may receive a restrained temporary emphasis, but there is no permanent neon accent, purple gradient, or glass glow language.
- Decorative texture stays subtle enough that typography remains the first read.

## 7. Every viewport has hierarchy and tension
- Desktop composition may be asymmetric, but nothing should look accidentally stranded (for example location text floating alone with no relationship to the hero).
- Navigation, metadata, headline, CTAs, and section transitions must feel like parts of the same grid.
- Mobile/tablet can simplify motion and composition, but cannot degrade into “desktop blocks stacked vertically.”
- At each major viewport, a critic should be able to point to the first thing to look at, the second thing, and the intended next action without guessing.

## Automatic fail conditions
- Generic AI portfolio patterns dominate the first impression.
- A large decorative object exists mainly to fill empty space.
- Smooth scrolling feels indistinguishable from raw Windows wheel stepping.
- The hero is only a centered/offset giant sentence plus metadata.
- Visual interest depends on gradients, glow, particles, glass, or random WebGL instead of composition.
- The redesign looks good in stills but feels disconnected or jittery while scrolling.

## Source notes
- Arnaud Rocca: impactful home page built around a distinct slider/navigation interaction, minimalist project layouts, generous whitespace, neutral base, GSAP + Lenis motion system.
- Joffrey Spitzer: restrained layouts, consistent line/character reveals, subtle visual entrances, continuity-focused transitions, GSAP + Lenis.
- Dennis Snellenberg: large typographic hierarchy, sparse supporting copy, work-forward structure, interaction/micro-animation as part of the identity.
