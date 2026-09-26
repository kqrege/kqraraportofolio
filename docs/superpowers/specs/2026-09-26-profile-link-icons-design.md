# Profile Link and Payment Icons

## Goal

Make kq's Roblox identity easy to verify and make accepted payment methods easier to scan, while keeping the existing portfolio's restrained visual style.

## Design

- Add a small, labelled link to `https://www.roblox.com/users/3821489932/profile` in the contact details, beside the existing Telegram and payment information.
- Use locally bundled Roblox, PayPal, and Litecoin SVGs. Pair Roblox with the profile link and PayPal/Litecoin with their payment labels. Use the existing Lucide icon set for a simple coin mark beside Robux. Keep all icons decorative to assistive technology; adjacent text remains authoritative.
- Render payment methods as separate labelled items instead of one slash-separated string.
- Add semantic bold emphasis to `Roblox scripter` in the About introduction and `Roblox system` in the full-system service description. Do not bold every occurrence or change wording.
- Keep the profile link out of the hero and avoid a profile card, avatar, new dependency, and remote runtime asset requests.

## Ownership

- `src/data.ts` remains the source for the Roblox profile URL and payment labels.
- `src/components/Closing.tsx` owns the contact link and payment presentation.
- Existing copy components own emphasis where copy is rendered.
- `src/index.css` owns icon alignment and responsive layout.

## Acceptance

- Contact area has a keyboard-accessible, labelled Roblox profile link that opens the provided URL in a new tab safely.
- Robux, PayPal, and `Crypto (LTC preferred)` are visibly distinct, each paired with an SVG icon and text label.
- Bold emphasis uses semantic `<strong>` and remains selective.
- Icons remain legible against the dark palette and do not overflow mobile layout.
- `npm run build` passes.

## Not in scope

- Adding portfolio projects, metrics, Roblox avatar, or new contact channels.
- Changing deployment settings or adding packages.
