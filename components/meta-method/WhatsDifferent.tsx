import { metaMethodPage } from "@/lib/data";

export default function WhatsDifferent() {
  const { different } = metaMethodPage;

  return (
    <section className="bg-boom-black py-14 text-white md:py-20">
      <div className="container-content mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{different.title}</h2>
        <p className="mt-5 text-lg text-white/70">{different.body}</p>
        <a href="/apply" className="btn-primary mt-8 inline-flex">
          {different.cta}
        </a>
      </div>
    </section>
  );
}
