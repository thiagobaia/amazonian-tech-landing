import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { contact } from "@/data/siteData";
import { Send, MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const { language } = useLanguage();
  const content = contact[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "5594992576989";
    const message = encodeURIComponent(
      `*Novo Contato do Site*\n\n` +
        `*Nome:* ${formData.name}\n` +
        `*E-mail:* ${formData.email}\n` +
        `*Telefone:* ${formData.phone}\n\n` +
        `*Mensagem:*\n${formData.message}`,
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {content.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {content.subtitle}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Localização</p>
                  <p className="font-medium">{content.info.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">E-mail</p>
                  <p className="font-medium">{content.info.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">
                    Telefone / WhatsApp
                  </p>
                  <p className="font-medium">{content.info.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={content.form.name}
                  required
                  className="w-full px-4 py-4 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={content.form.email}
                  required
                  className="w-full px-4 py-4 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={content.form.phone}
                  className="w-full px-4 py-4 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={content.form.message}
                  required
                  rows={4}
                  className="w-full px-4 py-4 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {content.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
