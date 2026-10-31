import { whatMakesDifferent } from "@/lib/data";
import PlaceholderImage from "./ui/PlaceholderImage";

export default function WhatMakesDifferent() {
  return (
    <section className="border-t border-boom-black/10 bg-boom-gray-50 pb-14 pt-8 md:pb-20 md:pt-12">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            {whatMakesDifferent.title}
          </h2>
          <p className="mt-4 text-lg font-semibold">{whatMakesDifferent.intro.title}</p>
          <p className="mt-3 text-boom-black/65">{whatMakesDifferent.intro.body}</p>
        </div>

        <PlaceholderImage
          label={whatMakesDifferent.intro.imageAlt}
          path={whatMakesDifferent.intro.image}
          src={whatMakesDifferent.intro.imageSrc}
          className="mx-auto mt-12 aspect-[16/9] w-full max-w-4xl rounded-2xl shadow-card"
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {whatMakesDifferent.cards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-boom-black/10 bg-white p-7 shadow-card">
              <h3 className="font-display text-lg font-bold leading-snug">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-boom-black/60">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="/apply" className="btn-primary">
            {whatMakesDifferent.cta}
          </a>
          <p className="mt-4 text-sm font-medium text-boom-black/50">{whatMakesDifferent.ctaSubtext}</p>
        </div>
      </div>
    </section>
  );
}
