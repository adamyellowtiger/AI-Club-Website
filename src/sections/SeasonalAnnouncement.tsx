import ByteBot from '../graphics/ByteBot';
import { seasonalAnnouncement } from '../data/content';

export default function SeasonalAnnouncement() {
  return (
    <section aria-label="Seasonal club announcement">
      <div className="section-shell pt-8">
        <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-white to-blue-50 p-5 shadow-soft sm:p-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <ByteBot className="h-24 w-24 shrink-0 sm:h-28 sm:w-28" pose="wave" />
            <div>
              <span className="pill">{seasonalAnnouncement.badge}</span>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900">{seasonalAnnouncement.title}</h2>
              <p className="mt-2 max-w-3xl text-slate-700">{seasonalAnnouncement.message}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
