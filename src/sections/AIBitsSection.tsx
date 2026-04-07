import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { aiBits } from '../data/content';
import ByteBot from '../graphics/ByteBot';

export default function AIBitsSection() {
  const [featuredBit, ...archiveBits] = aiBits;
  const [expandedBitId, setExpandedBitId] = useState<string | null>(null);

  const toggleBit = (bitId: string) => {
    setExpandedBitId((current) => (current === bitId ? null : bitId));
  };

  return (
    <section id="ai-bits">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Daily Bit of AI"
          title="Recent Daily Bits"
          subtitle="Quick summaries first, with full explainers available when you want to dive deeper."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="card">
            {(featuredBit.label || featuredBit.dateLabel) && (
              <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {featuredBit.label && <span>{featuredBit.label}</span>}
                {featuredBit.dateLabel && (
                  <>
                    <span aria-hidden="true">•</span>
                    <span>{featuredBit.dateLabel}</span>
                  </>
                )}
              </div>
            )}
            <div className="mb-3 flex flex-wrap gap-2">
              {featuredBit.tags.map((tag) => (
                <span key={tag} className="pill">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{featuredBit.title}</h3>
            <p className="mt-3 text-slate-600">{featuredBit.summary}</p>
            {featuredBit.imageSrc && (
              <img
                src={featuredBit.imageSrc}
                alt={featuredBit.imageAlt ?? `${featuredBit.title} visual`}
                className="mt-4 w-full rounded-xl border border-slate-200"
              />
            )}
            {featuredBit.displayCaption && <p className="mt-3 text-sm text-slate-500">{featuredBit.displayCaption}</p>}
            <button
              type="button"
              onClick={() => toggleBit(featuredBit.id)}
              className="mt-6 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              {expandedBitId === featuredBit.id ? 'Show less' : 'Read full bit'}
            </button>
            {expandedBitId === featuredBit.id && (
              <div className="mt-4 space-y-3 text-slate-600">
                {featuredBit.body.map((paragraph, index) => (
                  <p key={`${featuredBit.id}-${index}`}>{paragraph}</p>
                ))}
                {featuredBit.supportingImages && featuredBit.supportingImages.length > 0 && (
                  <div className="grid gap-4 pt-2 sm:grid-cols-2">
                    {featuredBit.supportingImages.map((image, index) => (
                      <figure key={`${featuredBit.id}-support-${index}`} className="space-y-2">
                        <img src={image.src} alt={image.alt} className="w-full rounded-xl border border-slate-200" />
                        {image.caption && <figcaption className="text-sm text-slate-500">{image.caption}</figcaption>}
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            )}
          </article>

          <div className="space-y-4">
            <div className="card flex items-center justify-center">
              <ByteBot className="h-36 w-36" pose="point" />
            </div>
            {archiveBits.map((bit) => (
              <article key={bit.id} className="card">
                {(bit.label || bit.dateLabel) && (
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    {bit.label && <span>{bit.label}</span>}
                    {bit.dateLabel && (
                      <>
                        <span aria-hidden="true">•</span>
                        <span>{bit.dateLabel}</span>
                      </>
                    )}
                  </div>
                )}
                <div className="mb-3 flex flex-wrap gap-2">
                  {bit.tags.map((tag) => (
                    <span key={tag} className="pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="font-bold text-slate-900">{bit.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{bit.summary}</p>
                {bit.imageSrc && (
                  <img
                    src={bit.imageSrc}
                    alt={bit.imageAlt ?? `${bit.title} visual`}
                    className="mt-3 w-full rounded-lg border border-slate-200"
                  />
                )}
                {bit.displayCaption && <p className="mt-2 text-xs text-slate-500">{bit.displayCaption}</p>}
                <button
                  type="button"
                  onClick={() => toggleBit(bit.id)}
                  className="mt-4 inline-flex rounded-lg border border-blue-200 bg-white px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-50"
                >
                  {expandedBitId === bit.id ? 'Show less' : 'Read more'}
                </button>
                {expandedBitId === bit.id && (
                  <div className="mt-4 space-y-3 text-sm text-slate-600">
                    {bit.body.map((paragraph, index) => (
                      <p key={`${bit.id}-${index}`}>{paragraph}</p>
                    ))}
                    {bit.supportingImages && bit.supportingImages.length > 0 && (
                      <div className="grid gap-4 pt-2 sm:grid-cols-2">
                    {bit.supportingImages.map((image, index) => (
                      <figure key={`${bit.id}-support-${index}`} className="space-y-2">
                        <img src={image.src} alt={image.alt} className="w-full rounded-xl border border-slate-200" />
                        {image.caption && <figcaption className="text-sm text-slate-500">{image.caption}</figcaption>}
                      </figure>
                    ))}
                  </div>
                )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
