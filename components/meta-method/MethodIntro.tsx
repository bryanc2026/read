import { metaMethodPage } from "@/lib/data";

export default function MethodIntro() {
  const { intro } = metaMethodPage;

  return (
    <section className="bg-boom-black py-20 text-white md:py-28">
      <div className="container-content mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-boom-yellow">{intro.eyebrow}</span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">{intro.title}</h2>
        <p className="mt-5 text-lg text-white/70">{intro.body}</p>
        <p className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-sm leading-relaxed text-white/70">
          {intro.callout}
        </p>
      </div>
    </section>
  );
}
