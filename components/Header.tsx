import Link from "next/link";
import { nav } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-boom-black/5 bg-boom-cream/90 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between md:h-20">
        <Link href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-boom-yellow font-display text-sm font-extrabold text-boom-black">
            B
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">BOOM</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-boom-black/70 transition-colors hover:text-boom-black"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#cta" className="btn-primary-inverted">
          Talk With Us
        </a>
      </div>
    </header>
  );
}
