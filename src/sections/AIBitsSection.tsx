import { ArrowUpRight } from "lucide-react";
import { aiBits, type AIBit } from "../data/aiBits";
import { formatDate } from "../data/site";
function BitBody({ bit }: { bit: AIBit }) {
  return (
    <div className="bit-body">
      {bit.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {bit.supportingImages?.map((image) => (
        <figure key={image.src}>
          <img src={image.src} alt={image.alt} loading="lazy" />
          {image.caption && <figcaption>{image.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
export default function AIBitsSection() {
  const sorted = [...aiBits].sort((a, b) => b.date.localeCompare(a.date));
  const [latest, ...recent] = sorted;
  return (
    <section id="ai-bits">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Daily Bit of AI</p>
            <h2>A little curiosity goes a long way.</h2>
            <p>
              One idea at a time. Read the latest published Bit or revisit the
              collection.
            </p>
          </div>
          <a
            className="text-link"
            href={`${import.meta.env.BASE_URL}?view=bits`}
          >
            All Daily Bits <ArrowUpRight size={17} />
          </a>
        </div>
        {latest && (
          <div className="bits-layout">
            <article className="featured-bit">
              <div className="bit-copy">
                <p className="eyebrow">
                  Latest published ·{" "}
                  <time dateTime={latest.date}>{formatDate(latest.date)}</time>
                </p>
                <h3>{latest.title}</h3>
                <p>{latest.summary}</p>
                <div className="tag-row">
                  {latest.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <details>
                  <summary>
                    Read the full Bit <ArrowUpRight size={17} />
                  </summary>
                  <BitBody bit={latest} />
                </details>
              </div>
              {latest.imageSrc && (
                <a
                  className="bit-image"
                  href={latest.imageSrc}
                  aria-label={`Open illustration: ${latest.title}`}
                >
                  <img
                    src={latest.imageSrc}
                    alt={latest.imageAlt ?? latest.title}
                    loading="lazy"
                    width="1024"
                    height="1024"
                  />
                </a>
              )}
            </article>
            <div className="recent-bits">
              <p className="eyebrow">From the collection</p>
              {recent.slice(0, 3).map((bit) => (
                <article key={bit.id}>
                  <time dateTime={bit.date}>{formatDate(bit.date)}</time>
                  <h3>
                    <a
                      href={`${import.meta.env.BASE_URL}?view=bits#bit-${bit.id}`}
                    >
                      {bit.title}
                      <ArrowUpRight size={18} />
                    </a>
                  </h3>
                  <p>{bit.summary}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
export function AIBitArchive() {
  return (
    <main id="main" className="section-shell bit-archive">
      <a className="text-link" href={import.meta.env.BASE_URL}>
        ← Back to Bayview AI Club
      </a>
      <p className="eyebrow">The collection</p>
      <h1>Daily Bits of AI</h1>
      <p>
        Short explainers from the club. Original publication dates are
        preserved.
      </p>
      {[...aiBits]
        .sort((a, b) => b.date.localeCompare(a.date))
        .map((bit) => (
          <article id={`bit-${bit.id}`} key={bit.id}>
            <time dateTime={bit.date}>{formatDate(bit.date)}</time>
            <h2>{bit.title}</h2>
            <p>{bit.summary}</p>
            {bit.imageSrc && (
              <img
                src={bit.imageSrc}
                alt={bit.imageAlt ?? bit.title}
                loading="lazy"
                width="1024"
                height="1024"
              />
            )}
            {bit.displayCaption && (
              <p className="small">{bit.displayCaption}</p>
            )}
            <BitBody bit={bit} />
          </article>
        ))}
    </main>
  );
}
