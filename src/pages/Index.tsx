import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
