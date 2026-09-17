import { metaMethodPage } from "@/lib/data";
import Icon, { IconName } from "../ui/Icon";

export default function Included() {
  const { included } = metaMethodPage;

  return (
    <section className="bg-boom-gray-50 py-20 md:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{included.eyebrow}</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">{included.title}</h2>
          <p className="mt-4 text-lg text-boom-black/65">{included.subhead}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {included.items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-boom-black/10 bg-white p-7 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-boom-yellow text-boom-black">
                <Icon name={item.icon as IconName} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-boom-black/60">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
