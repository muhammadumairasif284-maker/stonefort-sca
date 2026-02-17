import ContactHero from "@/components/contact/ContactHero";
import ContactChannels from "@/components/contact/ContactChannels";
import ContactMapForm from "@/components/contact/ContactMapForm";
import GetStartedCTA from "@/components/contact/GetStartedCTA";

export default function ContactPage() {
  return (
    <>
        <ContactHero />
        <ContactChannels />
        <ContactMapForm />
        <GetStartedCTA />
    </>
  );
}