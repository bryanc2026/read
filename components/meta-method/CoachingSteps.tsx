import { metaMethodPage } from "@/lib/data";
import PlaceholderImage from "../ui/PlaceholderImage";

export default function CoachingSteps() {
  const { coachingSteps } = metaMethodPage;

  return (
    <section className="bg-boom-cream py-14 md:py-20">
      <div className="container-content grid gap-12 md:grid-cols-[1fr_320px] md:gap-14">
        <div>
          <span className="eyebrow">How it works</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            {coachingSteps.title}
          </h2>

          <ol className="mt-10 space-y-6">
            {coachingSteps.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-boom-yellow font-display text-sm font-extrabold text-boom-black">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-boom-black/60">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <a href="#cta" className="btn-primary mt-10 inline-flex">
            {coachingSteps.cta}
          </a>
        </div>

        <div>
          <PlaceholderImage
            label="Iain speaking at an ecommerce industry event"
            path="/images/iain-speaking.jpg"
            src="/images/iain-stage.jpg"
            className="aspect-[4/5] w-full rounded-2xl shadow-card"
          />
          <p className="mt-4 text-sm leading-relaxed text-boom-black/60">
            <span className="font-semibold text-boom-black">{coachingSteps.eyebrow}.</span>{" "}
            {coachingSteps.imageCaption}
          </p>
        </div>
      </div>
    </section>
  );
}
