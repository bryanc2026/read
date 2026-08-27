import { resultStats } from "@/lib/data";
import Icon from "./ui/Icon";
import Sparkline from "./ui/Sparkline";

export default function Results() {
  return (
    <section id="results" className="bg-boom-gray-50 py-20 md:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Member results</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Real Results From Real Members
          </h2>
          <p className="mt-4 text-lg text-boom-black/65">
            Member-reported outcomes from inside the Boom community.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resultStats.map((stat) => (
            <div
              key={stat.headline}
              className="flex flex-col rounded-2xl border border-boom-black/10 bg-white p-6 shadow-card"
            >
              <h3 className="font-display text-xl font-extrabold leading-snug">{stat.headline}</h3>
              <Sparkline data={stat.trend} className="mt-4 h-20 w-full" />
              <ul className="mt-4 space-y-2">
                {stat.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-boom-black/65">
                    <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-boom-yellow-dark" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className="btn-primary-inverted mt-6 self-start">
                Talk to Us
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
