import { site } from "../data/site";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <a className="wordmark" href={`${import.meta.env.BASE_URL}#top`}>
          Bayview <span className="brand-blue">AI Club</span>
        </a>
        <p>
          {site.school} · {site.year}
        </p>
        <a href={`${import.meta.env.BASE_URL}#join`}>
          Stay curious. Join us. ↗
        </a>
      </div>
    </footer>
  );
}
