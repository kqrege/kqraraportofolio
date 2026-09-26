import { Plus } from "lucide-react";
import { faqs, profile, testimonials } from "../data";

export function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <section id="testimonials" className="testimonials section-pad" aria-labelledby="testimonials-title">
      <div className="shell">
        <div className="section-index draw-rule"><span>Feedback</span><span>People I've worked with</span></div>
        <h2 className="visually-hidden" id="testimonials-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <figure key={t.id} className="testimonial reveal-row">
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>{t.author}{t.role ? ` — ${t.role}` : ""}{t.project ? ` · ${t.project}` : ""}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="about section-pad" aria-labelledby="about-title">
      <div className="shell">
        <div className="section-index draw-rule"><span>About</span><span>The person doing the scripting</span></div>

        <div className="about-layout">
          <div className="about-story">
            <h2 id="about-title" className="section-lead">Just the part<br /><em>I'm actually good at.</em></h2>
            <p className="about-intro">I'm kq, a <strong>Roblox scripter</strong> from Romania. I take small commissions, full systems, and longer development work.</p>
            <div className="about-copy">
              <p>If you already know exactly what you want, send the spec. If you only know what the feature should do, I can help work out the logic before building it.</p>
              <p>The portfolio stays focused on scripting. I don't claim UI, GFX, VFX or SFX work that wasn't mine.</p>
            </div>
          </div>
          <aside className="about-facts" aria-label="Profile facts">
            <div><span>Experience</span><strong>{profile.experience}</strong></div>
            <div><span>Based in</span><strong>{profile.location}</strong></div>
            <div><span>Timezone</span><strong>EET / EEST</strong><small>UTC+2 / UTC+3</small></div>
            <div><span>Work style</span><strong>Remote</strong></div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="faq section-pad" aria-labelledby="faq-title">
      <div className="shell">
        <div className="section-index draw-rule"><span>FAQ</span><span>Before you message</span></div>
        <div className="faq-layout">
          <div className="faq-heading">
            <h2 id="faq-title" className="section-lead">Quick<br /><em>answers.</em></h2>
            <p>If yours isn't here, just DM me.</p>
          </div>
          <div className="faq-list">
            {faqs.map((f) => (
              <details className="faq-item reveal-row" key={f.q}>
                <summary><span>{f.q}</span><Plus size={20} aria-hidden="true" /></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
