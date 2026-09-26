import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import SiteNav from "./components/SiteNav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import { Process, Services } from "./components/Services";
import { About, FAQ, Testimonials } from "./components/Info";
import { Contact, Footer } from "./components/Closing";
import { reduceMotion } from "./hooks";

gsap.registerPlugin(ScrollTrigger);

const anchorEase = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export default function App() {
  useEffect(() => {
    const reduced = reduceMotion();
    const root = document.documentElement;
    root.classList.toggle("no-motion", reduced);

    // Keep Lenis active even when the OS/browser's own scrolling is abrupt.
    // Reduced-motion only disables decorative animation; wheel input still gets
    // normalized into a controlled scroll so the site does not feel stepped.
    const lenis = new Lenis({
      // Low lerp deliberately smooths discrete Windows mouse-wheel steps instead
      // of inheriting the OS/browser's abrupt scroll feel.
      lerp: reduced ? 0.18 : 0.07,
      smoothWheel: true,
      wheelMultiplier: reduced ? 0.95 : 0.78,
      touchMultiplier: 1,
      syncTouch: false,
      orientation: "vertical",
      gestureOrientation: "vertical",
      autoResize: true,
    });

    const cleanups: Array<() => void> = [];

    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onLenisScroll);

    const tickLenis = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickLenis);
    gsap.ticker.lagSmoothing(0);
    cleanups.push(() => gsap.ticker.remove(tickLenis));

    const onAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      history.pushState(null, "", href);
      lenis.scrollTo(target as HTMLElement, {
        offset: target.id === "services" ? 112 : target.id === "contact" ? 18 : -76,
        duration: reduced ? 0.45 : 1.15,
        easing: anchorEase,
        lock: false,
      });
    };
    document.addEventListener("click", onAnchorClick);
    cleanups.push(() => document.removeEventListener("click", onAnchorClick));

    const ctx = gsap.context(() => {
      if (reduced) return;

      gsap.utils.toArray<HTMLElement>(".section-lead").forEach((el) => {
        gsap.from(el, {
          y: 54,
          opacity: 0,
          clipPath: "inset(0 0 24% 0)",
          duration: 1.05,
          ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".draw-rule").forEach((el) => {
        gsap.from(el, {
          "--rule": "0%",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 94%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".reveal-row").forEach((el) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.78,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });

      const processRows = gsap.utils.toArray<HTMLElement>(".process-list li");
      processRows.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 62%",
          end: "bottom 40%",
          onEnter: () => el.classList.add("is-current"),
          onEnterBack: () => el.classList.add("is-current"),
          onLeave: () => el.classList.remove("is-current"),
          onLeaveBack: () => el.classList.remove("is-current"),
        });
      });
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cleanups.forEach((fn) => fn());
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <div className="site">
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteNav />
      <main id="main">
        <Hero />
        <Work />
        <Services />
        <Process />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
