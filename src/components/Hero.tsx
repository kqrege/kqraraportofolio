import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight, Check, Copy } from "lucide-react";
import { profile, projects } from "../data";
import { reduceMotion, useCopy } from "../hooks";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const { copied, copy } = useCopy();

  useEffect(() => {
    const hero = root.current;
    if (!hero) return;

    const onPointerMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty("--mx", `${x.toFixed(1)}%`);
      hero.style.setProperty("--my", `${y.toFixed(1)}%`);
    };
    hero.addEventListener("pointermove", onPointerMove, { passive: true });

    if (reduceMotion()) return () => hero.removeEventListener("pointermove", onPointerMove);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-meta", { y: 18, opacity: 0, duration: 0.7 }, 0.05)
        .from(".hero-title-line", { yPercent: 112, rotate: 1.4, duration: 1.05, stagger: 0.1 }, 0.2)
        .from(".hero-copy", { y: 22, opacity: 0, duration: 0.75 }, 0.56)
        .from(".hero-actions", { y: 18, opacity: 0, duration: 0.72 }, 0.66)
        .from(".hero-proof-item", { y: 18, opacity: 0, duration: 0.72, stagger: 0.08 }, 0.72)
        .from(".edge-note", { opacity: 0, duration: 0.8, stagger: 0.08 }, 0.84);

      gsap.to(".hero-stage", {
        yPercent: -10,
        opacity: 0.34,
        filter: "blur(5px)",
        ease: "none",
        scrollTrigger: { trigger: hero, start: "34% top", end: "bottom top", scrub: 0.8 },
      });

      gsap.to(".hero-proof", {
        yPercent: -20,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: hero, start: "65% top", end: "bottom top", scrub: 0.7 },
      });
    }, hero);

    return () => {
      hero.removeEventListener("pointermove", onPointerMove);
      ctx.revert();
    };
  }, []);

  const exploreTarget = projects.length ? "#work" : "#services";

  return (
    <section className="hero" id="top" ref={root} aria-label="Intro">
      <div className="hero-backdrop" aria-hidden="true" />
      <span className="edge-note edge-note-a">GAMEPLAY / BACKEND</span>
      <span className="edge-note edge-note-b">DATA / NETWORKING</span>
      <span className="edge-note edge-note-c">UI LOGIC / SYSTEMS</span>

      <div className="shell hero-frame">
        <div className="hero-meta">
          <span>Independent Roblox scripter</span>
          <span>{profile.location} · {profile.timezone}</span>
        </div>

        <div className="hero-stage">
          <h1 aria-label="I build Roblox systems that work.">
            <span className="hero-title-mask"><span className="hero-title-line">I build Roblox</span></span>
            <span className="hero-title-mask"><span className="hero-title-line hero-title-soft">systems that work.</span></span>
          </h1>

          <div className="hero-lower">
            <p className="hero-copy">One fix, one feature, or a complete system. I handle the scripting and fit the job around what your game actually needs.</p>
            <div className="hero-actions">
              <a className="hero-cta hero-cta-primary" href={exploreTarget}>
                <span>{projects.length ? "View my work" : "What I can build"}</span>
                <ArrowDown size={17} aria-hidden="true" />
              </a>
              <button className="hero-cta hero-cta-secondary" onClick={() => copy(profile.discord)}>
                <span>{copied ? "Copied @kqrara" : `Discord ${profile.discord}`}</span>
                {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        <div className="hero-proof" aria-label="Profile facts">
          <div className="hero-proof-item"><strong>{profile.experience}</strong><span>Roblox scripting</span></div>
          <div className="hero-proof-item"><strong>Any scope</strong><span>small task → full system</span></div>
          <div className="hero-proof-item"><strong>Client + server</strong><span>gameplay / backend / UI logic</span></div>
          <a className="hero-proof-link" href="#contact">Hire kq <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
