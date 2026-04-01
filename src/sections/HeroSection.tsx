import ByteBot from '../graphics/ByteBot';
import { meetings } from '../data/content';

export default function HeroSection() {
  const nextMeeting = meetings.find((meeting) => meeting.date !== 'TBD') ?? meetings[0];

  return (
    <section id="top" className="bg-hero-glow">
      <div className="section-shell grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="pill mb-4">Room 129 • After school • Beginners welcome</p>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl">Bayview AI Club</h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            A student-led club where Bayview students learn how AI works, explore real tools, and join clear, beginner-friendly meetings on topics that actually matter.
          </p>
          {nextMeeting && (
            <div className="mt-5 max-w-xl rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Next Meeting</p>
              <p className="mt-1 text-base font-bold text-slate-900">{nextMeeting.topic}</p>
              <p className="text-sm text-slate-600">{nextMeeting.date}</p>
            </div>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#join" className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-soft hover:bg-blue-700">Join the Club</a>
            <a href="#meetings" className="rounded-xl border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50">See Events</a>
            <a href="#ai-bits" className="rounded-xl border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50">Explore AI Bits</a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute -z-10 h-56 w-56 rounded-full bg-blue-100 blur-2xl" />
          <ByteBot className="h-72 w-72" pose="wave" />
        </div>
      </div>
    </section>
  );
}
