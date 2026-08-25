import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { MENU, CATEGORIES } from "@/lib/menu";
import { whatsappUrl } from "@/lib/site";
import { ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Pizza Max Karachi" },
      { name: "description", content: "Explore Pizza Max's full menu: classic pizzas, chicken pizzas, cheese lovers, veggie pizzas, sides and drinks. Fresh, hot & baked to perfection." },
      { property: "og:title", content: "Menu — Pizza Max" },
      { property: "og:description", content: "Classic, chicken, cheese-lover and veggie pizzas plus sides & drinks." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<string>("All");
  const cats = ["All", ...CATEGORIES] as const;
  const list = active === "All" ? MENU : MENU.filter((m) => m.category === active);
  return (
    <SiteLayout>
      <PageHero eyebrow="The Full Menu" title="Baked To Perfection" subtitle="Every pizza made to order with premium ingredients and stone-oven finish." />

      <section className="container-x py-14">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide border transition-colors ${
                active === c
                  ? "bg-[color:var(--brand-red)] text-white border-transparent"
                  : "bg-card border-border hover:border-[color:var(--brand-red)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item) => (
            <article key={item.id} className="card-hover bg-card rounded-2xl overflow-hidden border border-border flex flex-col">
              {item.image && (
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl leading-tight">{item.name}</h3>
                  {item.tag && <span className="shrink-0 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-full bg-[color:var(--brand-red)] text-white">{item.tag}</span>}
                </div>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{item.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-2xl text-[color:var(--brand-red)]">Rs {item.price}</span>
                  <a href={whatsappUrl(`Order: ${item.name}`)} target="_blank" rel="noreferrer" className="btn-primary text-xs px-4 py-2">
                    <ShoppingBag className="w-3.5 h-3.5" /> Order
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
