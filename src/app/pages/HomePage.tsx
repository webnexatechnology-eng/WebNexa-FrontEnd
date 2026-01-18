import { HeroSection } from '@/app/components/HeroSection';
import { AboutSection } from '@/app/components/AboutSection';
import { ServicesSection } from '@/app/components/ServicesSection';
import { WhyChooseSection } from '@/app/components/WhyChooseSection';
import { PortfolioSection } from '@/app/components/PortfolioSection';
import { TestimonialsSection } from '@/app/components/TestimonialsSection';
import { ContactSection } from '@/app/components/ContactSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
