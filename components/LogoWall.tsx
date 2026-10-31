import Image from "next/image";

type LogoWallProps = {
  title: string;
  subhead?: string;
  logos: string[];
  logoImages?: Record<string, string>;
  theme?: "dark" | "light";
};

export default function LogoWall({ title, subhead, logos, logoImages, theme = "dark" }: LogoWallProps) {
  const isDark = theme === "dark";
  return (
    <section className={isDark ? "bg-boom-black py-14 text-white md:py-16" : "bg-boom-gray-50 py-14 md:py-16"}>
      <div className="container-content text-center">
        <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">{title}</h2>
        {subhead && (
          <p className={`mx-auto mt-3 max-w-xl text-sm md:text-base ${isDark ? "text-white/55" : "text-boom-black/60"}`}>
            {subhead}
          </p>
        )}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-8">
          {logos.map((logo) =>
            logoImages?.[logo] ? (
              <div key={logo} className="flex h-20 w-40 items-center justify-center md:h-24 md:w-48">
                <Image
                  src={logoImages[logo]}
                  alt={logo}
                  width={300}
                  height={150}
                  className="max-h-full max-w-full object-contain"
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
