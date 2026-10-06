import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Sparkles,
  Library,
} from "lucide-react";
import { aiBits } from "../data/aiBits";
import { formatDate } from "../data/site";
const destinations = [
  {
    name: "Program",
    href: "program",
    icon: BookOpen,
    text: "Follow 28 meetings from first models to your final build.",
  },
  {
    name: "Meetings",
    href: "meetings",
    icon: CalendarDays,
    text: "Find the next topic, meeting details, and past sessions.",
  },
  {
    name: "AI Bits",
    href: "ai-bits",
    icon: Sparkles,
    text: "Explore one interesting AI idea at a time.",
  },
  {
    name: "Resources",
    href: "resources",
    icon: Library,
    text: "Pick up a guide, revisit slides, or find your next tool.",
  },
];
export default function HomePreview() {
  return (
    <>
      <section className="section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Find your starting point</p>
            <h2>Follow your curiosity.</h2>
            <p>
              Understand the ideas. Build something real. Test its limits.
              Discover where these skills can take you.
            </p>
          </div>
        </div>
        <div className="discovery-grid">
          {destinations.map(({ name, href, icon: Icon, text }) => (
            <a className="discovery-card" href={`#/${href}`} key={href}>
              <Icon size={25} />
              <h3>
                {name} <ArrowUpRight size={18} />
              </h3>
              <p>{text}</p>
            </a>
          ))}
        </div>
      </section>
      <section className="home-bits">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Daily Bits of AI</p>
              <h2>Small reads. Big questions.</h2>
            </div>
            <a className="text-link" href="#/ai-bits">
              Explore AI Bits <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="home-bit-grid">
            {[...aiBits]
              .sort((a, b) => b.date.localeCompare(a.date))
              .slice(0, 3)
              .map((bit) => (
                <article key={bit.id}>
                  <time dateTime={bit.date}>{formatDate(bit.date)}</time>
                  <h3>
                    <a href={`#/ai-bits/bit-${bit.id}`}>{bit.title} ↗</a>
                  </h3>
                  <p>{bit.summary}</p>
                </article>
              ))}
          </div>
        </div>
      </section>
      <section className="section-shell home-join">
        <div>
          <p className="eyebrow">Beginners belong here</p>
          <h2>Your next question starts with us.</h2>
          <p>Room 129 · After school · 20–30 minutes. Bring your curiosity.</p>
        </div>
        <a className="button primary" href="#/join">
          Join the Club <ArrowUpRight size={18} />
        </a>
      </section>
    </>
  );
}
