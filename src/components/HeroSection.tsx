import { useLanguage } from '@/contexts/LanguageContext';
import { hero } from '@/data/siteData';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const { language } = useLanguage();
  const content = hero[language];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="gradient-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          {content.title}
          <br />
          <span className="text-primary">{content.highlight}</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {content.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => scrollToSection('#contato')}
            className="btn-primary flex items-center justify-center gap-2"
          >
            {content.cta}
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection('#servicos')}
            className="btn-outline flex items-center justify-center gap-2"
          >
            <Play size={20} />
            {content.ctaSecondary}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
