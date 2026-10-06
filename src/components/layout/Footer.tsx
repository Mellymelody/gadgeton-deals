import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-zinc-50 dark:bg-zinc-950 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold">
            Gadget<span className="text-green-600">On</span> Deals
          </p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Genuine gadgets at the best prices in Nigeria. Pay on delivery, bank
            transfer or card. Warranty on every item.
          </p>
        </div>
        <div>
          <p className="font-semibold text-sm">Shop</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/?category=smartphones" className="hover:underline">Smartphones</Link></li>
            <li><Link href="/?category=laptops" className="hover:underline">Laptops</Link></li>
            <li><Link href="/?category=audio" className="hover:underline">Audio</Link></li>
            <li><Link href="/?category=accessories" className="hover:underline">Accessories</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-sm">Contact</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Lagos, Nigeria</li>
            <li><a href="https://wa.me/2348000000000" className="text-green-700 hover:underline">WhatsApp: 0800 000 0000</a></li>
            <li>Mon–Sat, 9am–7pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} GadgetOn Deals. All rights reserved.
      </div>
    </footer>
  );
}
