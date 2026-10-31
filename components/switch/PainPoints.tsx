import { switchPage } from "@/lib/data";
import Icon from "../ui/Icon";

export default function PainPoints() {
  return (
    <section className="bg-boom-gray-50 py-14 md:py-20">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            {switchPage.intro.title}
          </h2>
          <p className="mt-4 text-lg text-boom-black/65">{switchPage.intro.body}</p>
        </div>

        <div className="mt-14 space-y-6">
          {switchPage.painPoints.map((point) => (
            <div
              key={point.problem}
              className="grid gap-4 rounded-2xl border border-boom-black/10 bg-white p-6 shadow-card md:grid-cols-2 md:gap-8 md:p-8"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-rose-500/80">
                  <Icon name="cross" className="h-4 w-4" />
                  {point.problem}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-boom-black/65">{point.problemBody}</p>
              </div>
              <div className="md:border-l md:border-boom-black/10 md:pl-8">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-boom-yellow-dark">
                  <Icon name="check" className="h-4 w-4" />
                  {point.answer}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-boom-black/70">{point.answerBody}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
