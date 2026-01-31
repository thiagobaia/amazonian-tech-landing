import { useLanguage } from '@/contexts/LanguageContext';
import { about } from '@/data/siteData';
import { MapPin, Zap } from 'lucide-react';

const AboutSection = () => {
  const { language } = useLanguage();
  const content = about[language];

  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="text-primary" size={24} />
              <span className="text-primary font-medium">{content.subtitle}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {content.title}
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {content.description}
            </p>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {content.description2}
            </p>

            <div className="flex items-center gap-2 text-primary">
              <MapPin size={20} />
              <span className="font-medium">Tucuruí, Pará - Amazônia Brasileira</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {content.stats.map((stat, index) => (
              <div
                key={index}
                className="card-service text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
