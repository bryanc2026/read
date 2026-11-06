import { memberSuccess } from "@/lib/data";

export default function MemberSuccess() {
  return (
    <section className="border-t border-boom-black/10 bg-boom-gray-50 pb-14 pt-8 md:pb-20 md:pt-12">
      <div className="container-content">
        <div className="mx-auto max-w-2xl rounded-2xl border border-boom-black/10 bg-white p-8 text-center shadow-card">
          <span className="eyebrow">{memberSuccess.title}</span>
          <p className="mt-3 text-lg text-boom-black/70">{memberSuccess.body}</p>
        </div>
      </div>
    </section>
  );
}
