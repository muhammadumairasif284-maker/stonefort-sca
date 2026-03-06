import MarketHero from "@/components/Market/MarketHero";
import MarketFeatures from "@/components/Market/MarketFeatures";
import MarketCategories from "@/components/Market/MarketCategories"; 
import WhyCFDs from "@/components/Market/WhyCFDs";
import ReadyToTrade from "@/components/Market/ReadyToTrade";
import ForexFaq from "@/components/faq/ForexFaq";
import GetStartedCTA from "@/components/contact/GetStartedCTA";

export default function MarketPage() {
  return (
    <>
      <MarketHero />
      <MarketFeatures />
      <MarketCategories />
      <WhyCFDs />
      <ReadyToTrade />
      <ForexFaq />
      <GetStartedCTA />
    </>
  );
}