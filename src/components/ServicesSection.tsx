import { useLanguage } from '@/contexts/LanguageContext';
import { services } from '@/data/siteData';
import { Globe, ShoppingCart, UtensilsCrossed, Truck, Code, Smartphone, MessageCircle, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  ShoppingCart,
  UtensilsCrossed,
  Truck,
  Code,
  Smartphone,
};

const ServicesSection = () => {
  const { language } = useLanguage();
  const content = services[language];

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-20">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {content.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {content.items.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={index}
                className="card-service group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  {IconComponent && <IconComponent size={28} className="text-primary" />}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center bg-card border border-border rounded-2xl p-8">
          <p className="text-lg mb-6">{content.doubt}</p>
          <button
            onClick={scrollToContact}
            className="btn-primary inline-flex items-center gap-2"
          >
            <MessageCircle size={20} />
            {content.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
