import { useLanguage } from "@/contexts/LanguageContext";
import { portfolio } from "@/data/siteData";
import { ExternalLink } from "lucide-react";

import grasshopperImg from "@/assets/portfolio/grass.png";
import rapidImg from "@/assets/portfolio/rapid.png";
import cadutallerImg from "@/assets/portfolio/cadu-taller.png";
import ambiexpressImg from "@/assets/portfolio/ambiexpress.png";
import topamImg from "@/assets/portfolio/topam.png";
import mastercreatorImg from "@/assets/portfolio/mastercreator.png";

const portfolioImages: Record<string, string> = {
  grasshopper: grasshopperImg,
  rapid: rapidImg,
  cadutaller: cadutallerImg,
  ambiexpress: ambiexpressImg,
  topam: topamImg,
  mastercreator: mastercreatorImg,
};

const PortfolioSection = () => {
  const { language } = useLanguage();
  const content = portfolio[language];

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
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

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={portfolioImages[item.image]}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white flex items-center gap-2 text-sm font-medium">
                    <ExternalLink size={16} />
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Projeto
                    </a>
                  </span>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-light">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
