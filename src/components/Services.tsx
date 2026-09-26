import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { capabilities, engagements, steps } from "../data";

export function Services() {
  return (
    <section id="services" className="services section-pad" aria-labelledby="services-title">
      <div className="shell">
        <div className="section-index draw-rule"><span>Services</span><span>What you can hire me for</span></div>

        <div className="services-intro">
          <h2 id="services-title" className="section-lead">One fix.<br /><em>Or the whole system.</em></h2>
          <p>No packages. Tell me what needs scripting and we scope the job around that.</p>
        </div>

        <div className="engagement-list" aria-label="Ways to hire kq">
          {engagements.map((item) => {
            const copy = item.emphasis ? item.body.split(item.emphasis) : undefined;
            return (
              <a className="engagement-row reveal-row" href="#contact" key={item.n}>
                <span className="engagement-num">{item.n}</span>
                <h3>{item.title}</h3>
                <p>{copy ? <>{copy[0]}<strong>{item.emphasis}</strong>{copy[1]}</> : item.body}</p>
                <ArrowUpRight size={22} aria-hidden="true" />
              </a>
            );
          })}
        </div>

        <div className="capability-block reveal-row">
          <span className="capability-label">I can handle</span>
          <div className="capability-stream" aria-label="Scripting capabilities">
            {capabilities.map((capability, index) => (
              <span key={capability}>{capability}{index < capabilities.length - 1 ? <i> / </i> : null}</span>
            ))}
          </div>
        </div>

        <div className="service-boundary reveal-row">
          <span>Scripting only</span>
          <p>I can wire up provided UI, sounds and effects. UI design, GFX, VFX and SFX creation are separate jobs and should be provided unless we agree otherwise.</p>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="process section-pad" aria-labelledby="process-title">
      <div className="shell">
        <div className="section-index draw-rule"><span>Process</span><span>Simple on purpose</span></div>
        <div className="process-layout">
          <div className="process-heading">
            <h2 id="process-title" className="section-lead">You tell me<br /><em>what needs doing.</em></h2>
            <p>A full spec is fine. A rough idea is fine too. We agree on the job before I touch anything.</p>
            <ArrowDownRight className="process-arrow" aria-hidden="true" />
          </div>
          <ol className="process-list">
            {steps.map((s) => (
              <li key={s.n} className="reveal-row">
                <span className="step-num">{s.n}</span>
                <div><h3>{s.title}</h3><p>{s.body}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
