import Image from "next/image";

type LogoWallProps = {
  title: string;
  subhead?: string;
  logos: string[];
  logoImages?: Record<string, string>;
  theme?: "dark" | "light";
  /** Force every logo to a flat white silhouette via CSS filter. Only use with logos on a transparent background — on an opaque tile it flattens the whole tile to a blank white square. */
  mono?: boolean;
};

export default function LogoWall({ title, subhead, logos, logoImages, theme = "dark", mono = false }: LogoWallProps) {
  const isDark = theme === "dark";
  return (
    <section
      className={
        isDark
          ? "border-t border-white/10 bg-boom-black pb-14 pt-8 text-white md:pb-16 md:pt-12"
          : "border-t border-boom-black/10 bg-boom-gray-50 pb-14 pt-8 md:pb-16 md:pt-12"
      }
    >
      <div className="container-content text-center">
        <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">{title}</h2>
        {subhead && (
          <p className={`mx-auto mt-3 max-w-2xl text-sm md:text-base ${isDark ? "text-white/55" : "text-boom-black/60"}`}>
            {subhead}
          </p>
        )}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-8">
          {logos.map((logo) =>
            logoImages?.[logo] ? (
              <div
                key={logo}
                className="flex h-20 w-28 items-center justify-center md:h-28 md:w-36 lg:h-24 lg:w-32"
              >
                <Image
                  src={logoImages[logo]}
                  alt={logo}
                  width={300}
                  height={300}
                  className={`max-h-full max-w-full object-contain ${mono ? "brightness-0 invert" : ""}`}
                />
              </div>
            ) : (
              <span
                key={logo}
                className={`font-display text-lg font-extrabold uppercase tracking-tight ${
                  isDark ? "text-white/85" : "text-boom-black/70"
                }`}
              >
                {logo}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
