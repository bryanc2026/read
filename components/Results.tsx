import Image from "next/image";
import { memberResults } from "@/lib/data";

export default function Results() {
  return (
    <section id="results" className="bg-boom-gray-50 pb-14 pt-8 md:pb-20 md:pt-12">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Member results</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            {memberResults.title}
          </h2>
          <p className="mt-4 text-lg text-boom-black/65">{memberResults.subhead}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {memberResults.images.map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-2xl border border-boom-black/10 bg-white shadow-card"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1170}
                height={1240}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="/apply" className="btn-primary-inverted">
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
}
