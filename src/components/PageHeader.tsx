import { pages, type Page } from "../navigation";
import { site } from "../data/site";
export default function PageHeader({ page }: { page: Page }) {
  const content = pages[page];
  return (
    <header className="page-header">
      <div className="section-shell">
        <p className="eyebrow">
          {site.year} / {content.label}
        </p>
        <h1 tabIndex={-1}>{content.heading}</h1>
        <p>{content.description}</p>
      </div>
    </header>
  );
}
