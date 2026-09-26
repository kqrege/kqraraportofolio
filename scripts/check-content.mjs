import assert from "node:assert/strict";
import { profile, projects, serviceGroups, testimonials } from "../src/data.ts";

const services = serviceGroups.flatMap(({ items }) => items);
assert.equal(new Set(services).size, services.length, "Service listed more than once");
assert(services.length && serviceGroups.every(({ name, items }) => name && items.length));
assert.equal(profile.displayName, "kq");
for (const p of projects) assert(p.id && p.title && p.description && p.poster && p.myWork.length, "Incomplete project");
for (const t of testimonials) assert(t.id && t.quote && t.author, "Incomplete testimonial");
console.log("Content check passed");
