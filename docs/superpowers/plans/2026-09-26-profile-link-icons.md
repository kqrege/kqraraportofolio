# Profile Link and Payment Icons Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a discreet Roblox profile link, scannable payment icons, and selective semantic bold emphasis to the portfolio.

**Architecture:** Keep profile URL and payment labels in `src/data.ts`. Render contact links, payment marks, and copy emphasis in their existing components. Bundle three Simple Icons SVGs locally and use installed Lucide `Coins` icon for Robux.

**Tech Stack:** React, TypeScript, Vite, existing Lucide React dependency, local SVG assets.

## Global Constraints

- Keep all icons decorative; adjacent text labels remain authoritative.
- Open the Roblox profile in a new tab with `rel="noopener noreferrer"`.
- Use local assets; add no package or runtime network request.
- Keep profile link out of hero and avoid profile card/avatar.
- Bold only the two approved phrases: `Roblox scripter` and `Roblox system`.
- Production build must pass with `npm run build`.

---

### Task 1: Add profile, payment marks, and emphasis

**Files:**
- Create: `src/assets/brands/roblox.svg`
- Create: `src/assets/brands/paypal.svg`
- Create: `src/assets/brands/litecoin.svg`
- Modify: `src/data.ts`
- Modify: `src/components/Closing.tsx`
- Modify: `src/components/Info.tsx`
- Modify: `src/components/Services.tsx`
- Modify: `src/index.css`

**Interfaces:**
- `profile.robloxProfileUrl` stores the supplied Roblox profile URL.
- `payments` becomes a readonly list of `{ label, icon }`, where icon is `robux`, `paypal`, or `litecoin`.
- Contact UI renders these values with visible labels; Robux uses Lucide `Coins`, PayPal/Litecoin use local SVGs.

- [x] Save public Simple Icons marks locally (white variants match current palette):

```powershell
New-Item -ItemType Directory -Force src/assets/brands | Out-Null
Invoke-WebRequest https://cdn.simpleicons.org/roblox/FFFFFF -OutFile src/assets/brands/roblox.svg
Invoke-WebRequest https://cdn.simpleicons.org/paypal/FFFFFF -OutFile src/assets/brands/paypal.svg
Invoke-WebRequest https://cdn.simpleicons.org/litecoin/FFFFFF -OutFile src/assets/brands/litecoin.svg
```

- [x] In `src/data.ts`, add `robloxProfileUrl: "https://www.roblox.com/users/3821489932/profile"` to `profile`, and replace `payments` with:

```ts
export const payments = [
  { label: "Robux", icon: "robux" },
  { label: "PayPal", icon: "paypal" },
  { label: "Crypto (LTC preferred)", icon: "litecoin" },
] as const;
```

- [x] In `src/data.ts`, add optional `emphasis: "Roblox system"` to the full-system engagement while keeping full description in data.
- [x] In `src/components/Closing.tsx`, use static `new URL("../assets/brands/<name>.svg", import.meta.url).href` references for the local SVGs, and import `Coins` from `lucide-react`. Replace the current payment `<div>` with labelled per-method marks:

```tsx
<div className="payment-methods">
  <span>Payment</span>
  <div className="payment-options">
    {payments.map(({ label, icon }) => (
      <span className="payment-option" key={icon}>
        {icon === "robux" ? <Coins aria-hidden="true" /> : <img src={icon === "paypal" ? paypalIcon : litecoinIcon} alt="" />}
        <span>{label}</span>
      </span>
    ))}
  </div>
</div>
```

Add a contact link beside Telegram and payment:

```tsx
<a className="roblox-profile" href={profile.robloxProfileUrl} target="_blank" rel="noopener noreferrer">
  <img src={robloxIcon} alt="" />
  <strong>Roblox profile</strong>
  <ArrowUpRight size={18} aria-hidden="true" />
</a>
```

- [x] In `src/components/Closing.tsx`, render a safe new-tab profile link with a decorative icon and visible label; render each payment with decorative icon and visible label.
- [x] In `src/components/Info.tsx`, render the About intro phrase as `<strong>Roblox scripter</strong>` without changing surrounding wording.
- [x] In `src/components/Services.tsx`, render the data's emphasis phrase as `<strong>` without changing surrounding wording.
- [x] In `src/index.css`, use a three-column `.contact-meta` grid on wide screens and retain the existing one-column mobile layout. Style `.payment-options` and `.payment-option` as wrapping inline flex rows with 16px marks; keep `payment-option` labels at 11px. Give `.roblox-profile` a 20px icon and the existing contact-link type style. Set both approved `<strong>` phrases to `color:var(--ink);font-weight:650` so emphasis remains visible in muted paragraphs.
- [x] Run `npm run build`.

Expected: TypeScript and Vite production build pass; no new dependencies.

- [ ] Commit as `Add Roblox profile and payment icons`.
