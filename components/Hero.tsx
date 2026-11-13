import PlaceholderImage from "./ui/PlaceholderImage";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-10 md:pt-14">
      <div className="container-content grid items-center gap-12 pb-16 md:grid-cols-2 md:gap-10 md:pb-24">
        <div>
          <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight md:text-6xl">
            Unlock Your Ecommerce Business Potential with Boom
          </h1>
          <p className="mt-5 max-w-md text-lg text-boom-black/70">
            Learn from a community of founders, owners and marketers in your position.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/apply" className="btn-primary">
              Talk With Us
            </a>
            <a href="#results" className="btn-secondary">
              See Member Results
            </a>
          </div>
          <p className="mt-6 text-sm text-boom-black/50">
            Trusted by Shopify brands doing $250K&ndash;$50M+ in revenue &middot; capped at 20 members
          </p>
        </div>

        <PlaceholderImage
          label="Iain hosting a Retail Fest panel on AI in ecommerce"
          path="/images/hero-stage.jpg"
          src="/images/hero-stage.jpg"
          className="aspect-[4/3] w-full rounded-2xl shadow-card"
        />
      </div>
    </section>
  );
}
