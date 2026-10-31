import { aboutPage } from "@/lib/data";

export default function AboutHero() {
  const { hero } = aboutPage;

  return (
    <section className="pt-10 md:pt-14">
      <div className="container-content pb-16 text-center md:pb-24">
        <span className="eyebrow">About Boom</span>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-[2.4rem] font-extrabold leading-[1.08] tracking-tight md:text-5xl">
          {hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-boom-black/70">{hero.lead}</p>
        <p className="mx-auto mt-4 max-w-xl text-boom-black/60">{hero.body}</p>
      </div>
    </section>
  );
}
