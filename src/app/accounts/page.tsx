// app/accounts/page.tsx
import HeroAccounts from "@/components/accounts/HeroAccounts";
import OneAccountSection from "@/components/accounts/OneAccountSection";
import AccountTiers from "@/components/accounts/AccountTiers";
import AccountTypesTier from "@/components/accounts/AccountTypesTier";
import LiveAccountFeatures from "@/components/accounts/LiveAccountFeatures";
import ExploreForexAccounts from "@/components/accounts/ExploreForexAccounts";

export const metadata = {
  title: "Account Types | Stonefort Securities",
  description:
    "Compare Standard, Access and Pro+ account types. Trade with an SCA-regulated UAE broker.",
};

export default function AccountsPage() {
  return (
    <>
      <HeroAccounts />
      <OneAccountSection />
      <AccountTiers />
      <AccountTypesTier />
      <LiveAccountFeatures />
      <ExploreForexAccounts />
    </>
  );
}