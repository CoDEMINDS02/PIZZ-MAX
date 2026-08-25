import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { DEALS } from "@/lib/menu";
import { whatsappUrl } from "@/lib/site";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/deals")({
  head: () => ({
    meta: [
      { title: "Deals & Offers — Pizza Max" },
      { name: "description", content: "Family Feasts, Student Savers, Weekend Specials and Buy 1 Get 1 pizza deals at Pizza Max Karachi." },
      { property: "og:title", content: "Deals & Offers — Pizza Max" },
      { property: "og:description", content: "Family, Student, Weekend and BOGO pizza deals." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DealsPage,
});

const tiers = ["Family", "Student", "Weekend", "Buy 1 Get 1"] as const;

function DealsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Deals & Offers" title="More Slice, Less Price" subtitle="Family feasts, student savers, weekend specials and buy-one-get-one — updated weekly." />
      <section className="container-x py-14 space-y-16">
        {tiers.map((tier) => {
          const items = DEALS.filter((d) => d.tier === tier);
          const label = { "Family": "Family Deals", "Student": "Student Deals", "Weekend": "Weekend Specials", "Buy 1 Get 1": "Buy 1 Get 1 Offers" }[tier];
          return (
            <div key={tier}>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-[color:var(--brand-red)]" />
                <h2 className="font-display text-3xl md:text-4xl">{label}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((d) => (
                  <article key={d.id} className="card-hover rounded-2xl overflow-hidden border border-border bg-card grid grid-cols-[minmax(0,1fr)_140px] md:grid-cols-[minmax(0,1fr)_180px]">
                    <div className="p-5 flex flex-col">
                      <div className="text-[10px] uppercase tracking-widest font-bold text-[color:var(--brand-red)]">{d.tier}</div>
                      <h3 className="font-display text-2xl mt-1 leading-tight">{d.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground flex-1">{d.desc}</p>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <span className="font-display text-3xl text-[color:var(--brand-red)]">Rs {d.price}</span>
                        <a href={whatsappUrl(`Deal: ${d.name}`)} target="_blank" rel="noreferrer" className="btn-primary text-xs px-4 py-2">Grab Deal</a>
                      </div>
                    </div>
                    <div className="bg-muted">
                      <img src={d.image} alt={d.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </SiteLayout>
  );
}
