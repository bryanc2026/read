import { aboutPage } from "@/lib/data";

export default function Values() {
  const { values } = aboutPage;

  return (
    <section className="bg-boom-gray-50 py-14 md:py-20">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{values.eyebrow}</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            What We Stand For
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-boom-black/10 bg-white p-7 shadow-card">
              <h3 className="font-display text-lg font-bold leading-snug">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-boom-black/60">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
