export type IconName =
  | "calendar"
  | "boom"
  | "target"
  | "google"
  | "playbook"
  | "chat"
  | "notes"
  | "community"
  | "skills"
  | "check"
  | "arrow-right";

const paths: Record<IconName, JSX.Element> = {
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 9.5h16M8 3v3.5M16 3v3.5" strokeLinecap="round" />
    </>
  ),
  boom: (
    <>
      <path d="M6 16.5V9l4-2.5 4 2.5v7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 16.5V11l4-1.5v7" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2.5M12 19.5V22M22 12h-2.5M4.5 12H2" strokeLinecap="round" />
    </>
  ),
  google: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8.5v7M8.5 12h7" strokeLinecap="round" />
    </>
  ),
  playbook: (
    <>
      <path d="M5 4.5h11a2 2 0 0 1 2 2V20l-3-2-3 2-3-2-3 2V6.5a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
      <path d="M9 9h6M9 12.5h6" strokeLinecap="round" />
    </>
  ),
  chat: (
    <>
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-7Z"
        strokeLinejoin="round"
      />
    </>
  ),
  notes: (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
      <path d="M8.5 8h7M8.5 11.5h7M8.5 15h4.5" strokeLinecap="round" />
    </>
  ),
  community: (
    <>
      <circle cx="8.5" cy="9" r="2.5" />
      <circle cx="16" cy="9.5" r="2" />
      <path d="M3.5 19c0-3 2.2-5 5-5s5 2 5 5M14.5 19c0-2.2 1.3-4 3.2-4.6" strokeLinecap="round" />
    </>
  ),
  skills: (
    <>
      <path d="M12 3v4M12 17v4M4.2 7.8l3 2M16.8 14.2l3 2M4.2 16.2l3-2M16.8 9.8l3-2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  check: (
    <path d="m5 12.5 4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "arrow-right": <path d="M4.5 12h15M13 5.5 19.5 12 13 18.5" strokeLinecap="round" strokeLinejoin="round" />,
};

export default function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
