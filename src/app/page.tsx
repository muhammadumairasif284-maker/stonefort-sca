

import AboutHero from "@/components/about/AboutHero";
import { TrustedPlatforms } from "@/components/product";
import AboutWhyChoose from "@/components/about/AboutWhyChoose";
import AboutIntegrity from "@/components/about/AboutIntegrity";
import AboutMissionVision from "@/components/about/AboutMissionVision";
import AboutExploreMarkets from "@/components/about/AboutExploreMarkets";


import AboutMoneyProtected from "@/components/about/AboutMoneyProtected";
import { GetStartedCTA } from "@/components/product";
import RelationshipSection from "@/components/about/RelationshipSection";

export const metadata = {
  title: "Stonefort Securities",
  description:
    "Learn about Stonefort Securities, a broker operating under a licence issued by the UAE Capital Market Authority (CMA).",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
            <TrustedPlatforms />
      <AboutWhyChoose />
      <AboutIntegrity />
      <AboutMissionVision />
      <AboutExploreMarkets />
      <RelationshipSection />
   

      <AboutMoneyProtected />
      <GetStartedCTA />
    </>
  );
}