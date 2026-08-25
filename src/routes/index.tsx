import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Flame, ShoppingBag, ChevronRight, Quote, Leaf, Award, Timer, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { SITE, whatsappUrl } from "@/lib/site";
import { MENU, DEALS } from "@/lib/menu";
import heroImg from "@/assets/hero-pizza.jpg";
import pepperoni from "@/assets/pizza-pepperoni.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pizza Max — Karachi's Favorite Pizza Destination" },
      { name: "description", content: "Pizza Max in Gulshan-e-Iqbal, Karachi — freshly baked stone-oven pizzas, premium toppings and unbeatable deals. Order now on WhatsApp." },
      { property: "og:title", content: "Pizza Max — Freshly Baked Happiness In Every Slice" },
      { property: "og:description", content: "Karachi's favorite pizza destination. Fresh, hot & delicious." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const featured = MENU.filter((m) => ["cl-margherita", "cl-pepperoni", "ch-tikka", "cz-fourcheese"].includes(m.id));

const reviews = [
  { name: "Ayesha M.", text: "Genuinely the best pizza in Karachi. The dough is perfect and toppings are always generous.", rating: 5 },
  { name: "Hassan A.", text: "Pepperoni Supreme is unreal. Fast delivery and always piping hot.", rating: 5 },
  { name: "Zoya K.", text: "Family Feast fed 6 of us and everyone was happy. Amazing value and quality.", rating: 5 },
];

const whyUs = [
  { Icon: Leaf, title: "Fresh Ingredients", text: "Dough made fresh daily. Premium cheese, hand-picked veggies, halal meats." },
  { Icon: Flame, title: "Stone-Baked", text: "Baked in traditional stone ovens for that authentic crispy-yet-soft crust." },
  { Icon: Timer, title: "30-Min Delivery", text: "Hot at your door in 30 minutes across Gulshan-e-Iqbal and nearby areas." },
  { Icon: ShieldCheck, title: "Quality Promise", text: "If it's not perfect, we remake it. That's the Pizza Max guarantee." },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[color:var(--brand-black)] text-white">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-50" width={1600} height={1200} />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--brand-black)] via-[color:var(--brand-black)]/80 to-[color:var(--brand-black)]/40" />
        </div>
        <div className="container-x relative py-20 md:py-32 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-[color:var(--brand-gold)]/40 text-xs uppercase tracking-[0.25em] text-[color:var(--brand-gold)]">
              <Award className="w-3.5 h-3.5" /> Rated {SITE.rating}/5 · Karachi
            </div>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1]">
              Karachi's Favorite<br />
              <span className="text-gradient-gold">Pizza</span> Destination
            </h1>
            <p className="mt-6 text-white/80 text-base md:text-lg max-w-lg">
              {SITE.tagline}. Hand-stretched dough, premium toppings and stone-oven perfection — delivered fresh from Gulshan-e-Iqbal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="btn-primary">
                <ShoppingBag className="w-4 h-4" /> Order Now
              </a>
              <Link to="/menu" className="btn-outline-white">
                View Menu <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-[color:var(--brand-gold)] text-[color:var(--brand-gold)]" />
                ))}
              </div>
              <p className="text-sm text-white/80">
                <span className="font-bold text-white">{SITE.rating}/5</span> · {SITE.reviews}+ happy customers
              </p>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -inset-8 rounded-full bg-[color:var(--brand-red)]/40 blur-3xl" />
            <img src={pepperoni} alt="Pepperoni Supreme Pizza" width={600} height={600} className="relative w-full max-w-md mx-auto rounded-full shadow-2xl animate-float ring-4 ring-[color:var(--brand-gold)]/30" />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-[color:var(--brand-gold)] text-[color:var(--brand-black)] overflow-hidden border-y border-black/10">
        <div className="flex whitespace-nowrap animate-marquee py-3 font-display text-lg">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 gap-8 pr-8">
              {["🍕 Freshly Baked", "🧀 Premium Cheese", "🔥 Stone-Oven", "⚡ 30-Min Delivery", "⭐ 5.0 Rated", "🎉 Weekend Deals", "❤️ Karachi's Favorite"].map((t) => (
                <span key={t} className="inline-block">{t} <span className="mx-4 opacity-40">•</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Featured menu */}
      <section className="container-x py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--brand-red)] font-bold">Signature Slices</p>
            <h2 className="font-display text-4xl md:text-5xl mt-2">Featured Pizzas</h2>
          </div>
          <Link to="/menu" className="text-sm font-semibold inline-flex items-center gap-1 hover:text-[color:var(--brand-red)]">
            See full menu <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item) => (
            <article key={item.id} className="card-hover bg-card rounded-2xl overflow-hidden border border-border">
              <div className="aspect-square overflow-hidden bg-muted">
                {item.image && <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover" />}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl leading-tight">{item.name}</h3>
                  {item.tag && <span className="shrink-0 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-full bg-[color:var(--brand-red)] text-white">{item.tag}</span>}
                </div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{item.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-2xl text-[color:var(--brand-red)]">Rs {item.price}</span>
                  <a href={whatsappUrl(`Order: ${item.name}`)} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-wider hover:text-[color:var(--brand-red)]">Order →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container-x py-20 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--brand-red)] font-bold">Why Pizza Max</p>
            <h2 className="font-display text-4xl md:text-5xl mt-2">The perfect slice, every time.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map(({ Icon, title, text }) => (
              <div key={title} className="card-hover rounded-2xl bg-card border border-border p-6">
                <span className="w-12 h-12 grid place-items-center rounded-xl bg-[color:var(--brand-red)] text-white"><Icon className="w-5 h-5" /></span>
                <h3 className="font-display text-xl mt-4">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special deals banner */}
      <section className="relative bg-[color:var(--brand-red)] text-white overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[color:var(--brand-gold)]/25 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-black/30 blur-3xl" />
        <div className="container-x py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--brand-gold)] font-bold">Weekend Special</p>
            <h2 className="font-display text-4xl md:text-6xl mt-2 leading-[1.05]">Family Feast<br />for Rs 2,999</h2>
            <p className="mt-4 text-white/90 max-w-md">2 Large Pizzas + BBQ Chicken Wings + Garlic Bread + a 1.5L Drink. Feeds the whole family — piping hot at your door.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsappUrl("I want the Family Feast deal")} target="_blank" rel="noreferrer" className="btn-gold">Grab This Deal</a>
              <Link to="/deals" className="btn-outline-white">All Deals</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {DEALS.slice(0, 4).map((d) => (
              <div key={d.id} className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur border border-white/15 p-5">
                <div className="text-[10px] uppercase tracking-widest text-[color:var(--brand-gold)] font-bold">{d.tier}</div>
                <div className="font-display text-lg mt-1 leading-tight">{d.name}</div>
                <div className="font-display text-2xl mt-2 text-[color:var(--brand-gold)]">Rs {d.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container-x py-20 md:py-28">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--brand-red)] font-bold">Customer Love</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2">Rated {SITE.rating}/5 by Karachi</h2>
          <div className="mt-3 flex items-center justify-center gap-1">
            {[0,1,2,3,4].map((i) => <Star key={i} className="w-5 h-5 fill-[color:var(--brand-gold)] text-[color:var(--brand-gold)]" />)}
            <span className="ml-2 text-sm text-muted-foreground">{SITE.reviews}+ verified reviews</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
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
        <div className="text-center mt-10">
          <Link to="/reviews" className="text-sm font-semibold inline-flex items-center gap-1 hover:text-[color:var(--brand-red)]">
            Read all reviews <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
