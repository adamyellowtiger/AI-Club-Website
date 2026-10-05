import {
  ArrowUpRight,
  MessageCircle,
  GraduationCap,
  Instagram,
} from "lucide-react";
import { channels, site } from "../data/site";
import { faqs } from "../data/faq";
export default function JoinSection() {
  const icons = {
    Discord: MessageCircle,
    "Google Classroom": GraduationCap,
    Instagram,
  };
  return (
    <section id="join" className="join-region">
      <div className="section-shell">
        <div className="join-intro">
          <p className="eyebrow">There’s a place for your curiosity</p>
          <h2>
            You don’t have to know AI.
            <br />
            You just have to wonder.
          </h2>
          <p>
            Join other Bayview students in {site.room}. Start with the club
            channels for confirmed dates and announcements.
          </p>
        </div>
        <div className="join-channels">
          {channels.map((channel) => {
            const Icon = icons[channel.name as keyof typeof icons];
            return (
              <article
                key={channel.name}
                className={
                  channel.name === "Discord"
                    ? "channel featured-channel"
                    : "channel"
                }
              >
                <Icon size={25} />
                <h3>{channel.name}</h3>
                <p>{channel.description}</p>
                <a
                  className="button"
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {channel.label}
                  <ArrowUpRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
        <p className="classroom-note">
          Use your YRDSB gapps account for Google Classroom. Class code:{" "}
          <strong>{site.classroomCode}</strong>
        </p>
        <div id="faq" className="faq-layout">
          <div>
            <p className="eyebrow">Good questions</p>
            <h2>Before you drop by.</h2>
          </div>
          <div>
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>
                  {faq.q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
