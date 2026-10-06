import { ArrowUpRight } from "lucide-react";
import { resourceUrl } from "../data/site";

export default function KickoffMeeting() {
  const presentation = resourceUrl("slides/Bayview_AI_Club_Kickoff.pptx");
  return (
    <section id="meeting-0" className="meeting-card completed kickoff-meeting" aria-labelledby="kickoff-title">
      <div className="timeline-number" aria-hidden="true">0</div>
      <div className="meeting-content">
        <div className="meeting-meta">
          <span className="meeting-identity">Meeting 0</span>
          <span className="meeting-status">Completed · Introduction</span>
        </div>
        <h3 id="kickoff-title">Kickoff</h3>
        <p className="meeting-summary">Welcome to Bayview AI Club</p>
        <div className="kickoff-presentation">
          <h4>Kickoff Presentation</h4>
          <p>Meet the club before the curriculum begins with Meeting 1.</p>
          <div className="resource-links">
            <a href={presentation} target="_blank" rel="noopener noreferrer">
              Open Presentation <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only"> (PowerPoint, opens in a new tab or downloads)</span>
            </a>
          </div>
          <a href={presentation} target="_blank" rel="noopener noreferrer" aria-label="View Kickoff Presentation (PowerPoint, opens in a new tab or downloads)">
            <img className="kickoff-preview" src={resourceUrl("slides/bayview-ai-club-kickoff-preview.png")} alt="Cover slide of the Bayview AI Club kickoff presentation" loading="lazy" />
          </a>
        </div>
      </div>
    </section>
  );
}
