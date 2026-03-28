import ByteBot from '../graphics/ByteBot';
import { joinLinks, navLinks } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white">
      <div className="section-shell grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-blue-700">Bayview AI Club</h3>
          <p className="mt-2 text-sm text-slate-600">Learn. Discuss. Build. Explore. Student-friendly AI education for everyone.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            {navLinks.slice(0, 6).map((link) => (
              <li key={link.href}><a href={link.href} className="text-slate-600 hover:text-blue-700">{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Contact</h4>
          <ul className="mt-2 space-y-1 text-sm">
            {joinLinks.map((link) => (
              <li key={link.label}><a href={link.href} className="text-slate-600 hover:text-blue-700">{link.label}</a></li>
            ))}
          </ul>
          <ByteBot className="mt-3 h-16 w-16" />
        </div>
      </div>
    </footer>
  );
}
