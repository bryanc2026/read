import { metaMethodPage } from "@/lib/data";

export default function Strategy() {
  const { strategy } = metaMethodPage;

  return (
    <section className="bg-boom-cream py-14 md:py-20">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{strategy.title}</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {strategy.steps.map((step, i) => (
            <div key={step.title} className="rounded-2xl border border-boom-black/10 bg-white p-7 shadow-card">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-boom-yellow font-display text-sm font-extrabold text-boom-black">
                {i + 1}
              </span>
              <span className="mt-5 block text-xs font-bold uppercase tracking-[0.18em] text-boom-black/50">
                {step.phase}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-boom-black/60">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-semibold text-boom-black/60">{strategy.footnote}</p>
          <a href="/apply" className="btn-primary mt-6 inline-flex">
            {strategy.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
