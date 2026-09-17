import { metaMethodPage } from "@/lib/data";

export default function MetaResults() {
  const { results } = metaMethodPage;

  return (
    <section className="bg-boom-gray-50 py-20 md:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{results.label}</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">{results.title}</h2>
          <p className="mt-4 text-lg text-boom-black/65">{results.subhead}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {results.items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-boom-black/10 bg-white p-7 shadow-card">
              <h3 className="font-display text-xl font-extrabold leading-snug">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-boom-black/60">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
