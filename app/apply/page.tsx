import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const title = "Ecommerce coaching, training and consulting";
const description =
  "You have or work in an eCommerce business, but want to know what is working for other eCommerce businesses in Australia and New Zealand. You also want to build hands on skills to grow the business. You're in the right place.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/apply" },
  openGraph: { title, description },
};

export default function ApplyPage() {
  return (
    <main>
      <Header />

      <section className="pt-10 md:pt-14">
        <div className="container-content pb-20 text-center md:pb-28">
          <span className="eyebrow">Apply</span>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-[2.4rem] font-extrabold leading-[1.06] tracking-tight md:text-5xl">
            Ready to take the next step?
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-boom-black/70">
            We&rsquo;re building the most profitable community of eCommerce businesses in Australia and New Zealand.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-boom-black/60">
            We want to make sure we can help and you&rsquo;re the right fit for our community. Send us some details
            and we&rsquo;ll organise a call to discuss if your brand is a good fit for Boom.
          </p>

          <h2 className="mt-12 font-display text-xl font-bold">Contact Us</h2>
          <ContactForm source="apply" includeBusinessFields />
        </div>
      </section>

      <Footer />
    </main>
  );
}
