import Image from "next/image";
import { memberSuccess } from "@/lib/data";

export default function MemberSuccess() {
  return (
    <section className="border-t border-boom-black/10 bg-white py-14 md:py-20">
      <div className="container-content grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <span className="eyebrow">{memberSuccess.title}</span>
          <p className="mt-4 text-lg text-boom-black/70">{memberSuccess.body}</p>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-card">
          <Image
            src="/images/logos/shark-tank.png"
            alt="Shark Tank"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
