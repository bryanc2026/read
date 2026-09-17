import { metaMethodPage } from "@/lib/data";
import Icon from "../ui/Icon";

export default function ProblemAnswer() {
  const { problem, answer } = metaMethodPage;

  return (
    <section className="bg-boom-gray-50 py-20 md:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{problem.title}</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-boom-black/10 bg-white p-7 shadow-card md:p-8">
            <span className="eyebrow">{problem.label}</span>
            <p className="mt-3 font-display text-lg font-bold leading-snug">{problem.intro}</p>
            <ul className="mt-5 space-y-3">
              {problem.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-boom-black/70">
                  <Icon name="cross" className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-500/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-medium text-boom-black/60">{problem.footer}</p>
          </div>

          <div className="rounded-2xl border border-boom-black/10 bg-white p-7 shadow-card md:p-8">
            <span className="eyebrow">{answer.label}</span>
            <p className="mt-3 font-display text-lg font-bold leading-snug">{answer.title}</p>
            <ul className="mt-5 space-y-3">
              {answer.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-boom-black/70">
                  <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-boom-yellow-dark" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-medium text-boom-black/60">{answer.footer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
