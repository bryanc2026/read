import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import LogoWall from "@/components/LogoWall";
import MetaHero from "@/components/meta-method/MetaHero";
import ProblemAnswer from "@/components/meta-method/ProblemAnswer";
import CoachProfile from "@/components/meta-method/CoachProfile";
import MethodIntro from "@/components/meta-method/MethodIntro";
import Strategy from "@/components/meta-method/Strategy";
import MetaResults from "@/components/meta-method/MetaResults";
import CoachingSteps from "@/components/meta-method/CoachingSteps";
import Included from "@/components/meta-method/Included";
import WhatsDifferent from "@/components/meta-method/WhatsDifferent";
import MetaTestimonials from "@/components/meta-method/MetaTestimonials";
import NoLockIn from "@/components/meta-method/NoLockIn";
import MetaFAQ from "@/components/meta-method/MetaFAQ";
import { metaMethodPage } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Boom Meta Method | Boom",
  description:
    "A Meta Ads system that grows with you, not against you. The same repeatable method Boom uses with some of the most successful ecommerce brands in Australia and New Zealand.",
};

export default function BoomMetaMethodPage() {
  return (
    <main>
      <Header />
      <MetaHero />
      <ProblemAnswer />
      <CoachProfile />
      <MethodIntro />
      <Strategy />
      <MetaResults />
      <LogoWall
        title={metaMethodPage.partner.title}
        subhead={metaMethodPage.partner.subhead}
        logos={metaMethodPage.partner.logos}
        logoImages={metaMethodPage.partner.logoImages}
        theme="dark"
      />
      <CoachingSteps />
      <Included />
      <WhatsDifferent />
      <MetaTestimonials />
      <NoLockIn />
      <MetaFAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
