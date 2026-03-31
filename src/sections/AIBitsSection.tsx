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
            <div className="mb-3 flex flex-wrap gap-2">
              {featuredBit.tags.map((tag) => (
                <span key={tag} className="pill">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{featuredBit.title}</h3>
            <p className="mt-3 text-slate-600">{featuredBit.summary}</p>
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
              </div>
            )}
          </article>

          <div className="space-y-4">
            <div className="card flex items-center justify-center">
              <ByteBot className="h-36 w-36" pose="point" />
            </div>
            {archiveBits.map((bit) => (
              <article key={bit.id} className="card">
                <div className="mb-3 flex flex-wrap gap-2">
                  {bit.tags.map((tag) => (
                    <span key={tag} className="pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="font-bold text-slate-900">{bit.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{bit.summary}</p>
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
