import { Menu, X, ArrowUpRight, Cpu } from "lucide-react";
import { useRef, useState } from "react";
import { navLinks } from "../data/site";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#top" className="wordmark">
          <span className="brand-icon">
            <Cpu size={21} />
          </span>
          Bayview <span className="brand-blue">AI Club</span>
        </a>
        <button
          className="menu-toggle"
          ref={toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-links"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <ul
          id="primary-links"
          className={open ? "nav-links is-open" : "nav-links"}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className={link.label === "Join" ? "nav-join" : ""}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
                {link.label === "Join" && <ArrowUpRight size={15} />}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
