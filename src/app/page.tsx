import { Hero } from "@/components/Home";
import { MetaBar } from "@/components/Home";
import { TrustedPlatforms } from "@/components/Home";
import { WhyChoose } from "@/components/Home";
import { ExperiencedTraders } from "@/components/Home";
import { CFDMarketsPro } from "@/components/Home";
import { BeginnerTradersSection } from "@/components/Home";
import { FlexibleTradingSolutions } from "@/components/Home";
import { RiskFreeDemoCta } from "@/components/Home";
import { PaymentGatewaysSlider } from "@/components/Home";
import { AccountsPlans } from "@/components/Home";
import { Steps3 } from "@/components/Home";
import { GetStartedCTA } from "@/components/Home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MetaBar />
      <TrustedPlatforms />
      <WhyChoose />
      <ExperiencedTraders />
      <CFDMarketsPro />
      <BeginnerTradersSection />
      <FlexibleTradingSolutions />
      <RiskFreeDemoCta />
      <PaymentGatewaysSlider />
      <AccountsPlans />
      <Steps3 />
       <GetStartedCTA />

    </>
  );
}