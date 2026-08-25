import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import hero from "@/assets/hero-pizza.jpg";
import classic from "@/assets/pizza-classic.jpg";
import chicken from "@/assets/pizza-chicken.jpg";
import cheese from "@/assets/pizza-cheese.jpg";
import pepperoni from "@/assets/pizza-pepperoni.jpg";
import bbq from "@/assets/pizza-bbq.jpg";
import veggie from "@/assets/pizza-veggie.jpg";
import family from "@/assets/pizza-family.jpg";
import interior from "@/assets/pizza-interior.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Pizza Max" },
      { name: "description", content: "A peek inside Pizza Max — our signature pizzas, stone oven and Gulshan-e-Iqbal restaurant." },
      { property: "og:title", content: "Gallery — Pizza Max" },
      { property: "og:description", content: "Signature pizzas and restaurant photos." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: hero, label: "Signature Pepperoni", span: "md:col-span-2 md:row-span-2" },
  { src: classic, label: "Classic Margherita" },
  { src: chicken, label: "Chicken Tikka" },
  { src: cheese, label: "Four Cheese" },
  { src: bbq, label: "BBQ Chicken" },
  { src: veggie, label: "Veggie Supreme" },
  { src: pepperoni, label: "Pepperoni Supreme" },
  { src: family, label: "Family Feast" },
  { src: interior, label: "Our Restaurant", span: "md:col-span-2" },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Gallery" title="Slices & Moments" subtitle="A visual taste of Pizza Max — food, oven, dining room." />
      <section className="container-x py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {items.map((it, i) => (
            <figure key={i} className={`relative group overflow-hidden rounded-2xl bg-muted ${it.span ?? ""}`}>
              <img src={it.src} alt={it.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <figcaption className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
                <span className="font-display text-white text-lg">{it.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
