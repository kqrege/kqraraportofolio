# Assets, logos and icons

## Rule

Do not invent hand-drawn SVG icons/logos.

Use established icon libraries or official brand assets.

Good sources:

- Lucide
- Phosphor Icons
- Tabler Icons
- Simple Icons for supported brand marks
- official brand kits / official assets when available

## Brands likely used

- Roblox
- Robux / Roblox currency context
- Discord
- Telegram
- PayPal
- Litecoin

For Roblox/Robux, prefer official Roblox brand resources where available. Do not redraw the Roblox logo from memory.

For Discord, Telegram, PayPal, and Litecoin, use official or reputable library marks.

If an official mark cannot be sourced confidently, use plain text instead of a made-up approximation.

## How to use logos

Use them as small supporting details, not as a logo wall.

Examples:

- a small Roblox mark near `Roblox scripter`
- Discord/Telegram marks in contact actions
- small payment icons beside Robux / PayPal / LTC

A Roblox mention may get a restrained white glow or emphasis effect.

## Decorative graphics

For abstract hero visuals, prefer CSS, Canvas, lines, masks, and normal DOM elements.

Do not ask an AI to draw decorative SVG art just to fill space.

## Project media

Recommended folder shape:

```text
public/
  media/
    projects/
      <project-id>/
        poster.webp
        demo.mp4
```

Use compressed poster images. Videos should not load fully until the user plays them.
