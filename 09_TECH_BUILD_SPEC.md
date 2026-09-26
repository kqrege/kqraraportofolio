# Technical build spec

## Preferred stack for a new repo

If there is no existing app architecture to respect:

- React
- TypeScript
- Vite
- GSAP + ScrollTrigger
- Lenis for desktop smooth scrolling
- plain CSS / CSS Modules / well-structured global CSS variables

Do not use a heavy UI component library for the visual layer. Accessible primitives are fine if they are restyled completely.

Do not let Tailwind defaults, shadcn defaults, or stock component styling determine the look.

If the existing repo already uses Next.js or another reasonable React stack, keep it instead of rewriting the whole project for no reason.

## Page model

Single route / single page.

All content should be driven from a central data/config file so adding a project does not require editing layout code.

## Suggested component tree

```text
App
├─ SiteNav
├─ Hero
│  └─ HeroBackground
├─ WorkSection
│  └─ ProjectCard[]
│     └─ ProjectVideoDialog
├─ ServicesSection
├─ ProcessSection
├─ TestimonialsSection
├─ AboutSection
├─ FAQSection
├─ ContactSection
└─ Footer
```

## Hero implementation

Good tools:

- GSAP timeline
- ScrollTrigger
- CSS masks / clip-path
- Canvas or DOM line/grid background

Avoid WebGL unless there is a clear reason. A simple effect that runs smoothly is better than a shader added only to look expensive.

## Video modal

Must be keyboard accessible.

- Escape closes
- focus trapped while open
- focus returns to the trigger
- click outside may close
- real play controls available

## Discord behavior

Without a numeric Discord user ID:

- show `@kqrara`
- button copies it
- give short visual feedback such as `Copied`

Do not make up a Discord URL.

## External links

Telegram opens:

`https://t.me/waitinglyingonyourside`

Use safe external link attributes when opening a new tab.

## Analytics

Do not add analytics, tracking pixels, chat widgets, or cookie banners unless the user asks for them.

## Deployment

Keep the build static-host-friendly. It should work on common static hosts without requiring a server just for the portfolio.
