import Image from "next/image";
import {
  resultStatsPrimary,
  resultStatsSecondary,
  resultStatsSection,
  strategySection,
  strategyDivider,
  type ResultStat,
} from "@/lib/data";

function ResultCard({ stat }: { stat: ResultStat }) {
  return (
    <div className="flex flex-col rounded-2xl border border-boom-black/10 bg-white p-6 shadow-card">
      <h3 className="font-display text-xl font-extrabold leading-snug">{stat.headline}</h3>
      <div className="mt-4 overflow-hidden rounded-xl border border-boom-black/10">
        <Image
          src={stat.imageSrc}
          alt={stat.headline}
          width={1170}
          height={700}
          className="h-auto w-full"
        />
      </div>
      <ul className="mt-4 space-y-2">
        {stat.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm text-boom-black/65">
            <span aria-hidden="true">📈</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <a href="/apply" className="btn-primary-inverted mt-6 self-start">
        Talk to us
      </a>
    </div>
  );
}

export default function Results() {
  return (
    <>
      <section id="results" className="bg-boom-gray-50 pb-14 pt-8 md:pb-20 md:pt-12">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Member results</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              {resultStatsSection.title}
            </h2>
            <p className="mt-4 text-lg text-boom-black/65">{resultStatsSection.subhead}</p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resultStatsPrimary.map((stat) => (
              <ResultCard key={stat.headline} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="container-content">
          <h2 className="mx-auto max-w-2xl text-center font-display text-2xl font-extrabold tracking-tight md:text-3xl">
            {strategyDivider.title}
          </h2>
        </div>
      </section>

      <section className="bg-boom-gray-50 pb-14 pt-8 md:pb-20 md:pt-12">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              {strategySection.title}
            </h2>
            <p className="mt-4 text-lg text-boom-black/65">{strategySection.body}</p>
            <p className="mt-4 text-lg font-semibold italic text-boom-black/70">{strategySection.lead}</p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resultStatsSecondary.map((stat) => (
              <ResultCard key={stat.headline} stat={stat} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
