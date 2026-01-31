import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { footer, companyInfo } from '@/data/siteData';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();
  const content = footer[language];
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const day = now.getDay();
      const hours = now.getHours();
      
      // Monday (1) to Friday (5), 8am to 6pm
      const isWeekday = day >= 1 && day <= 5;
      const isBusinessHour = hours >= 8 && hours < 18;
      
      setIsOpen(isWeekday && isBusinessHour);
    };

    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl italic">{companyInfo.logo}</span>
              </div>
              <span className="text-xl font-bold">
                {companyInfo.name}
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm">
              {content.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  {content.links.services}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {content.links.privacy}
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Instagram size={18} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-bold mb-4">{content.hours.title}</h4>
            <p className="text-muted-foreground mb-3">{content.hours.schedule}</p>
            <div className="flex items-center gap-2">
              <div className={`status-indicator ${isOpen ? 'status-open' : 'status-closed'}`} />
              <span className={isOpen ? 'text-green-500' : 'text-red-500'}>
                {isOpen ? content.hours.open : content.hours.closed}
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} {content.company}. {content.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
