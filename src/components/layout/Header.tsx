"use client";

import Link from "next/link";
import { ShoppingCart, Search, Zap, Menu } from "lucide-react";
import { useCartStore } from "@/lib/store/cart-store";
import { useState } from "react";

const NAV = [
  { label: "Smartphones", href: "/?category=smartphones" },
  { label: "Laptops", href: "/?category=laptops" },
  { label: "Audio", href: "/?category=audio" },
  { label: "Accessories", href: "/?category=accessories" },
];

export function Header() {
  const count = useCartStore((s) => s.count());
  const [q, setQ] = useState("");

  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur dark:bg-black/90">
      <div className="bg-zinc-900 text-white text-xs sm:text-sm">
        <div className="mx-auto max-w-6xl px-4 py-1.5 flex items-center justify-center gap-2">
          <Zap className="h-3.5 w-3.5 text-yellow-400" />
          <span>Free delivery in Lagos on orders over ₦200,000 — Pay on delivery available</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          Gadget<span className="text-green-600">On</span>
          <span className="ml-1 rounded bg-green-600 px-1.5 py-0.5 text-xs font-bold text-white align-middle">
            DEALS
          </span>
        </Link>

        <form
          className="hidden md:flex flex-1 items-center gap-2 rounded-full border px-4 py-2"
          action="/"
          method="get"
          onSubmit={() => {
            // let Next handle ?q= via searchParams with default GET
          }}
        >
          <Search className="h-4 w-4 text-zinc-500" />
          <input
            name="q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search phones, laptops, earbuds..."
            className="w-full bg-transparent outline-none text-sm"
          />
        </form>

        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/"
            className="relative flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-green-600 px-1 text-[11px] font-bold">
                {count}
              </span>
            )}
          </Link>
          <button className="md:hidden rounded-full border p-2" aria-label="Menu">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>

      <nav className="border-t">
        <div className="mx-auto max-w-6xl px-4 flex gap-4 overflow-x-auto py-2 text-sm font-medium">
          {NAV.map((n) => (
            <Link key={n.href + n.label} href={n.href} className="whitespace-nowrap hover:text-green-700">
              {n.label}
            </Link>
          ))}
          <Link href="https://wa.me/2348000000000" className="whitespace-nowrap text-green-700">
            Order on WhatsApp
          </Link>
        </div>
      </nav>
    </header>
  );
}
