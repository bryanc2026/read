import { switchPage } from "@/lib/data";

export default function SwitchHero() {
  const { hero } = switchPage;

  return (
    <section className="pt-10 md:pt-14">
      <div className="container-content pb-10 text-center md:pb-14">
        <span className="eyebrow">{hero.eyebrow}</span>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight md:text-6xl">
          {hero.title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-boom-black/70">{hero.subhead}</p>
        <div className="mt-8 flex justify-center">
          <a href="/apply" className="btn-primary">
            {hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
