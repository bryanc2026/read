import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import SwitchHero from "@/components/switch/SwitchHero";
import PainPoints from "@/components/switch/PainPoints";
import { switchPage, testimonialsSectionPrimary, testimonialsListPrimary } from "@/lib/data";

export const metadata: Metadata = {
  title: "Coaching That Actually Fits | Boom",
  description: switchPage.hero.subhead,
};

export default function SwitchPage() {
  return (
    <main>
      <Header />
      <SwitchHero />
      <PainPoints />

      <section className="bg-boom-black py-14 text-white md:py-16">
        <div className="container-content mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
            {switchPage.cta.title}
          </h2>
          <p className="mt-4 text-white/70">{switchPage.cta.body}</p>
        </div>
      </section>

      <Testimonials
        title={testimonialsSectionPrimary.title}
        subhead={testimonialsSectionPrimary.subhead}
        testimonials={testimonialsListPrimary}
      />
      <CTASection />
      <Footer />
    </main>
  );
}
