type Props = {
  title: string;
  body: string;
  cta: string;
  theme?: "dark" | "light";
};

export default function Qualification({ title, body, cta, theme = "light" }: Props) {
  const isDark = theme === "dark";
  return (
    <section
      className={
        isDark
          ? "border-t border-white/10 bg-boom-black py-14 text-white md:py-20"
          : "border-t border-boom-black/10 bg-white py-14 md:py-20"
      }
    >
      <div className="container-content text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          {title}
        </h2>
        <p className={`mx-auto mt-4 max-w-md ${isDark ? "text-white/60" : "text-boom-black/65"}`}>{body}</p>
        <a href="/apply" className="btn-primary mt-7 inline-flex">
          {cta}
        </a>
      </div>
    </section>
  );
}
