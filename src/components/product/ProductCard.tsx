"use client";

import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { Star, ShoppingCart } from "lucide-react";
import type { Product } from "@/types";
import { formatNaira, discountPercent, cn } from "@/lib/utils/format";
import { useCartStore } from "@/lib/store/cart-store";

export function ProductCard({ product }: { product: Product }) {
  const add = useCartStore((s) => s.add);
  const pct = discountPercent(product.price, product.originalPrice);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border bg-white dark:bg-zinc-900 hover:shadow-lg transition">
      <Link href={`/product/${product.slug}`} className="relative block bg-zinc-100 dark:bg-zinc-800 p-6">
        {pct && (
          <span className="absolute left-3 top-3 rounded-full bg-red-600 px-2 py-0.5 text-xs font-bold text-white">
            -{pct}%
          </span>
        )}
        {product.isNew && (
          <span className="absolute right-3 top-3 rounded-full bg-green-600 px-2 py-0.5 text-xs font-bold text-white">
            NEW
          </span>
        )}
        {!product.inStock && (
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-sm font-bold text-zinc-500 bg-white/80 py-1">
            Out of stock
          </span>
        )}
        <Image
          src={product.images[0] ?? "/file.svg"}
          alt={product.name}
          width={200}
          height={200}
          className="mx-auto h-36 w-36 object-contain transition group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <p className="text-[11px] uppercase tracking-wide text-zinc-500">{product.brand}</p>
        <Link href={`/product/${product.slug}`} className="line-clamp-2 text-sm font-semibold leading-snug hover:text-green-700">
          {product.name}
        </Link>
        <div className="flex items-center gap-1 text-xs text-zinc-500">
          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          <span className="font-medium text-zinc-700 dark:text-zinc-300">{product.rating}</span>
          <span>({product.reviewCount})</span>
        </div>
        <div className="mt-auto pt-2 flex items-baseline gap-2">
          <span className="text-base font-extrabold">{formatNaira(product.price)}</span>
          {product.originalPrice && (
            <span className="text-xs text-zinc-500 line-through">{formatNaira(product.originalPrice)}</span>
          )}
        </div>
        <button
          disabled={!product.inStock}
          onClick={() => {
            add(product);
            toast.success("Added to cart");
          }}
          className={cn(
            "mt-2 flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition",
            product.inStock
              ? "bg-zinc-900 text-white hover:bg-green-700"
              : "bg-zinc-200 text-zinc-500 cursor-not-allowed"
          )}
        >
          <ShoppingCart className="h-4 w-4" />
          {product.inStock ? "Add to Cart" : "Sold Out"}
        </button>
      </div>
    </div>
  );
}
