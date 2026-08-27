type LogoWallProps = {
  title: string;
  subhead?: string;
  logos: string[];
  theme?: "dark" | "light";
};

export default function LogoWall({ title, subhead, logos, theme = "dark" }: LogoWallProps) {
  const isDark = theme === "dark";
  return (
    <section className={isDark ? "bg-boom-black py-20 text-white md:py-24" : "bg-boom-gray-50 py-20 md:py-24"}>
      <div className="container-content text-center">
        <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">{title}</h2>
        {subhead && (
          <p className={`mx-auto mt-3 max-w-xl text-sm md:text-base ${isDark ? "text-white/55" : "text-boom-black/60"}`}>
            {subhead}
          </p>
        )}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((logo) => (
            <span
              key={logo}
              className={`font-display text-lg font-extrabold uppercase tracking-tight ${
                isDark ? "text-white/85" : "text-boom-black/70"
              }`}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
