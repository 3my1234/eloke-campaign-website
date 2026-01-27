import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { PossibilitiesSection } from "@/components/possibilities-section";
import { AboutSection } from "@/components/about-section";
import { PhilanthropySection } from "@/components/philanthropy-section";
import { NewsSection } from "@/components/news-section";
import { DonateSection } from "@/components/donate-section";
import { VolunteerSection } from "@/components/volunteer-section";
import { Footer } from "@/components/footer";
import { NewsletterModal } from "@/components/newsletter-modal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PossibilitiesSection />
      <AboutSection />
      <PhilanthropySection />
      <NewsSection />
      <DonateSection />
      <VolunteerSection />
      <Footer />
      <NewsletterModal />
    </main>
  );
}
