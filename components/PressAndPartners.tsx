import Image from "next/image";
import { featuredBy } from "@/lib/data";

export default function PressAndPartners() {
  return (
    <section className="bg-boom-black py-14 text-white md:py-16">
      <div className="container-content text-center">
        <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">{featuredBy.title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/55 md:text-base">{featuredBy.subhead}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-8">
          {featuredBy.logos.map((logo) =>
            featuredBy.logoImages?.[logo] ? (
              <div key={logo} className="flex h-20 w-40 items-center justify-center md:h-24 md:w-48">
                <Image
                  src={featuredBy.logoImages[logo]}
                  alt={logo}
                  width={300}
                  height={150}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ) : (
              <span key={logo} className="font-display text-lg font-extrabold uppercase tracking-tight text-white/85">
                {logo}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
