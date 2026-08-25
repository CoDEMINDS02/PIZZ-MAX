import { Link } from "@tanstack/react-router";
import { Menu, X, Pizza } from "lucide-react";
import { useState } from "react";
import { whatsappUrl } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/deals", label: "Deals" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-[color:var(--brand-black)]/95 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--brand-black)]/85 text-white border-b border-white/10">
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-[color:var(--brand-red)]">
            <Pizza className="w-5 h-5" />
          </span>
          <span className="font-display text-2xl md:text-3xl leading-none">
            Pizza <span className="text-[color:var(--brand-gold)]">Max</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-[color:var(--brand-gold)]" }}
              className="px-3 py-2 text-sm font-medium tracking-wide text-white/85 hover:text-[color:var(--brand-gold)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="btn-primary text-sm">
            Order Now
          </a>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[color:var(--brand-black)]">
          <div className="container-x py-3 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-[color:var(--brand-gold)]" }}
                className="py-2.5 text-base font-medium text-white/90"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-3"
              onClick={() => setOpen(false)}
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
