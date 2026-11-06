import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/Icon";
import { freeToolsPages } from "@/lib/data";

// Title/description inherit the site-wide default (matches the live site's
// identical metadata across every page, preserving existing SEO equity).
export const metadata: Metadata = {
  alternates: { canonical: "/free-tools" },
};

export default function FreeToolsPage() {
  return (
    <main>
      <Header />

      <section className="pt-10 md:pt-14">
        <div className="container-content pb-10 text-center md:pb-14">
          <span className="eyebrow">Free Tools</span>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-[2.4rem] font-extrabold leading-[1.08] tracking-tight md:text-5xl">
            Free Ecommerce Calculators
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-boom-black/65">
            A couple of quick tools we built to help ecommerce brands check their numbers. No sign-up
            required.
          </p>
        </div>
      </section>

      <section className="bg-boom-gray-50 py-14 md:py-20">
        <div className="container-content">
          <div className="grid gap-6 md:grid-cols-2">
            {freeToolsPages.map((tool) => (
              <Link
                key={tool.slug}
                href={`/free-tools/${tool.slug}`}
                className="group flex flex-col rounded-2xl border border-boom-black/10 bg-white p-7 shadow-card transition-colors hover:border-boom-black/20 md:p-8"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-boom-yellow text-boom-black">
                  <Icon name="target" />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold leading-snug">{tool.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-boom-black/60">{tool.description}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-boom-yellow-dark">
                  Open calculator
                  <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
