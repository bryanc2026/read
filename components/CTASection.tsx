export default function CTASection() {
  return (
    <section id="cta" className="bg-boom-yellow py-20 md:py-24">
      <div className="container-content text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-boom-black md:text-5xl">
          Ready to Unlock Your Ecommerce Business's Potential?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-boom-black/70 md:text-lg">
          Spots are capped at 20 brands. Talk to us to see if there's a fit — we'll tell you straight if we're not.
        </p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" action="#" method="post">
          <label htmlFor="cta-email" className="sr-only">
            Work email
          </label>
          <input
            id="cta-email"
            type="email"
            required
            placeholder="you@yourbrand.com"
            className="w-full flex-1 rounded-full border border-boom-black/15 bg-white px-5 py-3 text-sm text-boom-black placeholder:text-boom-black/40 focus:outline-none focus:ring-2 focus:ring-boom-black/30"
          />
          <button type="submit" className="inline-flex items-center justify-center rounded-full bg-boom-black px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]">
            Talk With Us
          </button>
        </form>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-boom-black/60">
          No lock-in contracts &middot; month to month
        </p>
      </div>
    </section>
  );
}
