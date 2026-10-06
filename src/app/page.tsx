import Link from "next/link";
import { Truck, ShieldCheck, Banknote, Headset, Flame, ArrowRight } from "lucide-react";
import { products, dealProducts, featuredProducts } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import { ProductCard } from "@/components/product/ProductCard";

const PERKS = [
  { icon: Truck, title: "Fast Delivery", sub: "Lagos 24hrs, Nationwide 2-4 days" },
  { icon: Banknote, title: "Pay on Delivery", sub: "Cash or transfer on arrival" },
  { icon: ShieldCheck, title: "1 Year Warranty", sub: "Genuine products only" },
  { icon: Headset, title: "WhatsApp Support", sub: "Real humans, 9am–7pm" },
];

export default async function Home(props: PageProps<"/">) {
  const searchParams = await props.searchParams;
  const activeCategory = typeof searchParams?.category === "string" ? searchParams.category : undefined;
  const q = typeof searchParams?.q === "string" ? searchParams.q.toLowerCase() : "";

  let filtered = products;
  if (activeCategory) filtered = filtered.filter((p) => p.category === activeCategory);
  if (q) filtered = filtered.filter((p) => `${p.name} ${p.brand}`.toLowerCase().includes(q));

  const showFiltered = Boolean(activeCategory || q);
  const grid = showFiltered ? filtered : featuredProducts;

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 grid gap-8 sm:grid-cols-2 items-center">
          <div>
            <p className="inline-flex items-center gap-1.5 rounded-full bg-green-600/20 text-green-300 px-3 py-1 text-xs font-bold">
              <Flame className="h-3.5 w-3.5" /> MEGA DEALS — UP TO 32% OFF
            </p>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight">
              Genuine Gadgets, <span className="text-green-400">Naija Prices.</span>
            </h1>
            <p className="mt-3 text-zinc-300 max-w-md">
              Phones, laptops, earbuds & power banks — with warranty, pay on delivery,
              and WhatsApp ordering.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#deals" className="rounded-full bg-green-600 px-6 py-3 text-sm font-bold hover:bg-green-500">
                Shop Deals
              </a>
              <a href="https://wa.me/2348000000000" className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold hover:bg-white/10">
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-green-600 to-zinc-800 p-8 text-center">
            <p className="text-sm uppercase tracking-widest text-white/70">Deal of the week</p>
            <p className="mt-2 text-2xl font-extrabold">Oraimo FreePods 4 ANC</p>
            <p className="mt-1 text-3xl font-black text-yellow-300">₦28,500 <span className="text-base font-medium text-white/60 line-through">₦42,000</span></p>
            <a href="#deals" className="mt-4 inline-flex items-center gap-1 text-sm font-bold underline">
              Grab it now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {PERKS.map((perk) => (
            <div key={perk.title} className="flex items-center gap-3">
              <perk.icon className="h-8 w-8 shrink-0 rounded-full bg-green-100 p-1.5 text-green-700" />
              <div>
                <p className="text-sm font-bold">{perk.title}</p>
                <p className="text-xs text-zinc-500">{perk.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-xl font-extrabold">Shop by Category</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/?category=${c.slug}`}
              className={`rounded-2xl border p-4 hover:border-green-600 hover:shadow ${activeCategory === c.slug ? "border-green-600 bg-green-50 dark:bg-green-950" : "bg-white dark:bg-zinc-900"}`}
            >
              <p className="font-bold">{c.name}</p>
              <p className="text-xs text-zinc-500 mt-1">{c.productCount} products</p>
              <p className="text-xs text-zinc-500 line-clamp-1 mt-1">{c.description}</p>
            </Link>
          ))}
        </div>
        {activeCategory && (
          <Link href="/" className="mt-3 inline-block text-sm font-semibold text-green-700 hover:underline">
            Clear filter ✕
          </Link>
        )}
      </section>

      {/* Deals */}
      {!showFiltered && (
        <section id="deals" className="bg-red-50/60 dark:bg-red-950/20 border-y">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-red-600" />
              <h2 className="text-xl font-extrabold">Today&apos;s Deals</h2>
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
              {dealProducts.slice(0, 4).map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main grid */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-xl font-extrabold">
          {showFiltered
            ? `Results ${activeCategory ? `in ${activeCategory}` : ""} ${q ? `for "${q}"` : ""} (${filtered.length})`
            : "Featured Products"}
        </h2>
        {grid.length === 0 ? (
          <p className="mt-4 text-sm text-zinc-500">
            No products found. <Link href="/" className="text-green-700 font-semibold">View all</Link>
          </p>
        ) : (
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            {grid.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
