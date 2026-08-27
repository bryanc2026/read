import { coaches } from "@/lib/data";
import PlaceholderImage from "./ui/PlaceholderImage";

export default function Coaches() {
  return (
    <section id="coaches" className="bg-boom-cream py-20 md:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Your coaches</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Meet Your Coaches
          </h2>
        </div>

        <div className="mt-16 space-y-20">
          {coaches.map((coach, i) => (
            <div
              key={coach.name}
              className={`grid items-start gap-10 md:grid-cols-[320px_1fr] md:gap-14 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <PlaceholderImage
                  label={`${coach.name} photo`}
                  path={coach.photo}
                  className="aspect-[4/5] w-full rounded-2xl shadow-card"
                />
                <blockquote className="mt-5 border-l-2 border-boom-yellow pl-4 text-sm italic text-boom-black/70">
                  “{coach.quote.text}”
                  <footer className="mt-2 not-italic">
                    <span className="block text-sm font-semibold text-boom-black">{coach.quote.author}</span>
                    {coach.quote.company && (
                      <span className="text-xs font-medium text-boom-black/50">{coach.quote.company}</span>
                    )}
                  </footer>
                </blockquote>
              </div>

              <div>
                <h3 className="font-display text-2xl font-extrabold">{coach.name}</h3>
                <p className="mt-1 text-sm font-semibold text-boom-yellow-dark">{coach.role}</p>
                <div className="mt-5 space-y-4">
                  {coach.bio.map((paragraph, idx) => (
                    <p key={idx} className="text-[15px] leading-relaxed text-boom-black/70">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {coach.badges.map((badge) => (
                    <span key={badge} className="pill">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
