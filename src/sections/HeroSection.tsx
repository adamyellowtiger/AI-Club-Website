import bytebotImage from '../../bytebot_image.png';
import { meetings } from '../data/content';

export default function HeroSection() {
  const nextMeeting = meetings.find((meeting) => meeting.status === 'upcoming');
  const proofPoints = ['Beginner-friendly', 'Real AI tools', 'Student-led'];

  return (
    <section id="top" className="bg-hero-glow">
      <div className="section-shell grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="pill mb-4">Room 129 • After school • Beginners welcome</p>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl">Bayview AI Club</h1>
          <p className="mt-3 text-xl font-semibold text-slate-800">Learn practical AI skills with students</p>
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            Bayview AI Club helps you understand AI without the hype through beginner-friendly sessions, real tools, and student-led discussions you can use in class projects and beyond.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {proofPoints.map((point) => (
              <span key={point} className="pill">
                {point}
              </span>
            ))}
          </div>
          {nextMeeting && (
            <div className="mt-5 max-w-xl rounded-2xl border border-blue-100 bg-white px-4 py-4 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Next Meeting</p>
              <p className="mt-1 text-base font-bold text-slate-900">{nextMeeting.topic}</p>
              <p className="text-sm font-semibold text-slate-700">{nextMeeting.date}</p>
              <p className="mt-2 text-sm text-slate-600">{nextMeeting.note}</p>
              <p className="mt-2 text-sm font-medium text-blue-700">Beginner-friendly and open to all Bayview students.</p>
            </div>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#join" className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-soft hover:bg-blue-700">Get connected now</a>
            <a href="#meetings" className="rounded-xl border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50">See meeting updates</a>
            <a href="#ai-bits" className="inline-flex items-center px-1 py-3 text-sm font-semibold text-blue-700 hover:text-blue-800">Read a Daily Bit →</a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute -z-10 h-56 w-56 rounded-full bg-blue-100 blur-2xl" />
          <img src={bytebotImage} alt="ByteBot, the AI Club mascot" className="h-72 w-72 object-contain" />
          <p className="absolute -bottom-2 rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-semibold text-blue-700 shadow-soft">
            Meet ByteBot at club sessions
          </p>
        </div>
      </div>
    </section>
  );
}
