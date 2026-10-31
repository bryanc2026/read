"use client";

import { useState } from "react";

type Props = {
  source: "apply" | "contact";
  includeBusinessFields?: boolean;
};

const inputClass =
  "w-full rounded-full border border-boom-black/15 bg-white px-5 py-3 text-sm text-boom-black placeholder:text-boom-black/40 focus:outline-none focus:ring-2 focus:ring-boom-black/30";
const labelClass = "mb-1.5 block text-sm font-semibold text-boom-black/70";

export default function ContactForm({ source, includeBusinessFields = false }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    const rawWebsiteUrl = String(data.get("websiteUrl") || "").trim();

    const payload = {
      source,
      fullName: String(data.get("fullName") || ""),
      email: String(data.get("email") || ""),
      yearlyRevenue: String(data.get("yearlyRevenue") || "") || undefined,
      teamSize: String(data.get("teamSize") || "") || undefined,
      websiteUrl: rawWebsiteUrl
        ? /^https?:\/\//i.test(rawWebsiteUrl)
          ? rawWebsiteUrl
          : `https://${rawWebsiteUrl}`
        : undefined,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="mx-auto mt-8 max-w-md rounded-2xl border border-boom-black/10 bg-white p-6 text-center text-sm leading-relaxed text-boom-black/70 shadow-card">
        Thank you for contacting us. We will get back to you as soon as possible.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 w-full max-w-md space-y-4">
      <div>
        <label htmlFor="fullName" className={labelClass}>
          Full name
        </label>
        <input id="fullName" name="fullName" type="text" required className={inputClass} />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>

      {includeBusinessFields && (
        <>
          <div>
            <label htmlFor="yearlyRevenue" className={labelClass}>
              Yearly Revenue
            </label>
            <input id="yearlyRevenue" name="yearlyRevenue" type="text" className={inputClass} />
          </div>

          <div>
            <label htmlFor="teamSize" className={labelClass}>
              Team Size
            </label>
            <input id="teamSize" name="teamSize" type="text" className={inputClass} />
          </div>

          <div>
            <label htmlFor="websiteUrl" className={labelClass}>
              Website URL
            </label>
            <input
              id="websiteUrl"
              name="websiteUrl"
              type="text"
              inputMode="url"
              placeholder="yourbrand.com.au"
              className={inputClass}
            />
          </div>
        </>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full disabled:opacity-60">
        {status === "loading" ? "Sending…" : "Submit"}
      </button>

      {status === "error" && (
        <p className="text-center text-sm font-medium text-rose-600">
          Oops, there was an error sending your message. Please try again later.
        </p>
      )}
    </form>
  );
}
