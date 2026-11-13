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
  qualification,
  qualificationPolicy,
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
      <Qualification title={qualification.title} body={qualification.body} cta={qualification.cta} theme="light" />
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
      <Qualification
        title={qualificationPolicy.title}
        body={qualificationPolicy.body}
        cta={qualificationPolicy.cta}
        theme="light"
      />
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
      <Qualification title={qualification.title} body={qualification.body} cta={qualification.cta} theme="dark" />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
