import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '../data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="font-bold text-blue-700">Bayview AI Club</a>
        <ul className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className="text-sm font-medium text-slate-700 hover:text-blue-700" href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button aria-label="Toggle menu" className="rounded-lg p-2 text-slate-700 hover:bg-blue-50 md:hidden" onClick={() => setOpen((s) => !s)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-blue-100 bg-white p-4 md:hidden">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="block rounded-lg px-2 py-1 text-slate-700 hover:bg-blue-50" href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
