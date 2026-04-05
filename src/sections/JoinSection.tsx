import SectionTitle from '../components/SectionTitle';
import { instagramHandle, instagramUrl, joinLinks } from '../data/content';

export default function JoinSection() {
  const channels = [
    {
      title: 'Discord',
      actionLabel: joinLinks[0]?.label ?? 'Join Discord',
      href: joinLinks[0]?.href ?? '#join',
      helperText: 'Fastest way to get reminders, ask questions, and stay in the club chat.',
      emphasis: 'Start here'
    },
    {
      title: 'Google Classroom',
      actionLabel: joinLinks[1]?.label ?? 'Join Google Classroom',
      href: joinLinks[1]?.href ?? '#join',
      helperText: 'Official school channel for classroom posts, shared resources, and formal updates.',
      emphasis: 'Official school channel'
    },
    {
      title: 'Instagram',
      actionLabel: `Follow ${instagramHandle}`,
      href: instagramUrl,
      helperText: 'Best for visuals, highlights, and public updates you can share with friends.',
      emphasis: 'Public updates'
    }
  ];

  return (
    <section id="join">
      <div className="section-shell">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 p-8 text-white shadow-soft md:p-12">
          <SectionTitle
            eyebrow="Join Us"
            title="Stay connected with Bayview AI Club"
            subtitle="Choose the channel that fits how you want updates, then use Classroom for official school posts and resources."
            tone="inverse"
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {channels.map((channel) => (
              <article key={channel.title} className="min-w-0 rounded-2xl border border-white/25 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-100">{channel.emphasis}</p>
                <h3 className="mt-2 text-lg font-bold text-white">{channel.title}</h3>
                <p className="mt-2 text-sm text-blue-100">{channel.helperText}</p>
                <a
                  href={channel.href}
                  className="mt-4 inline-flex rounded-xl bg-white px-4 py-2 font-semibold text-blue-700 hover:bg-blue-50"
                  target="_blank"
                  rel="noreferrer"
                >
                  {channel.actionLabel}
                </a>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-blue-300/60 bg-white/10 p-4 text-sm leading-relaxed text-blue-50">
            <p>Use a YRDSB gapps account to join Google Classroom.</p>
            <p className="mt-1">If the link does not work, use class code: 7b6loaop.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
