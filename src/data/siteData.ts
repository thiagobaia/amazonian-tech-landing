// Site Data - All content organized by language

import { link } from "fs";

export type Language = "pt" | "es" | "en";

export const companyInfo = {
  name: "Master Creator",
  logo: "M",
};

export const navigation = {
  pt: [
    { name: "Início", href: "#hero" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Tráfego Pago", href: "/outros-servicos" },
    { name: "Contato", href: "#contato" },
    
  ],
  es: [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre Nosotros", href: "#sobre" },
    { name: "Servicios", href: "#servicos" },
    { name: "Portafolio", href: "#portfolio" },
    { name: "Tráfico Pagado", href: "/outros-servicos" },
    { name: "Contacto", href: "#contato" },
    
  ],
  en: [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#sobre" },
    { name: "Services", href: "#servicos" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Paid Traffic", href: "/outros-servicos" },
    { name: "Contact", href: "#contato" },
    
  ],
};

export const hero = {
  pt: {
    title: "Transforme Sua Ideia em",
    highlight: "Realidade Digital",
    subtitle:
      "Desenvolvemos sites, e-commerces e sistemas que impulsionam seu negócio. Soluções tecnológicas sob medida para restaurantes, hamburguerias, pizzarias e comércios.",
    cta: "Solicitar Orçamento",
    ctaSecondary: "Ver Serviços",
  },
  es: {
    title: "Transforma Tu Idea en",
    highlight: "Realidad Digital",
    subtitle:
      "Desarrollamos sitios web, e-commerces y sistemas que impulsan tu negocio. Soluciones tecnológicas a medida para restaurantes, hamburgueserías, pizzerías y comercios.",
    cta: "Solicitar Presupuesto",
    ctaSecondary: "Ver Servicios",
  },
  en: {
    title: "Transform Your Idea Into",
    highlight: "Digital Reality",
    subtitle:
      "We develop websites, e-commerces and systems that boost your business. Custom technology solutions for restaurants, burger shops, pizzerias and retail.",
    cta: "Request Quote",
    ctaSecondary: "View Services",
  },
};

export const about = {
  pt: {
    title: "Sobre Nós",
    subtitle: "Tecnologia Amazônica",
    description:
      "Somos uma empresa 100% brasileira, nascida no coração da Amazônia. Localizados em Tucuruí, Pará, na cidade que abriga a maior usina hidrelétrica 100% nacional do Brasil, carregamos a força e a inovação da nossa região em cada projeto.",
    description2:
      "Combinamos a energia renovável que nasce aqui com tecnologia de ponta para entregar soluções digitais que transformam negócios em todo o Brasil e América Latina.",
    stats: [
      { value: "100+", label: "Projetos Entregues" },
      { value: "50+", label: "Clientes Satisfeitos" },
      { value: "5+", label: "Anos de Experiência" },
      { value: "24/7", label: "Suporte Técnico" },
    ],
  },
  es: {
    title: "Sobre Nosotros",
    subtitle: "Tecnología Amazónica",
    description:
      "Somos una empresa 100% brasileña, nacida en el corazón de la Amazonía. Ubicados en Tucuruí, Pará, en la ciudad que alberga la mayor central hidroeléctrica 100% nacional de Brasil, llevamos la fuerza e innovación de nuestra región en cada proyecto.",
    description2:
      "Combinamos la energía renovable que nace aquí con tecnología de punta para entregar soluciones digitales que transforman negocios en todo Brasil y América Latina.",
    stats: [
      { value: "100+", label: "Proyectos Entregados" },
      { value: "50+", label: "Clientes Satisfechos" },
      { value: "5+", label: "Años de Experiencia" },
      { value: "24/7", label: "Soporte Técnico" },
    ],
  },
  en: {
    title: "About Us",
    subtitle: "Amazonian Technology",
    description:
      "We are a 100% Brazilian company, born in the heart of the Amazon. Located in Tucuruí, Pará, in the city that hosts Brazil's largest 100% national hydroelectric plant, we carry the strength and innovation of our region in every project.",
    description2:
      "We combine the renewable energy born here with cutting-edge technology to deliver digital solutions that transform businesses across Brazil and Latin America.",
    stats: [
      { value: "100+", label: "Projects Delivered" },
      { value: "50+", label: "Satisfied Clients" },
      { value: "5+", label: "Years of Experience" },
      { value: "24/7", label: "Technical Support" },
    ],
  },
};

export const services = {
  pt: {
    title: "Nossos Serviços",
    subtitle: "Soluções Completas para Seu Negócio",
    cta: "Fale Conosco",
    items: [
      {
        icon: "Globe",
        title: "Sites Institucionais",
        description:
          "Sites modernos, responsivos e otimizados para SEO que destacam sua marca no mercado digital.",
      },
      {
        icon: "ShoppingCart",
        title: "E-commerce",
        description:
          "Lojas virtuais completas com gestão de produtos, pagamentos integrados e experiência de compra otimizada.",
      },
      {
        icon: "UtensilsCrossed",
        title: "Cardápios Virtuais",
        description:
          "Cardápios digitais interativos com QR Code para restaurantes, bares e cafeterias.",
      },
      {
        icon: "Truck",
        title: "Sistema de Delivery",
        description:
          "Plataforma completa para hamburguerias, pizzarias, sushi e comércios com gestão de pedidos e entregas.",
      },
      {
        icon: "Code",
        title: "Software Sob Medida",
        description:
          "Desenvolvimento de sistemas personalizados para automatizar e otimizar processos do seu negócio.",
      },
      {
        icon: "Smartphone",
        title: "Aplicativos Mobile",
        description:
          "Apps nativos e híbridos para iOS e Android que conectam sua marca aos seus clientes.",
      },
    ],
    doubt: "Tem alguma dúvida sobre nossos serviços?",
  },
  es: {
    title: "Nuestros Servicios",
    subtitle: "Soluciones Completas para Tu Negocio",
    cta: "Contáctanos",
    items: [
      {
        icon: "Globe",
        title: "Sitios Institucionales",
        description:
          "Sitios modernos, responsivos y optimizados para SEO que destacan tu marca en el mercado digital.",
      },
      {
        icon: "ShoppingCart",
        title: "E-commerce",
        description:
          "Tiendas virtuales completas con gestión de productos, pagos integrados y experiencia de compra optimizada.",
      },
      {
        icon: "UtensilsCrossed",
        title: "Menús Virtuales",
        description:
          "Menús digitales interactivos con código QR para restaurantes, bares y cafeterías.",
      },
      {
        icon: "Truck",
        title: "Sistema de Delivery",
        description:
          "Plataforma completa para hamburgueserías, pizzerías, sushi y comercios con gestión de pedidos y entregas.",
      },
      {
        icon: "Code",
        title: "Software a Medida",
        description:
          "Desarrollo de sistemas personalizados para automatizar y optimizar los procesos de tu negocio.",
      },
      {
        icon: "Smartphone",
        title: "Aplicaciones Móviles",
        description:
          "Apps nativas e híbridas para iOS y Android que conectan tu marca con tus clientes.",
      },
    ],
    doubt: "¿Tienes alguna duda sobre nuestros servicios?",
  },
  en: {
    title: "Our Services",
    subtitle: "Complete Solutions for Your Business",
    cta: "Contact Us",
    items: [
      {
        icon: "Globe",
        title: "Institutional Websites",
        description:
          "Modern, responsive, SEO-optimized websites that highlight your brand in the digital market.",
      },
      {
        icon: "ShoppingCart",
        title: "E-commerce",
        description:
          "Complete online stores with product management, integrated payments and optimized shopping experience.",
      },
      {
        icon: "UtensilsCrossed",
        title: "Virtual Menus",
        description:
          "Interactive digital menus with QR Code for restaurants, bars and coffee shops.",
      },
      {
        icon: "Truck",
        title: "Delivery System",
        description:
          "Complete platform for burger shops, pizzerias, sushi and retail with order and delivery management.",
      },
      {
        icon: "Code",
        title: "Custom Software",
        description:
          "Development of personalized systems to automate and optimize your business processes.",
      },
      {
        icon: "Smartphone",
        title: "Mobile Applications",
        description:
          "Native and hybrid apps for iOS and Android that connect your brand to your customers.",
      },
    ],
    doubt: "Have any questions about our services?",
  },
};

export const contact = {
  pt: {
    title: "Entre em Contato",
    subtitle: "Vamos Conversar Sobre Seu Projeto",
    form: {
      name: "Seu Nome",
      email: "Seu E-mail",
      phone: "Seu Telefone",
      message: "Sua Mensagem",
      submit: "Enviar pelo WhatsApp",
    },
    info: {
      location: "Tucuruí, Pará - Brasil",
      email: "contact@mastercreator.tech",
      phone: "+55 94 99257-6989",
    },
  },
  es: {
    title: "Contáctanos",
    subtitle: "Hablemos Sobre Tu Proyecto",
    form: {
      name: "Tu Nombre",
      email: "Tu E-mail",
      phone: "Tu Teléfono",
      message: "Tu Mensaje",
      submit: "Enviar por WhatsApp",
    },
    info: {
      location: "Tucuruí, Pará - Brasil",
      email: "contact@mastercreator.tech",
      phone: "+55 94 99257-6989",
    },
  },
  en: {
    title: "Get in Touch",
    subtitle: "Let's Talk About Your Project",
    form: {
      name: "Your Name",
      email: "Your E-mail",
      phone: "Your Phone",
      message: "Your Message",
      submit: "Send via WhatsApp",
    },
    info: {
      location: "Tucuruí, Pará - Brazil",
      email: "contact@mastercreator.tech",
      phone: "+55 94 99257-6989",
    },
  },
};

export const footer = {
  pt: {
    company: "Master Creator",
    description:
      "Transformando ideias em soluções digitais desde o coração da Amazônia.",
    links: {
      services: "Serviços",
      portfolio: "Portfólio",
      privacy: "Política de Privacidade",
    },
    hours: {
      title: "Horário de Funcionamento",
      schedule: "Segunda a Sexta - 8h às 18h",
      open: "Aberto agora",
      closed: "Fechado agora",
    },
    rights: "Todos os direitos reservados.",
  },
  es: {
    company: "Master Creator",
    description:
      "Transformando ideas en soluciones digitales desde el corazón de la Amazonía.",
    links: {
      services: "Servicios",
      portfolio: "Portafolio",
      privacy: "Política de Privacidad",
    },
    hours: {
      title: "Horario de Funcionamiento",
      schedule: "Lunes a Viernes - 8h a 18h",
      open: "Abierto ahora",
      closed: "Cerrado ahora",
    },
    rights: "Todos los derechos reservados.",
  },
  en: {
    company: "Master Creator",
    description:
      "Transforming ideas into digital solutions from the heart of the Amazon.",
    links: {
      services: "Services",
      portfolio: "Portfolio",
      privacy: "Privacy Policy",
    },
    hours: {
      title: "Business Hours",
      schedule: "Monday to Friday - 8am to 6pm",
      open: "Open now",
      closed: "Closed now",
    },
    rights: "All rights reserved.",
  },
};

export const portfolio = {
  pt: {
    title: "Nosso Portfólio",
    subtitle: "Projetos que Transformaram Negócios",
    items: [
      {
        title: "Grasshopper Climbing",
        description: "Loja virtual para produto de alpinismo.",
        category: "E-commerce",
        image: "grasshopper",
        link: "https://grasshopperclimbing.com",
      },
      {
        title: "Rapid API",
        description:
          "Site para um dos sites com Maior hub de APIs públicas do mundo.",
        category: "Site Institucional",
        image: "rapid",
        link: "https://rapidapi.com",
      },
      {
        title: "Cadu Taller",
        description:
          "Site institucional para oficina mecânica com agendamento online e galeria de serviços.",
        category: "Site Institucional",
        image: "cadutaller",
        link: "https://cadutaller.com",
      },
      {
        title: "Ambiexpress",
        description: "Site empresa de gestão de residuos.",
        category: "Site Institucional",
        image: "ambiexpress",
        link: "https://ambiexpress.pt",
      },
      {
        title: "SPRT - Sindicato dos Produtores Rurais de Tucuruí",
        description:
          "Site institucional para o sindicato de produtores rurais de Tucuruí.",
        category: "Site Institucional",
        image: "sprt",
        link: "https://sprtucurui.com.br",
      },
      {
        title: "Master Creator",
        description:
          "Empresa de desenvolvimento de software e soluções digitais.",
        category: "Site Institucional",
        image: "mastercreator",
        link: "https://mastercreator.tech",
      },
    ],
  },
  es: {
    title: "Nuestro Portafolio",
    subtitle: "Proyectos que Transformaron Negocios",
    items: [
      {
        title: "Grasshopper Climbing",
        description: "Tienda online de productos de montañismo.",
        category: "E-commerce",
        image: "grasshopper",
        link: "https://grasshopperclimbing.com",
      },
      {
        title: "Rapid API",
        description:
          "Sitio web de uno de los centros de API públicos más grandes del mundo.",
        category: "Sitio Institucional",
        image: "rapid",
        link: "https://rapidapi.com",
      },
      {
        title: "Cadu Taller",
        description:
          "Sitio web institucional para taller mecánico con reservas online y galería de servicios.",
        category: "Sitio Institucional",
        image: "cadutaller",
        link: "https://cadutaller.com",
      },
      {
        title: "Ambiexpress",
        description: "Sitio web de una empresa de gestión de residuos.",
        category: "Sitio Institucional",
        image: "ambiexpress",
        link: "https://ambiexpress.pt",
      },
      {
        title: "SPRT - Unión de Productores Rurales de Tucuruí",

        description: "Sitio web institucional de la unión de productores rurales de Tucuruí",

        category: "Sitio web institucional",

        image: "sprt",

        link: "https://sprtucurui.com.br"
      },
      {
        title: "Master Creator",
        description:
          "Empresa de desarrollo de software y soluciones digitales.",
        category: "Sitio Institucional",
        image: "mastercreator",
        link: "https://mastercreator.tech",
      },
    ],
  },
  en: {
    title: "Our Portfolio",
    subtitle: "Projects that Transformed Businesses",
    items: [
      {
        title: "Grasshopper Climbing",
        description: "Online store for mountaineering products.",
        category: "E-commerce",
        image: "grasshopper",
        link: "https://grasshopperclimbing.com",
      },
      {
        title: "Rapid API",
        description: "Website for one of the world's largest public API hubs.",
        category: "Institutional Site",
        image: "rapid",
        link: "https://rapidapi.com",
      },
      {
        title: "Cadu Taller",
        description:
          "Institutional website for a mechanic shop with online booking and a service gallery.",
        category: "Institutional Site",
        image: "cadutaller",
        link: "https://cadutaller.com",
      },
      {
        title: "Ambiexpress",
        description: "Website of a waste management company.",
        category: "Institutional Site",
        image: "ambiexpress",
        link: "https://ambiexpress.pt",
      },
      {
        title: "SPRT - Tucuruí Rural Producers' Union",
        description:
          "Institutional website for the Tucuruí rural producers' union.",
        category: "Institutional Website",
        image: "sprt",
        link: "https://sprtucurui.com.br",
      },
      {
        title: "Master Creator",
        description: "Software development and digital solutions company.",
        category: "Institutional Site",
        image: "mastercreator",
        link: "https://mastercreator.tech",
      },
    ],
  },
};

export const languages = [
  { code: "pt" as Language, name: "Português", flag: "🇧🇷" },
  { code: "es" as Language, name: "Español", flag: "🇪🇸" },
  { code: "en" as Language, name: "English", flag: "🇺🇸" },
];
