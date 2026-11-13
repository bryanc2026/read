import Image from "next/image";
import { metaMethodPage } from "@/lib/data";
import PlaceholderImage from "../ui/PlaceholderImage";

export default function CoachProfile() {
  const { coach } = metaMethodPage;

  return (
    <section className="bg-boom-cream pb-14 pt-6 md:pb-20 md:pt-8">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Meet your coach</span>
        </div>

        <div className="mt-12 grid items-start gap-10 md:grid-cols-[320px_1fr] md:gap-14">
          <div>
            <PlaceholderImage
              label={`${coach.name} photo`}
              path={coach.photo}
              src={coach.photoSrc}
              className="aspect-[4/5] w-full rounded-2xl shadow-card"
            />
            <blockquote className="mt-5 border-l-2 border-boom-yellow pl-4 text-sm italic text-boom-black/70">
              &ldquo;{coach.quote.text}&rdquo;
              {coach.quote.author && (
                <footer className="mt-2 flex items-center gap-2 not-italic">
                  <div>
                    <span className="block text-sm font-semibold text-boom-black">{coach.quote.author}</span>
                    {coach.quote.company && !coach.quote.companyLogo && (
                      <span className="text-xs font-medium text-boom-black/50">{coach.quote.company}</span>
                    )}
                  </div>
                  {coach.quote.companyLogo && (
                    <Image
                      src={coach.quote.companyLogo}
                      alt={coach.quote.company ?? ""}
                      width={80}
                      height={24}
                      className="h-4 w-auto object-contain"
                    />
                  )}
                </footer>
              )}
            </blockquote>
          </div>

          <div>
            <h2 className="font-display text-2xl font-extrabold">{coach.name}</h2>
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
      </div>
    </section>
  );
}
