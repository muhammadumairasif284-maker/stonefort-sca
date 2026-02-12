

import AboutHero from "@/components/about/AboutHero";
import AboutWhyChoose from "@/components/about/AboutWhyChoose";
import AboutIntegrity from "@/components/about/AboutIntegrity";
import AboutMissionVision from "@/components/about/AboutMissionVision";
import AboutExploreMarkets from "@/components/about/AboutExploreMarkets";
import AboutUpgradeExperience from "@/components/about/AboutUpgradeExperience";
import AboutExploreLinks from "@/components/about/AboutExploreLinks";
import AboutMoneyProtected from "@/components/about/AboutMoneyProtected";
import { GetStartedCTA } from "@/components/Home";

export const metadata = {
  title: "About | Stonefort Securities",
  description:
    "Learn about Stonefort Securities, a broker operating under a licence issued by the UAE Securities and Commodities Authority (SCA).",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutWhyChoose />
      <AboutIntegrity />
      <AboutMissionVision />
      <AboutExploreMarkets />
      <AboutUpgradeExperience />
      <AboutExploreLinks />
      <AboutMoneyProtected />
      <GetStartedCTA />

    </>
  );
}