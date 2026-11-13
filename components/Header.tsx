"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { nav, utilityNav } from "@/lib/data";

function NavLink({
  label,
  href,
  external,
  className = "text-sm font-semibold text-white/70 transition-colors hover:text-white",
  onClick,
}: {
  label: string;
  href: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {label}
      </a>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {label}
      </Link>
    );
  }

  return (
    <a href={href} className={className} onClick={onClick}>
      {label}
    </a>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-boom-black/95 backdrop-blur">
        <div className="container-content flex h-20 items-center justify-between gap-6 md:h-28 lg:justify-start lg:gap-10">
          <Link
            href="/#top"
            className="flex items-center transition-transform hover:scale-105 active:scale-95"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/images/boom-logo.png"
              alt="Boom Ecommerce, back to homepage"
              width={1000}
              height={1000}
              className="h-12 w-12 rounded-md md:h-14 md:w-14"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex lg:gap-7">
            {nav.map((item) => (
              <NavLink key={item.href} label={item.label} href={item.href} external={item.external} />
            ))}

            <span className="h-4 w-px bg-white/15" aria-hidden="true" />

            <div className="group relative">
              <Link
                href="/free-tools"
                className="flex items-center gap-1 text-sm font-semibold text-white/70 transition-colors hover:text-white"
              >
                {utilityNav.freeTools.label}
                <svg viewBox="0 0 12 8" className="h-2.5 w-2.5 fill-none stroke-current stroke-[1.75]" aria-hidden="true">
                  <path d="m1.5 2 4.5 4 4.5-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <div className="invisible absolute left-1/2 top-full z-10 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <div className="rounded-xl border border-boom-black/10 bg-white p-2 shadow-card">
                  {utilityNav.freeTools.children?.map((tool) => (
                    <NavLink
                      key={tool.href}
                      label={tool.label}
                      href={tool.href}
                      external={tool.external}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-boom-black/70 transition-colors hover:bg-boom-gray-50 hover:text-boom-black"
                    />
                  ))}
                </div>
              </div>
            </div>

            <NavLink label={utilityNav.login.label} href={utilityNav.login.href} external={utilityNav.login.external} />
          </nav>

          <Link href="/apply" className="btn-primary-inverted">
            Talk With Us
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2" aria-hidden="true">
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto border-t border-white/10 bg-boom-black lg:hidden md:top-28">
          <nav className="container-content flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <NavLink
                key={item.href}
                label={item.label}
                href={item.href}
                external={item.external}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              />
            ))}

            <span className="my-2 h-px w-full bg-white/10" aria-hidden="true" />

            <span className="px-3 pb-1 text-xs font-bold uppercase tracking-wide text-white/40">
              {utilityNav.freeTools.label}
            </span>
            {utilityNav.freeTools.children?.map((tool) => (
              <NavLink
                key={tool.href}
                label={tool.label}
                href={tool.href}
                external={tool.external}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              />
            ))}

            <span className="my-2 h-px w-full bg-white/10" aria-hidden="true" />

            <NavLink
              label={utilityNav.login.label}
              href={utilityNav.login.href}
              external={utilityNav.login.external}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-white"
            />
          </nav>
        </div>
      )}
    </>
  );
}
