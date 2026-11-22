type LogoWallProps = {
  title: string;
  subhead?: string;
  logos: string[];
  logoImages?: Record<string, string>;
  theme?: "dark" | "light";
  /** Force every logo to a flat white silhouette via CSS filter. Only use with logos on a transparent background — on an opaque tile it flattens the whole tile to a blank white square. */
  mono?: boolean;
  /** Logos (by name) already pre-styled for this exact background (e.g. a real screenshot of the badge on black) — skip the mono filter and render as-is. */
  rawLogos?: string[];
  /** "sm" (default) for flat wordmark logos. "lg" for square/badge-style logos (e.g. client logo tiles), which need real height to read clearly since they're mostly 1:1, not wide wordmarks. */
  size?: "sm" | "lg";
  /** Logos (by name) that are a tall, stacked badge (icon + wordmark + caption) rather than a flat wordmark like the rest of this wall — same height as everyone else makes them render much narrower, so they get the "lg" height instead, even inside an otherwise "sm" wall. */
  tallLogos?: string[];
};

export default function LogoWall({
  title,
  subhead,
  logos,
  logoImages,
  theme = "dark",
  mono = false,
  rawLogos = [],
  size = "sm",
  tallLogos = [],
}: LogoWallProps) {
  const smallClassName = "h-8 w-auto max-w-[140px] object-contain md:h-10 md:max-w-[170px]";
  const largeClassName = "h-20 w-auto max-w-[160px] object-contain md:h-24 md:max-w-[190px]";
  const logoClassName = size === "lg" ? largeClassName : smallClassName;
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
        {/*
          Logos here have very different native aspect ratios (a tall bag-icon
          wordmark next to a flat, wide one). Constraining every logo into an
          identical width x height box (object-contain) made the flat/wide ones
          render much shorter than the others at the same width. Industry-
          standard fix for a mixed logo wall: fix the HEIGHT only and let width
          follow each logo's own aspect ratio, so visual weight stays even.
        */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-8">
          {logos.map((logo) =>
            logoImages?.[logo] ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo}
                src={logoImages[logo]}
                alt={logo}
                className={`${tallLogos.includes(logo) ? largeClassName : logoClassName} ${
                  mono && !rawLogos.includes(logo) ? "brightness-0 invert" : ""
                }`}
              />
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
