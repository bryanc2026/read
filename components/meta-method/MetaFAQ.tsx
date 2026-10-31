import { metaMethodPage } from "@/lib/data";

export default function MetaFAQ() {
  const { faqs, faqFooter } = metaMethodPage;

  return (
    <section className="border-t border-boom-black/10 bg-boom-cream pb-14 pt-8 md:pb-20 md:pt-12">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-boom-black/65">Everything you need to know about the Boom Meta Method.</p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-boom-black/10 rounded-2xl border border-boom-black/10 bg-white shadow-card">
          {faqs.map((faq) => (
            <details key={faq.q} className="group p-6 open:bg-boom-gray-50/60 md:p-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold md:text-lg">
                {faq.q}
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-boom-yellow text-boom-black transition-transform group-open:rotate-45">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-boom-black/65 md:text-[15px]">{faq.a}</p>
            </details>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm font-medium text-boom-black/60">{faqFooter}</p>
      </div>
    </section>
  );
}
