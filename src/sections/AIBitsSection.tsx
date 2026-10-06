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
export function AIBitArchive() {
  return (
    <section className="section-shell bit-archive">
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
            <div className="tag-row">
              {bit.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <details>
              <summary>Read the full Bit</summary>
              <BitBody bit={bit} />
            </details>
          </article>
        ))}
    </section>
  );
}
