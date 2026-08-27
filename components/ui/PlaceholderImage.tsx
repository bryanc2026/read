type PlaceholderImageProps = {
  label: string;
  path: string;
  className?: string;
  variant?: "photo" | "portrait";
};

export default function PlaceholderImage({ label, path, className = "", variant = "photo" }: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_30%_20%,#232323_0%,#0B0B0C_60%)] ${className}`}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(#FFD400 1px, transparent 1px), linear-gradient(90deg, #FFD400 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-boom-yellow text-boom-black">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 16.5 8.5 11l3.5 4 3-3.5L20 16.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="8" cy="8" r="1.75" fill="currentColor" />
          </svg>
        </span>
        <p className="text-xs font-semibold uppercase tracking-wide text-white/70">{label}</p>
        <p className="font-mono text-[10px] text-white/35">{path}</p>
      </div>
    </div>
  );
}
