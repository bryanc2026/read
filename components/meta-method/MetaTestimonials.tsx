import { metaMethodPage, testimonialsList } from "@/lib/data";

export default function MetaTestimonials() {
  const { testimonials } = metaMethodPage;
  const items = testimonialsList.filter((t) => testimonials.names.includes(t.name));

  return (
    <section className="bg-boom-gray-50 py-14 md:py-20">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{testimonials.title}</h2>
          <p className="mt-4 text-lg text-boom-black/65">{testimonials.subhead}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl border border-boom-black/10 bg-white p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-boom-yellow font-display text-sm font-extrabold text-boom-black">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-boom-black/50">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm italic leading-relaxed text-boom-black/70">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
