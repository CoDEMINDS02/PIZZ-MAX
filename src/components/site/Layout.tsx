import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-[color:var(--brand-black)] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,var(--brand-red),transparent_55%),radial-gradient(circle_at_80%_60%,var(--brand-gold),transparent_50%)]" />
      <div className="container-x relative py-20 md:py-28 text-center">
        {eyebrow && (
          <div className="inline-block px-3 py-1 rounded-full border border-white/20 text-xs uppercase tracking-[0.25em] mb-5 text-[color:var(--brand-gold)]">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">{title}</h1>
        {subtitle && <p className="mt-5 text-white/75 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
