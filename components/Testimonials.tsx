import Image from "next/image";
import type { Testimonial } from "@/lib/data";

type Props = {
  title: string;
  subhead: string;
  testimonials: Testimonial[];
  id?: string;
};

export default function Testimonials({ title, subhead, testimonials, id }: Props) {
  // Cap the column count at how many cards there are, so a short list
  // (e.g. 2 testimonials) never leaves an empty column at wider widths.
  const columnsClassName =
    testimonials.length >= 3
      ? "columns-1 gap-6 sm:columns-2 lg:columns-3"
      : testimonials.length === 2
        ? "mx-auto max-w-3xl columns-1 gap-6 sm:columns-2"
        : "mx-auto max-w-xl columns-1 gap-6";

  return (
    <section id={id} className="border-t border-boom-black/10 bg-boom-gray-50 pb-14 pt-8 md:pb-20 md:pt-12">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-boom-black/65">{subhead}</p>
        </div>

        <div className={`mt-14 ${columnsClassName}`}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="mb-6 break-inside-avoid rounded-2xl border border-boom-black/10 bg-white p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                {t.photoSrc ? (
                  <span className="flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-boom-black/10">
                    <Image
                      src={t.photoSrc}
                      alt={t.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </span>
                ) : t.logoSrc ? (
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-boom-black/10 bg-white">
                    <Image
                      src={t.logoSrc}
                      alt={t.role}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain p-1.5"
                    />
                  </span>
                ) : (
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-boom-yellow font-display text-sm font-extrabold text-boom-black">
                    {t.name.charAt(0)}
                  </span>
                )}
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-boom-black/50">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm italic leading-relaxed text-boom-black/70">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
