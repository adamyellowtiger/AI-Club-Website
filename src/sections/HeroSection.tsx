import { ArrowRight, MapPin, Clock, Check } from "lucide-react";
import Byte from "../graphics/Byte";
import { site } from "../data/site";
import { meetings, theoryTotal, labTotal, phases } from "../data/roadmap";
export default function HeroSection() {
  return (
    <section id="top" className="hero">
      <div className="section-shell hero-layout">
        <div>
          <p className="eyebrow">
            <span className="status-dot" /> A new year of curious minds ·{" "}
            {site.year}
          </p>
          <h1>Bayview AI Club</h1>
          <p className="hero-tagline">
            Understand AI.
            <br />
            Test it. <span>Build with it.</span>
          </p>
          <p className="hero-copy">
            A student-led club at {site.school}. We make sense of modern AI
            through short lessons, hands-on experiments, and thoughtful
            questions. Come curious, learn alongside other students, and test
            ideas with real tools. No coding experience needed.
          </p>
          <div className="hero-actions">
            <a href="#join" className="button primary">
              Join the Club <ArrowRight size={18} />
            </a>
            <a href="#program" className="button secondary">
              Explore the {site.year} Program
            </a>
          </div>
          <div className="hero-facts">
            <span>
              <MapPin />
              {site.room}
            </span>
            <span>
              <Clock />
              {site.time}
            </span>
            <span>
              <Check />
              Beginners welcome
            </span>
          </div>
        </div>
        <div className="hero-illustration">
          <div className="diagram-label">CURIOSITY → EVIDENCE</div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="byte-note note-top">
            <span className="tiny-dot" /> Make a prediction.
          </div>
          <Byte pose="excited" className="hero-byte" />
          <div className="byte-note note-bottom">
            “Let’s find out together.”<span>BYTE / YOUR AI GUIDE</span>
          </div>
          <div className="diagram-cross cross-one">+</div>
          <div className="diagram-cross cross-two">+</div>
        </div>
        <div className="program-stats">
          <div>
            <strong>{meetings.length}</strong>
            <span>meetings, one connected journey</span>
          </div>
          <div>
            <strong>
              {theoryTotal} + {labTotal}
            </strong>
            <span>theory sessions + hands-on labs</span>
          </div>
          <div>
            <strong>{phases.length}</strong>
            <span>phases, from basics to real systems</span>
          </div>
          <a href="#meetings">
            What’s happening next <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
