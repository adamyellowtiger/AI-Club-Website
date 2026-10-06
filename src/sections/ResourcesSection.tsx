import { ArrowUpRight, FileText } from "lucide-react";
import { resources } from "../data/resources";
import { archivedMeetings } from "../data/archive";
import { orderedMeetings } from "../data/roadmap";
import MeetingResources from "../components/MeetingResources";
const groups = [
  { key: "start-here", title: "Start here", label: "01 / THE ESSENTIALS" },
  {
    key: "keep-learning",
    title: "Explore further",
    label: "02 / FOLLOW YOUR CURIOSITY",
  },
  {
    key: "revisit-sessions",
    title: "2025–26 archive",
    label: "03 / FROM PREVIOUS SESSIONS",
  },
];
export default function ResourcesSection() {
  const published = orderedMeetings.filter(
    (m) => m.slidesHref || m.recapHref || m.labHref,
  );
  return (
    <section id="resources" className="resources-region">
      <div className="section-shell">
        <div className="section-heading illustrated-heading">
          <div>
            <p className="eyebrow">The club library</p>
            <h2>Your next question starts here.</h2>
            <p>
              Catch up, prepare for a lab, or follow an idea a little further.
            </p>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}illustrations/byte_resources.png`}
            alt=""
            className="library-byte-image"
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="resource-grid">
          {groups.map((group) => (
            <div className="resource-group" key={group.key}>
              <p className="eyebrow">{group.label}</p>
              <h3>{group.title}</h3>
              {resources
                .filter((r) => r.category === group.key)
                .map((resource) => (
                  <a
                    key={resource.href}
                    className="resource-row"
                    href={resource.href}
                  >
                    <FileText size={19} />
                    <span>
                      <small>
                        {resource.href.endsWith(".pdf")
                          ? "PDF guide"
                          : "Session archive"}
                      </small>
                      <strong>{resource.title}</strong>
                      <small>{resource.description}</small>
                      <small className="text-link">
                        {resource.href.endsWith(".pdf")
                          ? "Open PDF ↗"
                          : "Browse archive ↗"}
                      </small>
                    </span>
                    <ArrowUpRight size={17} />
                  </a>
                ))}
            </div>
          ))}
        </div>
        <div className="current-resources">
          <div>
            <h3>2026–27 meeting materials</h3>
            <p>
              Slides, recaps, and lab notebooks live alongside each meeting.
            </p>
          </div>
          <a className="text-link" href="#/program">
            Browse the roadmap <ArrowUpRight size={17} />
          </a>
          {published.length > 0 ? (
            <div className="published-resources">
              {published.map((m) => (
                <article key={m.number}>
                  <h4>
                    Meeting {m.number}: {m.title}
                  </h4>
                  <MeetingResources meeting={m} />
                </article>
              ))}
            </div>
          ) : (
            <p className="small">
              Materials will appear here as they are published.
            </p>
          )}
        </div>
        <details className="history-details">
          <summary>
            Previous-year meeting history <ArrowUpRight size={17} />
          </summary>
          <div className="history-list">
            {archivedMeetings.map((m) => (
              <article key={m.id}>
                <h3>{m.topic}</h3>
                <p>{m.note}</p>
              </article>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
