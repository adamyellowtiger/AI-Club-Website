import SectionTitle from '../components/SectionTitle';
import { joinLinks } from '../data/content';

export default function JoinSection() {
  return (
    <section id="join">
      <div className="section-shell">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 p-8 text-white shadow-soft md:p-12">
          <SectionTitle
            eyebrow="Join Us"
            title="Ready to learn AI with us?"
            subtitle="Pick the platform that works best for you and stay connected with Bayview AI Club updates."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            {joinLinks.map((link) => (
              <a key={link.label} href={link.href} className="rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
