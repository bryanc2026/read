import { metaMethodPage } from "@/lib/data";

export default function NoLockIn() {
  const { noLockIn } = metaMethodPage;

  return (
    <section className="bg-boom-cream pb-14 pt-6 md:pb-16 md:pt-8">
      <div className="container-content">
        <div className="mx-auto max-w-2xl rounded-2xl border border-boom-black/10 bg-white p-8 text-center shadow-card md:p-10">
          <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">{noLockIn.title}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-boom-black/65">{noLockIn.body}</p>
        </div>
      </div>
    </section>
  );
}
