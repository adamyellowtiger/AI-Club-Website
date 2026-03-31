import ByteBot from '../graphics/ByteBot';
import { joinLinks, navLinks } from '../data/content';

const footerQuickLinkLabels = ['About', 'Meetings', 'AI Bits', 'Resources', 'FAQ', 'Join'];

export default function Footer() {
  const quickLinks = navLinks.filter((link) => footerQuickLinkLabels.includes(link.label));
  const instagramHandle = '@bss_aiclub';
  const instagramUrl = `https://www.instagram.com/${instagramHandle.replace('@', '')}/`;

  return (
    <footer className="border-t border-blue-100 bg-white">
      <div className="section-shell grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-blue-700">Bayview AI Club</h3>
          <p className="mt-2 text-sm text-slate-600">Student-led AI learning at Bayview: beginner-friendly meetings, practical tools, and thoughtful discussion.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}><a href={link.href} className="text-slate-600 hover:text-blue-700">{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Contact</h4>
          <ul className="mt-2 space-y-1 text-sm">
            {joinLinks.map((link) => (
              <li key={link.label}><a href={link.href} className="text-slate-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">{link.label}</a></li>
            ))}
            <li>
              <a href={instagramUrl} className="text-slate-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer" aria-label="Bayview AI Club on Instagram">
                Instagram ({instagramHandle})
              </a>
            </li>
          </ul>
          <ByteBot className="mt-3 h-16 w-16" />
        </div>
      </div>
    </footer>
  );
}
