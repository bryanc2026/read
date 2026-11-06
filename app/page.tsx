import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Differentiators from "@/components/Differentiators";
import LogoWall from "@/components/LogoWall";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import WhatMakesDifferent from "@/components/WhatMakesDifferent";
import Coaches from "@/components/Coaches";
import Testimonials from "@/components/Testimonials";
import Qualification from "@/components/Qualification";
import PressAndPartners from "@/components/PressAndPartners";
import MemberSuccess from "@/components/MemberSuccess";
import OfficialPartners from "@/components/OfficialPartners";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import {
  workedWith,
  testimonialsSectionPrimary,
  testimonialsSectionSecondary,
  testimonialsListPrimary,
  testimonialsListSecondary,
} from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Differentiators />
      <Results />
      <Coaches />
      <LogoWall
        title={workedWith.title}
        subhead={workedWith.subhead}
        logos={workedWith.logos}
        logoImages={workedWith.logoImages}
        theme="dark"
      />
      <Testimonials
        id="reviews"
        title={testimonialsSectionPrimary.title}
        subhead={testimonialsSectionPrimary.subhead}
        testimonials={testimonialsListPrimary}
      />
      <Qualification />
      <PressAndPartners />
      <MemberSuccess />
      <OfficialPartners />
      <HowItWorks />
      <WhatMakesDifferent />
      <Testimonials
        title={testimonialsSectionSecondary.title}
        subhead={testimonialsSectionSecondary.subhead}
        testimonials={testimonialsListSecondary}
      />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
