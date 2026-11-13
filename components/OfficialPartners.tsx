import Image from "next/image";
import { officialPartners } from "@/lib/data";

export default function OfficialPartners() {
  return (
    <section className="border-t border-white/10 bg-boom-black pb-14 pt-8 text-white md:pb-16 md:pt-12">
      <div className="container-content text-center">
        <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
          {officialPartners.title}
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-10">
          {officialPartners.logos.map((logo) => {
            const { src, partnerLabel, opaque } = officialPartners.logoImages[logo];

            return (
              <div key={logo} className="flex flex-col items-center gap-2">
                <div
                  className={
                    opaque
                      ? "flex h-20 w-28 items-center justify-center overflow-hidden rounded-xl bg-white p-3 shadow-card md:h-24 md:w-32"
                      : "flex h-20 w-28 items-center justify-center md:h-24 md:w-32"
                  }
                >
                  <Image
                    src={src}
                    alt={logo}
                    width={300}
                    height={300}
                    className={`max-h-full max-w-full object-contain ${opaque ? "" : "brightness-0 invert"}`}
                  />
                </div>
                {partnerLabel && (
                  <span className="text-xs font-semibold uppercase tracking-wide text-white/50">{partnerLabel}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
