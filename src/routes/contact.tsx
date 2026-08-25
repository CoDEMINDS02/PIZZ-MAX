import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { SITE, whatsappUrl } from "@/lib/site";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pizza Max Karachi" },
      { name: "description", content: "Visit or order from Pizza Max in Block 4A, Gulshan-e-Iqbal, Karachi. Call, WhatsApp or drop us a message." },
      { property: "og:title", content: "Contact — Pizza Max" },
      { property: "og:description", content: "Address, hours and order on WhatsApp." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thanks! We'll get back to you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <SiteLayout>
      <PageHero eyebrow="Get In Touch" title="Come Say Hi" subtitle="Order on WhatsApp, call us, or drop us a message." />

      <section className="container-x py-14 grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          {[
            { Icon: MapPin, label: "Address", value: SITE.address },
            { Icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
            { Icon: Clock, label: "Hours", value: SITE.hours },
            { Icon: Mail, label: "Email", value: "hello@pizzamax.pk", href: "mailto:hello@pizzamax.pk" },
          ].map(({ Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="w-11 h-11 grid place-items-center rounded-xl bg-[color:var(--brand-red)] text-white shrink-0"><Icon className="w-5 h-5" /></span>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold">{label}</div>
                {href ? <a href={href} className="mt-0.5 block font-semibold">{value}</a> : <div className="mt-0.5 font-semibold">{value}</div>}
              </div>
            </div>
          ))}
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="btn-primary w-full">
            <MessageCircle className="w-4 h-4" /> Order on WhatsApp
          </a>

          <div className="rounded-2xl overflow-hidden border border-border aspect-video">
            <iframe
              src={SITE.mapsEmbed}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pizza Max location on Google Maps"
            />
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 md:p-8 space-y-4 h-fit">
          <h2 className="font-display text-3xl">Send us a message</h2>
          <p className="text-sm text-muted-foreground">Questions, feedback or large orders — we'd love to hear from you.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs uppercase tracking-wider font-bold">Name</span>
              <input required name="name" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-red)]" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-wider font-bold">Phone</span>
              <input required name="phone" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-red)]" placeholder="03XX XXXXXXX" />
            </label>
          </div>
          <label className="block">
            <span className="text-xs uppercase tracking-wider font-bold">Email</span>
            <input type="email" name="email" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-red)]" placeholder="you@example.com" />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-wider font-bold">Message</span>
            <textarea required name="message" rows={5} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-red)]" placeholder="How can we help?" />
          </label>
          <button disabled={sending} className="btn-primary w-full disabled:opacity-70">
            {sending ? "Sending…" : "Send Message"}
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}
