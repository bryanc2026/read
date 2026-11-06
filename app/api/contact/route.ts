import { NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENTS = ["iain@boomecommerce.com.au", "bryan@vavavoomdigital.com"];

type ContactPayload = {
  source?: "apply" | "contact";
  fullName?: string;
  email?: string;
  yearlyRevenue?: string;
  teamSize?: string;
  websiteUrl?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const { source, fullName, email, yearlyRevenue, teamSize, websiteUrl } = payload;

  if (!fullName || !email) {
    return NextResponse.json({ error: "Full name and email are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — form submission was not sent.");
    return NextResponse.json(
      { error: "Email delivery isn't configured yet. Please contact us directly at iain@boomecommerce.com.au." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const label = source === "apply" ? "Apply" : "Contact";

  const rows: Array<[string, string]> = [
    ["Full name", fullName],
    ["Email", email],
    ...(yearlyRevenue ? ([["Yearly Revenue", yearlyRevenue]] as [string, string][]) : []),
    ...(teamSize ? ([["Team Size", teamSize]] as [string, string][]) : []),
    ...(websiteUrl ? ([["Website URL", websiteUrl]] as [string, string][]) : []),
  ];
  const html = rows.map(([field, value]) => `<p><strong>${field}:</strong> ${value}</p>`).join("");

  try {
    const { data, error } = await resend.emails.send({
      from: "Boom Website <onboarding@resend.dev>",
      to: RECIPIENTS,
      replyTo: email,
      subject: `New ${label} form submission — ${fullName}`,
      html,
    });

    if (error) {
      console.error("Resend rejected the form email:", error);
      return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
    }

    console.log("Form email accepted by Resend:", data?.id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send form email:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  }
}
