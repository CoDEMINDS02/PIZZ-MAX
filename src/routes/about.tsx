import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Leaf, Flame, Heart, ShieldCheck } from "lucide-react";
import interior from "@/assets/pizza-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pizza Max Karachi" },
      { name: "description", content: "The story behind Pizza Max — Karachi's favorite pizza destination. Fresh dough, premium ingredients and stone-oven perfection." },
      { property: "og:title", content: "About — Pizza Max" },
      { property: "og:description", content: "Fresh dough, premium ingredients, stone-oven perfection." },
      { property: "og:image", content: interior },
      { name: "twitter:image", content: interior },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { Icon: Leaf, title: "Fresh Ingredients", text: "Dough made daily in-house. Premium cheeses, halal meats and hand-picked vegetables." },
  { Icon: Flame, title: "Stone-Oven Baked", text: "Traditional stone ovens deliver that authentic crispy-outside, tender-inside crust." },
  { Icon: ShieldCheck, title: "Quality Commitment", text: "Halal-certified, hygienic and consistent — we obsess over every single pie." },
  { Icon: Heart, title: "Customer Satisfaction", text: "5-star rated by 128+ happy customers. Not perfect? We remake it. Guaranteed." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Our Story" title="Born In Karachi. Baked With Passion." />

      <section className="container-x py-16 grid md:grid-cols-2 gap-12 items-center">
        <img src={interior} alt="Pizza Max restaurant interior" loading="lazy" className="rounded-3xl w-full aspect-[4/3] object-cover shadow-xl" />
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--brand-red)] font-bold">Since Day One</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2 leading-tight">A neighbourhood favourite in Gulshan-e-Iqbal.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Pizza Max was founded on a simple belief: a truly great pizza starts with truly great dough. We knead ours fresh every single morning, ferment it slowly, and finish every pie in a traditional stone oven — the way it was meant to be done.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Today we're one of Block 4A's most-loved spots — famous for our stretchy four-cheese, smoky BBQ chicken and the signature Pepperoni Supreme. Every slice is our promise: fresh, honest, uncompromising.
          </p>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map(({ Icon, title, text }) => (
            <div key={title} className="card-hover rounded-2xl border border-border bg-card p-6">
              <span className="w-12 h-12 grid place-items-center rounded-xl bg-[color:var(--brand-red)] text-white"><Icon className="w-5 h-5" /></span>
              <h3 className="font-display text-xl mt-4">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
