import { howItWorks } from "@/lib/data";
import Icon, { IconName } from "./ui/Icon";

export default function HowItWorks() {
  return (
    <section id="what-you-get" className="bg-boom-cream py-14 md:py-20">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What you get</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            {howItWorks.title}
          </h2>
          <p className="mt-4 text-lg text-boom-black/65">{howItWorks.subhead}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {howItWorks.items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-boom-black/10 bg-white p-7 shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-boom-yellow text-boom-black">
                <Icon name={item.icon as IconName} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-boom-black/60">{item.body}</p>

              {item.bullets && (
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-boom-black/70">
                      <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-boom-yellow-dark" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.cta && (
                <a href="#cta" className="btn-primary-inverted mt-6 self-start">
                  {item.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
