import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Coaches from "@/components/Coaches";
import AboutHero from "@/components/about/AboutHero";
import Values from "@/components/about/Values";

// Title/description inherit the site-wide default (matches the live site's
// identical metadata across every page, preserving existing SEO equity).
export const metadata: Metadata = {
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHero />
      <Values />
      <Coaches />
      <CTASection />
      <Footer />
    </main>
  );
}
