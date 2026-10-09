import { ArrowRight, MapPin, Clock, Check } from "lucide-react";
import { site } from "../data/site";
import { meetings, buildTotal, phases } from "../data/roadmap";
export default function HeroSection() {
  return <section id="top" className="hero"><div className="section-shell hero-layout">
    <div className="hero-intro">
      <p className="eyebrow"><span className="status-dot" />{site.school} · {site.year}</p>
      <h1 tabIndex={-1}>Big ideas.<br />Real intelligence.<br /><span>Built together.</span></h1>
      <p className="hero-copy">Understand AI. Build something real. Question what’s possible. A student-led community for curious minds at Bayview.</p>
      <div className="hero-actions"><a href="#/join" className="button primary">Find your people <ArrowRight size={17}/></a><a href="#/program" className="button secondary">Explore the program <ArrowRight size={17}/></a></div>
      <div className="hero-facts"><span><MapPin/>{site.room}</span><span><Clock/>{site.time}</span><span><Check/>Beginners welcome</span></div>
    </div>
    <div className="hero-illustration"><img src={`${import.meta.env.BASE_URL}illustrations/byte_hero.png`} alt="Byte, the AI Club's friendly robot mascot" className="hero-byte-image" width={1448} height={1086} decoding="async"/></div>
    <div className="program-stats"><div><strong>{meetings.length}<span> meetings</span></strong><span>One connected learning journey.</span></div><div><strong>{buildTotal}<span> hands-on sessions</span></strong><span>Less watching. More making.</span></div><div><strong>{phases.length}<span> phases</span></strong><span>From first principles to real systems.</span></div><a href="#/meetings">See what’s next <ArrowRight size={17}/></a></div>
  </div></section>;
}
