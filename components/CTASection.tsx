import Link from "next/link";

export default function CTASection() {
  return (
    <section id="cta" className="bg-boom-yellow py-14 md:py-16">
      <div className="container-content text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-boom-black md:text-5xl">
          Ready to Unlock Your Ecommerce Business's Potential?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-boom-black/70 md:text-lg">
          Spots are capped at 20 brands. Talk to us to see if there's a fit. We'll tell you straight if we're not.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-full bg-boom-black px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Talk With Us
          </Link>
        </div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-boom-black/60">
          No lock-in contracts &middot; month to month
        </p>
      </div>
    </section>
  );
}
