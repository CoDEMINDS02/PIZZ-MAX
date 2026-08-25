export const SITE = {
  name: "Pizza Max",
  short: "Pizza Max",
  tagline: "Freshly Baked Happiness In Every Slice",
  phone: "+92 300 1234567",
  whatsapp: "923001234567",
  address: "Block 4A, Gulshan-e-Iqbal, Karachi",
  hours: "Daily · 11:00 AM – 2:00 AM",
  rating: 5.0,
  reviews: 128,
  mapsEmbed:
    "https://www.google.com/maps?q=Block+4A+Gulshan-e-Iqbal+Karachi&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Block+4A+Gulshan-e-Iqbal+Karachi",
};

export const whatsappUrl = (msg = "Hi Pizza Max! I'd like to place an order.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
