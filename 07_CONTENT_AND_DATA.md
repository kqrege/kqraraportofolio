# Content and data model

The site should be data-driven so new systems and testimonials can be added without rebuilding the layout.

A starter JSON file is included at `data/portfolio-data.json`.

## Project object

Recommended fields:

```ts
interface Project {
  id: string;
  title: string;
  description: string;
  poster: string;
  video?: string;
  details: string[];
  myWork: string[];
  providedAssets?: string[];
  metrics?: Array<{ label: string; value: string }>;
  testimonialId?: string;
}
```

Rules:

- only completed systems
- only real metrics
- no source code
- no fake client/project names
- no fake thumbnails
- `providedAssets` should be used whenever a demo includes UI/GFX/VFX/SFX that kq did not create

## Testimonial object

```ts
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  project?: string;
}
```

Only real quotes.

## Empty states

Public production behavior:

- `projects.length === 0` → hide Work and its nav link
- `testimonials.length === 0` → hide Testimonials

Do not show `Coming soon`, fake cards, blurred placeholders, or invented examples publicly.

During local development, mock content may be used only if it is clearly isolated as dev-only and cannot leak into the production build.

## Adding future systems

The portfolio is meant to grow over time.

When a new finished system is added:

1. record it in Roblox Studio
2. create a clean poster frame
3. write one sentence explaining what it does
4. add technical details that prove the work without exposing source
5. list exactly what kq handled
6. list provided visual/audio assets when relevant
7. add a metric only if it is real and useful
