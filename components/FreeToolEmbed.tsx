import type { FreeToolPage } from "@/lib/data";

export default function FreeToolEmbed({ title, src }: FreeToolPage) {
  return (
    <iframe
      src={src}
      title={title}
      className="block h-[calc(100vh-4rem)] w-full border-0 md:h-[calc(100vh-5rem)]"
    />
  );
}
