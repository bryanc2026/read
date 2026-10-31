import { coaches } from "@/lib/data";
import PlaceholderImage from "./ui/PlaceholderImage";

export default function Coaches() {
  return (
    <section id="coaches" className="bg-boom-cream py-14 md:py-20">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Your coaches</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Meet Your Coaches
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {coaches.map((coach) => (
            <div key={coach.name} className="rounded-2xl border border-boom-black/10 bg-white p-7 shadow-card md:p-8">
              <div className="flex items-center gap-4">
                <PlaceholderImage
                  label={`${coach.name} photo`}
                  path={coach.photo}
                  src={coach.photoSrc}
                  className="h-20 w-20 flex-shrink-0 rounded-full"
                />
                <div>
                  <h3 className="font-display text-xl font-extrabold">{coach.name}</h3>
                  <p className="text-sm font-semibold text-boom-yellow-dark">{coach.role}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {coach.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-[15px] leading-relaxed text-boom-black/70">
                    {paragraph}
                  </p>
                ))}
              </div>

              <blockquote className="mt-6 border-l-2 border-boom-yellow pl-4 text-sm italic text-boom-black/70">
                “{coach.quote.text}”
                <footer className="mt-2 not-italic">
                  <span className="block text-sm font-semibold text-boom-black">{coach.quote.author}</span>
                  {coach.quote.company && (
                    <span className="text-xs font-medium text-boom-black/50">{coach.quote.company}</span>
                  )}
                </footer>
              </blockquote>

              <div className="mt-6 flex flex-wrap gap-2">
                {coach.badges.map((badge) => (
                  <span key={badge} className="pill">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
