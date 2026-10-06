import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "c1",
    name: "Smartphones",
    slug: "smartphones",
    description: "Latest Android phones, iPhones and accessories",
    image: "/globe.svg",
    productCount: 24,
    subcategories: [
      { id: "s1", name: "Android", slug: "android", productCount: 16 },
      { id: "s2", name: "iPhone", slug: "iphone", productCount: 8 },
    ],
  },
  {
    id: "c2",
    name: "Laptops",
    slug: "laptops",
    description: "HP, Dell, Lenovo, MacBooks for work and school",
    image: "/window.svg",
    productCount: 18,
  },
  {
    id: "c3",
    name: "Audio",
    slug: "audio",
    description: "Earbuds, headphones, speakers and soundbars",
    image: "/file.svg",
    productCount: 32,
  },
  {
    id: "c4",
    name: "Accessories",
    slug: "accessories",
    description: "Chargers, power banks, cases and wearables",
    image: "/globe.svg",
    productCount: 45,
  },
];

export const WHATSAPP_NUMBER = "2348000000000";
