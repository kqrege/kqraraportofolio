import { ArrowUpRight, Check, Coins, Copy } from "lucide-react";
import { payments, profile } from "../data";
import { useCopy } from "../hooks";

const robloxIcon = new URL("../assets/brands/roblox.svg", import.meta.url).href;
const paypalIcon = new URL("../assets/brands/paypal.svg", import.meta.url).href;
const litecoinIcon = new URL("../assets/brands/litecoin.svg", import.meta.url).href;

export function Contact() {
  const { copied, copy } = useCopy();
  return (
    <section id="contact" className="contact section-pad" aria-labelledby="contact-title">
      <div className="shell contact-shell">
        <div className="section-index draw-rule"><span>Contact</span><span>Direct only</span></div>

        <div className="contact-head">
          <h2 id="contact-title" className="section-lead">Send me<br /><em>the job.</em></h2>
          <p>Tell me what you need, what you already have, and any deadline. I'll tell you what I can do and we go from there.</p>
        </div>

        <button className="discord-line" onClick={() => copy(profile.discord)} aria-label="Copy Discord username">
          <span className="contact-label">Discord · click to copy</span>
          <strong>{copied ? "copied." : profile.discord}</strong>
          {copied ? <Check size={28} aria-hidden="true" /> : <Copy size={28} aria-hidden="true" />}
        </button>

        <div className="contact-meta">
          <a href={profile.telegram} target="_blank" rel="noopener noreferrer">
            <span>Telegram</span><strong>waitinglyingonyourside</strong><ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="roblox-profile" href={profile.robloxProfileUrl} target="_blank" rel="noopener noreferrer">
            <img src={robloxIcon} alt="" />
            <strong>Roblox profile</strong>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
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
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="shell foot">
        <strong>kq</strong>
        <span>Roblox scripter · {profile.location}</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
