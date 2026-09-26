export interface Project {
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

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  project?: string;
}

// Central content file. Add finished systems / real quotes here —
// sections appear automatically once these arrays are non-empty.
export const profile = {
  displayName: "kq",
  role: "Roblox scripter",
  location: "Romania",
  timezone: "EET / EEST (UTC+2 / UTC+3)",
  experience: "~1.5 years",
  discord: "@kqrara",
  telegram: "https://t.me/waitinglyingonyourside",
  robloxProfileUrl: "https://www.roblox.com/users/3821489932/profile",
};

export const payments = [
  { label: "Robux", icon: "robux" },
  { label: "PayPal", icon: "paypal" },
  { label: "Crypto (LTC preferred)", icon: "litecoin" },
] as const;

export const serviceGroups = [
  { name: "Systems", items: ["Full systems", "Inventories", "Round systems", "Procedural systems"] },
  { name: "Game logic", items: ["Data saving", "Admin systems", "Matchmaking", "Anti-exploit"] },
  { name: "Feature work", items: ["UI logic", "Shops / monetization", "Bug fixes / small tasks", "General Roblox scripting"] },
  { name: "Performance", items: ["Optimization"] },
];


export const engagements = [
  { n: "01", title: "One task", body: "A bug, one feature, UI logic, or something specific you need done." },
  { n: "02", title: "Full system", body: "A complete Roblox system built, connected and ready to use in your game.", emphasis: "Roblox system" },
  { n: "03", title: "Ongoing", body: "Hourly, daily, weekly, or longer-term scripting when you need another developer around." },
] satisfies Array<{ n: string; title: string; body: string; emphasis?: string }>;

export const capabilities = [
  "Full systems", "Inventories", "Data saving", "Shops / monetization", "Admin systems",
  "Matchmaking", "Optimization", "Anti-exploit", "Round systems", "Procedural systems",
  "UI logic", "Bug fixes", "General scripting"
];

export const steps = [
  { n: "01", title: "Send me what you need.", body: "A spec, a rough idea, a broken script — whatever you have." },
  { n: "02", title: "We agree on the job.", body: "Scope, payment, timing, and what assets you provide." },
  { n: "03", title: "I build it.", body: "Scripting, wiring, validation — the working system." },
  { n: "04", title: "You test it.", body: "You try it in your game and tell me what needs changing." },
  { n: "05", title: "Fixes follow.", body: "Fixes or changes follow whatever we agreed for the job." },
];

export const faqs = [
  {
    q: "Can I hire you for a small task?",
    a: "Yes. It doesn't have to be a full system. Bug fixes, small features and one-off scripting work are fine.",
  },
  {
    q: "Do you make UI, GFX, VFX or SFX?",
    a: "I handle the scripting side. I can script provided UI, add small interactions, and connect provided effects or sounds. I don't sell UI, GFX, VFX or SFX creation as a service.",
  },
  {
    q: "How do you charge?",
    a: "Depends on the job. I can work per task, per project, hourly, daily, weekly, or as ongoing development.",
  },
  {
    q: "What payment methods do you take?",
    a: "Robux, PayPal, and crypto. LTC is preferred for crypto.",
  },
  {
    q: "How fast can you finish something?",
    a: "It depends on the scope. Small tasks can often be done quickly. Larger systems need a proper estimate first.",
  },
  {
    q: "Can I hire you long-term?",
    a: "Yes. One-off work and ongoing development are both fine.",
  },
];

export const projects: Project[] = [];

export const testimonials: Testimonial[] = [];
