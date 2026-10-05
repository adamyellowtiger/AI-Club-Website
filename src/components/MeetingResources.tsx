import type { Meeting } from "../data/roadmap";
import { resourceUrl } from "../data/site";
export default function MeetingResources({ meeting }: { meeting: Meeting }) {
  const links = [
    { label: "Slides", href: meeting.slidesHref },
    { label: "Recap", href: meeting.recapHref },
    { label: "Lab / notebook", href: meeting.labHref },
  ].filter((link) => link.href);
  return links.length ? (
    <div className="resource-links">
      {links.map((link) => (
        <a
          key={link.label}
          href={resourceUrl(link.href!)}
          aria-label={`Meeting ${meeting.number} ${meeting.title}: ${link.label}`}
        >
          {link.label} ↗
        </a>
      ))}
    </div>
  ) : (
    <p className="resource-pending">
      Resources will be added as they become available.
    </p>
  );
}
