import { Menu, X, ArrowUpRight, Cpu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { pages, routeHref, type Page } from "../navigation";
export default function Navbar({ active }: { active: Page }) {
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [active]);
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
        <a href="#/home" className="wordmark">
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
          {Object.entries(pages).map(([key, link]) => (
            <li key={key}>
              <a
                className={link.label === "Join" ? "nav-join" : ""}
                href={routeHref(key as Page)}
                aria-current={active === key ? "page" : undefined}
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
