import PlatformHero from "@/components/platform/PlatformHero";
import PlatformTabs from "@/components/platform/PlatformTabs";
import TradeWithoutCompromise from "@/components/platform/TradeWithoutCompromise";

import InspireConfidence from "@/components/platform/InspireConfidence";
import StonefortLensBanner from "@/components/platform/StonefortLensBanner";
import AdvancedCharting from "@/components/platform/AdvancedCharting";

import MT5Spotlight from "@/components/platform/MT5Spotlight";
import PlatformFaq from "@/components/platform/platformFaq";
import GetStartedCTA from "@/components/contact/GetStartedCTA";

export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <PlatformTabs />
      <TradeWithoutCompromise />
      
      <InspireConfidence />
      <StonefortLensBanner />
      <AdvancedCharting />
      
      <MT5Spotlight />
      <PlatformFaq />
      <GetStartedCTA />
    </>
  );
}