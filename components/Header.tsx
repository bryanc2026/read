import Link from "next/link";
import { nav, utilityNav } from "@/lib/data";

function NavLink({ label, href, external }: { label: string; href: string; external?: boolean }) {
  const className = "text-sm font-semibold text-boom-black/70 transition-colors hover:text-boom-black";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-boom-black/5 bg-boom-cream/90 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between md:h-20">
        <Link href="/#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-boom-yellow font-display text-sm font-extrabold text-boom-black">
            B
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">BOOM</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex lg:gap-7">
          {nav.map((item) => (
            <NavLink key={item.href} label={item.label} href={item.href} external={item.external} />
          ))}

          <span className="h-4 w-px bg-boom-black/10" aria-hidden="true" />

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-semibold text-boom-black/70 transition-colors hover:text-boom-black"
            >
              {utilityNav.freeTools.label}
              <svg viewBox="0 0 12 8" className="h-2.5 w-2.5 fill-none stroke-current stroke-[1.75]" aria-hidden="true">
                <path d="m1.5 2 4.5 4 4.5-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="invisible absolute left-1/2 top-full z-10 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl border border-boom-black/10 bg-white p-2 shadow-card">
                {utilityNav.freeTools.children?.map((tool) => (
                  <a
                    key={tool.href}
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-boom-black/70 transition-colors hover:bg-boom-gray-50 hover:text-boom-black"
                  >
                    {tool.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <NavLink label={utilityNav.login.label} href={utilityNav.login.href} external={utilityNav.login.external} />
        </nav>

        <a href="#cta" className="btn-primary-inverted">
          Talk With Us
        </a>
      </div>
    </header>
  );
}
