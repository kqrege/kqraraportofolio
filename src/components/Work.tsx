import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play, X } from "lucide-react";
import type { Project } from "../data";
import { projects } from "../data";

function VideoDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const box = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const prevFocus = useRef<Element | null>(null);

  useEffect(() => {
    prevFocus.current = document.activeElement;
    closeBtn.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const f = box.current!.querySelectorAll<HTMLElement>('button, video[controls], [href], [tabindex]:not([tabindex="-1"])');
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      (prevFocus.current as HTMLElement | null)?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="dialog-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="dialog" role="dialog" aria-modal="true" aria-label={`${project.title} demo`} ref={box}>
        <div className="dialog-bar"><h2>{project.title} — demo</h2><button className="icon-btn" onClick={onClose} ref={closeBtn} aria-label="Close video"><X size={18} /></button></div>
        {project.video && <video src={project.video} controls autoPlay playsInline preload="metadata" poster={project.poster} />}
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onPlay }: { project: Project; index: number; onPlay: (p: Project) => void }) {
  return (
    <article className="project reveal-row">
      <button className="project-media" onClick={() => project.video && onPlay(project)} disabled={!project.video} aria-label={project.video ? `Play ${project.title} demo` : undefined}>
        <img src={project.poster} alt={`${project.title} preview`} loading="lazy" />
        {project.video && <span className="project-play"><Play size={18} fill="currentColor" aria-hidden="true" /> Watch demo</span>}
      </button>
      <div className="project-info">
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {!!project.details.length && <div className="project-tags">{project.details.map((d) => <span key={d}>{d}</span>)}</div>}
        </div>
        <ArrowUpRight className="project-arrow" size={22} aria-hidden="true" />
      </div>
      <div className="project-credit">
        <span>My work</span><p>{project.myWork.join(" · ")}</p>
        {!!project.providedAssets?.length && <><span>Provided</span><p>{project.providedAssets.join(" · ")}</p></>}
      </div>
    </article>
  );
}

export default function Work() {
  const [active, setActive] = useState<Project | null>(null);
  if (!projects.length) return null;
  return (
    <section id="work" className="work section-pad" aria-label="Work">
      <div className="shell">
        <div className="section-index draw-rule"><span>Selected work</span><span>{projects.length} finished system{projects.length === 1 ? "" : "s"}</span></div>
        <div className="work-head">
          <h2 className="section-lead">Made<br /><em>to work.</em></h2>
          <p>Real systems recorded in Studio. Open a project to see it running.</p>
        </div>
        <div className="work-list">{projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} onPlay={setActive} />)}</div>
      </div>
      {active && <VideoDialog project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
