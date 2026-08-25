import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { SITE } from "@/lib/site";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Pizza Max" },
      { name: "description", content: `Rated ${SITE.rating}/5 by ${SITE.reviews}+ customers in Karachi. Read real reviews of Pizza Max.` },
      { property: "og:title", content: "Reviews — Pizza Max" },
      { property: "og:description", content: `Rated ${SITE.rating}/5 by our customers.` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Ayesha M.", text: "Genuinely the best pizza in Karachi. The dough is perfect and the toppings are always generous.", rating: 5 },
  { name: "Hassan A.", text: "Pepperoni Supreme is unreal. Fast delivery and always piping hot.", rating: 5 },
  { name: "Zoya K.", text: "Family Feast fed 6 of us and everyone was happy. Amazing value and quality.", rating: 5 },
  { name: "Bilal R.", text: "Four Cheese is dangerously addictive. The crust is the perfect balance of crisp and soft.", rating: 5 },
  { name: "Sana T.", text: "Ordered on WhatsApp, got a fresh hot pizza in under 25 minutes. Impressed.", rating: 5 },
  { name: "Umer S.", text: "Best BBQ Chicken pizza in Gulshan. Toppings are premium and portions are generous.", rating: 5 },
  { name: "Hira F.", text: "Weekend Duo is amazing value. Two pizzas + drinks for under 2k — can't beat it.", rating: 5 },
  { name: "Fahad Q.", text: "Consistent quality every time. Staff is polite and the packaging keeps it hot.", rating: 5 },
  { name: "Nida J.", text: "My kids only order from Pizza Max now. Great BOGO Tuesdays deal too.", rating: 5 },
];

const stars = Math.round(SITE.rating);

function ReviewsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Customer Reviews" title={`${SITE.rating}/5 · ${SITE.reviews}+ Reviews`} subtitle="Real words from real Pizza Max fans in Karachi." />
      <section className="container-x py-14">
        <div className="max-w-md mx-auto text-center mb-12 rounded-3xl border border-border bg-card p-8">
          <div className="font-display text-7xl text-[color:var(--brand-red)]">{SITE.rating}</div>
          <div className="mt-2 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-6 h-6 ${i < stars ? "fill-[color:var(--brand-gold)] text-[color:var(--brand-gold)]" : "text-muted-foreground/30"}`} />
            ))}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Based on {SITE.reviews}+ verified reviews</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <blockquote key={i} className="card-hover rounded-2xl bg-card border border-border p-6 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[color:var(--brand-red)]/15" />
              <div className="flex gap-1">
                {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="w-4 h-4 fill-[color:var(--brand-gold)] text-[color:var(--brand-gold)]" />)}
              </div>
              <p className="mt-3 text-foreground/90 leading-relaxed">"{r.text}"</p>
              <footer className="mt-4 font-semibold">— {r.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
