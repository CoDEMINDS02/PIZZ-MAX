import classic from "@/assets/pizza-classic.jpg";
import chicken from "@/assets/pizza-chicken.jpg";
import cheese from "@/assets/pizza-cheese.jpg";
import pepperoni from "@/assets/pizza-pepperoni.jpg";
import bbq from "@/assets/pizza-bbq.jpg";
import veggie from "@/assets/pizza-veggie.jpg";
import family from "@/assets/pizza-family.jpg";
import drinks from "@/assets/pizza-drinks.jpg";
import sides from "@/assets/pizza-sides.jpg";
import hawaiian from "@/assets/pizza-hawaiian.jpg";
import fajita from "@/assets/pizza-fajita.jpg";
import mozzarella from "@/assets/pizza-mozzarella.jpg";
import garlicBread from "@/assets/garlic-bread.jpg";
import water from "@/assets/water.jpg";

export type MenuItem = {
  id: string;
  name: string;
  desc: string;
  price: number;
  category: string;
  image?: string;
  tag?: string;
};

export const MENU: MenuItem[] = [
  { id: "cl-margherita", name: "Classic Margherita", desc: "San Marzano tomato, fior di latte mozzarella, fresh basil & olive oil.", price: 899, category: "Classic Pizzas", image: classic, tag: "Signature" },
  { id: "cl-pepperoni", name: "Pepperoni Supreme", desc: "Double pepperoni, mozzarella and a hint of chili on our hand-tossed base.", price: 1199, category: "Classic Pizzas", image: pepperoni, tag: "Bestseller" },
  { id: "cl-hawaiian", name: "Hawaiian", desc: "Grilled chicken, sweet pineapple and mozzarella with tangy tomato sauce.", price: 1149, category: "Classic Pizzas", image: hawaiian },

  { id: "ch-tikka", name: "Chicken Tikka", desc: "Marinated tikka chicken, red onions, capsicum & fresh coriander.", price: 1299, category: "Chicken Pizzas", image: chicken, tag: "Hot" },
  { id: "ch-bbq", name: "BBQ Chicken", desc: "Smoky BBQ sauce, grilled chicken, red onions and cilantro.", price: 1349, category: "Chicken Pizzas", image: bbq },
  { id: "ch-fajita", name: "Chicken Fajita", desc: "Spicy fajita chicken, bell peppers, jalapeños & double cheese.", price: 1349, category: "Chicken Pizzas", image: fajita },

  { id: "cz-fourcheese", name: "Four Cheese", desc: "Mozzarella, cheddar, parmesan and creamy blue cheese blend.", price: 1399, category: "Cheese Lovers", image: cheese, tag: "Cheesy" },
  { id: "cz-mozzarella", name: "Extra Mozzarella", desc: "Loaded double mozzarella with garlic butter crust.", price: 1249, category: "Cheese Lovers", image: mozzarella },

  { id: "vg-supreme", name: "Veggie Supreme", desc: "Mushrooms, olives, peppers, onions and sweetcorn.", price: 1099, category: "Veggie Pizzas", image: veggie },

  { id: "sd-wings", name: "BBQ Chicken Wings (6pc)", desc: "Sticky glazed wings with our signature BBQ rub.", price: 549, category: "Sides", image: sides },
  { id: "sd-garlic", name: "Garlic Bread", desc: "Freshly baked garlic bread with herb butter.", price: 299, category: "Sides", image: garlicBread },

  { id: "dr-cola", name: "Cold Drink 500ml", desc: "Chilled Coke, Sprite or Fanta.", price: 150, category: "Drinks", image: drinks },
  { id: "dr-water", name: "Mineral Water", desc: "Refreshing bottled water.", price: 80, category: "Drinks", image: water },
];

export const CATEGORIES = ["Classic Pizzas", "Chicken Pizzas", "Cheese Lovers", "Veggie Pizzas", "Sides", "Drinks"] as const;

export const DEALS = [
  { id: "family-1", tier: "Family", name: "Family Feast", desc: "2 Large Pizzas + Wings + Garlic Bread + 1.5L Drink", price: 2999, image: family },
  { id: "family-2", tier: "Family", name: "Mega Family Box", desc: "3 Large Pizzas + 12 Wings + 2 Garlic Breads + 2L Drink", price: 4499, image: family },
  { id: "student-1", tier: "Student", name: "Student Saver", desc: "Medium Pizza + Drink · Valid with student ID", price: 899, image: classic },
  { id: "student-2", tier: "Student", name: "Study Break Slice", desc: "2 Slices + Drink · Weekdays 2–6 PM", price: 499, image: pepperoni },
  { id: "weekend-1", tier: "Weekend", name: "Weekend Special", desc: "Any Large Chicken Pizza + Wings + Drink", price: 1799, image: chicken },
  { id: "weekend-2", tier: "Weekend", name: "Weekend Duo", desc: "2 Medium Pizzas + 2 Drinks · Fri–Sun only", price: 1999, image: bbq },
  { id: "bogo-1", tier: "Buy 1 Get 1", name: "BOGO Tuesdays", desc: "Order any large pizza, get a medium pizza free. Every Tuesday.", price: 1299, image: cheese },
  { id: "bogo-2", tier: "Buy 1 Get 1", name: "Cheese Lover BOGO", desc: "Buy one Four Cheese, get one Extra Mozzarella free.", price: 1399, image: cheese },
];
