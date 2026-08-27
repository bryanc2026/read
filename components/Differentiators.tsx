import { differentiators } from "@/lib/data";
import Icon from "./ui/Icon";

export default function Differentiators() {
  return (
    <section className="bg-boom-black py-20 text-white md:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-boom-yellow text-boom-black">
            <Icon name="target" />
          </span>
          <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            What's Different About The Boom Ecommerce Community?
          </h2>
          <p className="mt-4 text-lg font-semibold text-boom-yellow">We work with you, not your competitors.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <h3 className="font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
