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
  alternates: { canonical: "/contact" },
  openGraph: { title, description },
};

export default function ContactPage() {
  return (
    <main>
      <Header />

      <section className="pt-10 md:pt-14">
        <div className="container-content pb-20 text-center md:pb-28">
          <span className="eyebrow">Contact</span>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-[2.4rem] font-extrabold leading-[1.06] tracking-tight md:text-5xl">
            Contact us
          </h1>

          <h2 className="mt-10 font-display text-xl font-bold">Contact Us</h2>
          <ContactForm source="contact" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
