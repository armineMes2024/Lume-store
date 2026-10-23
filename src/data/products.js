export const categories = [
  {
    id: "women",
    title: "Женщинам",
    subtitle: "Мягкая сила и чистые линии",
    count: "428 моделей",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    accent: "#e8cfc4",
  },
  {
    id: "men",
    title: "Мужчинам",
    subtitle: "Точный крой, спокойный характер",
    count: "316 моделей",
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=80",
    accent: "#d8d3c3",
  },
  {
    id: "kids",
    title: "Детям",
    subtitle: "Свобода двигаться и мечтать",
    count: "204 модели",
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1200&q=80",
    accent: "#d9e2d3",
  },
];

export const products = [
  {
    id: 1,
    name: "Пальто Oversize «Milano»",
    category: "women",
    price: 18990,
    oldPrice: 23990,
    badge: "Хит",
    rating: 4.9,
    sizes: ["XS", "S", "M", "L"],
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Кашемировый свитер «Aura»",
    category: "women",
    price: 8490,
    badge: "Новинка",
    rating: 4.8,
    sizes: ["S", "M", "L"],
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Шёлковое платье «Noir»",
    category: "women",
    price: 12490,
    rating: 4.9,
    sizes: ["XS", "S", "M", "L"],
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Костюм «Tailor»",
    category: "men",
    price: 24990,
    oldPrice: 29990,
    badge: "Хит",
    rating: 5,
    sizes: ["48", "50", "52", "54"],
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Рубашка Oxford «Classic»",
    category: "men",
    price: 5990,
    rating: 4.7,
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Куртка «Downtown»",
    category: "men",
    price: 16490,
    badge: "Новинка",
    rating: 4.8,
    sizes: ["M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    name: "Джинсы Straight «Denim»",
    category: "men",
    price: 7290,
    rating: 4.6,
    sizes: ["30", "32", "34", "36"],
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    name: "Комплект «Little Explorer»",
    category: "kids",
    price: 4290,
    oldPrice: 5290,
    badge: "−19%",
    rating: 4.9,
    sizes: ["92", "98", "104", "110"],
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    name: "Худи «Mini Club»",
    category: "kids",
    price: 3190,
    badge: "Новинка",
    rating: 4.8,
    sizes: ["98", "104", "110", "116"],
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    name: "Платье «Sunny Day»",
    category: "kids",
    price: 3890,
    rating: 4.9,
    sizes: ["92", "98", "104", "110"],
    image:
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 11,
    name: "Кроссовки «Cloud»",
    category: "kids",
    price: 4590,
    rating: 4.7,
    sizes: ["28", "30", "32", "34"],
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 12,
    name: "Сумка «Tote Soft»",
    category: "women",
    price: 9990,
    badge: "Новинка",
    rating: 4.8,
    sizes: ["One Size"],
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
  },
];

export const formatPrice = (value) =>
  new Intl.NumberFormat("ru-RU").format(value) + " ₽";
