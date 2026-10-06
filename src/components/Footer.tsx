import { channels, site } from "../data/site";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div>
          <a className="wordmark" href="#/home">
            Bayview <span className="brand-blue">AI Club</span>
          </a>
          <p>
            {site.school} · {site.year}
          </p>
          <p>Stay curious. Build together.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <a href="#/program">Program</a>
          <a href="#/meetings">Meetings</a>
          <a href="#/ai-bits">AI Bits</a>
          <a href="#/resources">Resources</a>
        </div>
        <div>
          <h2>Club</h2>
          <a href="#/home">Home</a>
          <a href="#/team">Team</a>
          <a href="#/join">Join</a>
          <a href="#/join/faq">FAQ</a>
        </div>
        <div>
          <h2>Connect</h2>
          {channels.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.name} ↗
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
