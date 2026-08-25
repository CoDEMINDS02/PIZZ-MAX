import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, MapPin, Phone, Clock, Pizza } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[color:var(--brand-black)] text-white/85 mt-24">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-[color:var(--brand-red)]">
              <Pizza className="w-5 h-5" />
            </span>
            <span className="font-display text-2xl leading-none">
              Pizza <span className="text-[color:var(--brand-gold)]">Max</span>
            </span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            {SITE.tagline}. Fresh dough, premium toppings and stone-baked perfection — every single slice.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-[color:var(--brand-gold)]">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/menu" className="hover:text-white">Menu</Link></li>
            <li><Link to="/deals" className="hover:text-white">Deals & Offers</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/reviews" className="hover:text-white">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-[color:var(--brand-gold)]">Visit Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[color:var(--brand-red)]" /><span>{SITE.address}</span></li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-[color:var(--brand-red)]" /><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></li>
            <li className="flex gap-2"><Clock className="w-4 h-4 mt-0.5 shrink-0 text-[color:var(--brand-red)]" /><span>{SITE.hours}</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-[color:var(--brand-gold)]">Follow</h4>
          <div className="flex gap-3">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Twitter, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} aria-label="Social link" className="w-10 h-10 grid place-items-center rounded-full border border-white/15 hover:bg-[color:var(--brand-red)] hover:border-transparent transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-white/50 mt-6">
            © {new Date().getFullYear()} Pizza Max. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
