import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile, projects } from "../data";

const links = [
  ...(projects.length ? [{ href: "#work", label: "Work" }] : []),
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function SiteNav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > last && y > 180 && !open);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const close = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <>
      <header className={`nav${hidden ? " hidden" : ""}${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner shell">
          <a href="#top" className="wordmark" aria-label="kq — back to top" onClick={() => setOpen(false)}>kq</a>
          <nav aria-label="Primary">
            <ul className="nav-links">
              {links.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </nav>
          <a className="nav-cta" href="#contact">Hire me <ArrowUpRight size={15} aria-hidden="true" /></a>
          <button className="menu-btn" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      <nav className={`mobile-menu${open ? " open" : ""}`} aria-label="Mobile">
        <div className="mobile-menu-top"><span>kq</span><span>{profile.location}</span></div>
        {links.map((l, i) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            <span>{l.label}</span><span className="mono">0{i + 1}</span>
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}><span>Hire me</span><span className="mono">{profile.discord}</span></a>
      </nav>
    </>
  );
}
