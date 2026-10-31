import { metaMethodPage } from "@/lib/data";

export default function MetaHero() {
  const { hero } = metaMethodPage;

  return (
    <section className="pt-10 md:pt-14">
      <div className="container-content pb-16 text-center md:pb-24">
        <span className="eyebrow">{hero.eyebrow}</span>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight md:text-6xl">
          {hero.title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-boom-black/70">{hero.subhead}</p>
        <div className="mt-8 flex justify-center">
          <a href="#cta" className="btn-primary">
            {hero.cta}
          </a>
        </div>
        <p className="mt-6 text-sm font-semibold text-boom-black/50">{hero.note}</p>
      </div>
    </section>
  );
}
