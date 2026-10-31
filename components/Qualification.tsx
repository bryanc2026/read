import { qualification } from "@/lib/data";

export default function Qualification() {
  return (
    <section className="bg-boom-black py-14 text-white md:py-20">
      <div className="container-content grid gap-14 md:grid-cols-2 md:gap-10">
        <div className="text-center md:text-left">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            {qualification.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/60 md:mx-0">{qualification.body}</p>
          <a href="/apply" className="btn-primary mt-7 inline-flex">
            {qualification.cta}
          </a>
        </div>

        <div className="border-t border-white/10 pt-14 text-center md:border-l md:border-t-0 md:pl-10 md:pt-0 md:text-left">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            {qualification.policy.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/60 md:mx-0">{qualification.policy.body}</p>
          <a href="/apply" className="btn-primary mt-7 inline-flex">
            {qualification.policy.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
