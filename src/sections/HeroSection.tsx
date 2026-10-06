import { ArrowRight, MapPin, Clock, Check } from "lucide-react";
import { site } from "../data/site";
import { meetings, buildTotal, phases } from "../data/roadmap";
export default function HeroSection() {
  return (
    <section id="top" className="hero">
      <div className="section-shell hero-layout">
        <div>
          <p className="eyebrow">
            <span className="status-dot" /> {site.year} · {site.school}
          </p>
          <h1 tabIndex={-1}>Bayview AI Club</h1>
          <p className="hero-tagline">
            Understand AI.
            <br />
            Build it. <span>Test where it breaks.</span>
          </p>
          <p className="hero-copy">
            Learn how modern AI works, write code, and experiment with real
            models. Investigate where systems fail and explore where these
            skills are used. Our student-led club welcomes beginners: curiosity
            matters more than prior experience.
          </p>
          <div className="hero-actions">
            <a href="#/join" className="button primary">
              Join the Club <ArrowRight size={18} />
            </a>
            <a href="#/program" className="button secondary">
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
          <img
            src={`${import.meta.env.BASE_URL}illustrations/byte_hero.png`}
            alt=""
            className="hero-byte-image"
            width={1448}
            height={1086}
            decoding="async"
          />
        </div>
        <div className="program-stats">
          <div>
            <strong>{meetings.length}</strong>
            <span>meetings across one connected program</span>
          </div>
          <div>
            <strong>{buildTotal}</strong>
            <span>coding, project & showcase sessions</span>
          </div>
          <div>
            <strong>{phases.length}</strong>
            <span>phases, from basics to real systems</span>
          </div>
          <a href="#/meetings">
            What’s happening next <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
