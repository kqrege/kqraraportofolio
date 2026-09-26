# Motion and interaction

Use the user-provided `reference/scroll-film-studio/` skill as a motion/art-direction reference, especially its pure-code Lane A ideas.

The portfolio should **not** be one giant scroll film. Use the strongest motion where it matters and let the work remain easy to browse.

## Motion hierarchy

### Hero — strongest motion

The hero can use:

- char/word reveal for `kq`
- tracking/scale changes tied to scroll
- a short pinned section if it improves the transition
- background grid/lines moving at a different depth
- clip-path or mask transition into the page
- subtle white light/glow around a Roblox mention

The motion must have a clear direction. It should not look like random elements floating because GSAP is installed.

### Section transitions — medium motion

- clean reveal on first entry
- restrained horizontal/vertical movement
- occasional masked transitions
- small parallax when it has a reason

### Content / cards — low motion

- border/contrast shift
- 1–2% image scale at most
- small translation if needed
- no cards flying around

## Navbar

- hide on scroll down
- return on scroll up
- quick, smooth transition
- keep interaction responsive; do not wait for cinematic easing

## Videos

Project videos are **click-to-play**.

- do not autoplay
- poster image first
- video can open in an accessible modal/lightbox or expand in place
- site itself has no sound
- project demo audio may play only after the user starts the video
- `preload="none"` or similarly conservative loading until needed

## Smooth scrolling

Lenis is allowed/recommended on desktop if it feels good.

- do not create a scroll trap
- do not make wheel input feel delayed
- mobile/touch should remain natural
- disable or simplify for `prefers-reduced-motion`

## Reduced motion

If the user prefers reduced motion:

- remove scrubbed/pinned sequences that are not required
- render hero in its final readable state
- disable parallax
- keep simple fades only if acceptable

## GSAP note from the reference skill

When pinned ScrollTrigger scenes exist, create ambient/background ScrollTriggers **after** the pinned scenes so refresh order does not break positions after pin spacers.
