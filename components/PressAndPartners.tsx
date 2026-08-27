import { featuredBy, partners } from "@/lib/data";

export default function PressAndPartners() {
  return (
    <section className="bg-boom-black py-20 text-white md:py-24">
      <div className="container-content space-y-16 text-center">
        <div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">{featuredBy.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/55 md:text-base">{featuredBy.subhead}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {featuredBy.logos.map((logo) => (
              <span key={logo} className="font-display text-lg font-extrabold uppercase tracking-tight text-white/85">
                {logo}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-14">
          <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">{partners.title}</h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {partners.logos.map((logo) => (
              <span
                key={logo}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
