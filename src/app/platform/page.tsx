import PlatformHero from "@/components/platform/PlatformHero";
import PlatformTabs from "@/components/platform/PlatformTabs";
import TradeWithoutCompromise from "@/components/platform/TradeWithoutCompromise";
import PlatformConfidenceShowcase from "@/components/platform/PlatformConfidenceShowcase";
import InspireConfidence from "@/components/platform/InspireConfidence";
import StonefortLensBanner from "@/components/platform/StonefortLensBanner";
import AdvancedCharting from "@/components/platform/AdvancedCharting";
import ExecutionOutcomes from "@/components/platform/ExecutionOutcomes";
import MT5Spotlight from "@/components/platform/MT5Spotlight";
import PlatformFaq from "@/components/platform/platformFaq";

export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <PlatformTabs />
      <TradeWithoutCompromise />
      <PlatformConfidenceShowcase />
      <InspireConfidence />
      <StonefortLensBanner />
      <AdvancedCharting />
      <ExecutionOutcomes />
      <MT5Spotlight />
      <PlatformFaq />
    </>
  );
}