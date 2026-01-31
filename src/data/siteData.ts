// Site Data - All content organized by language

export type Language = 'pt' | 'es' | 'en';

export const companyInfo = {
  name: 'Master Creator',
  logo: 'M',
};

export const navigation = {
  pt: [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contato' },
  ],
  es: [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Nosotros', href: '#sobre' },
    { name: 'Servicios', href: '#servicos' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Contacto', href: '#contato' },
  ],
  en: [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#sobre' },
    { name: 'Services', href: '#servicos' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contato' },
  ],
};

export const hero = {
  pt: {
    title: 'Transforme Sua Ideia em',
    highlight: 'Realidade Digital',
    subtitle: 'Desenvolvemos sites, e-commerces e sistemas que impulsionam seu negócio. Soluções tecnológicas sob medida para restaurantes, hamburguerias, pizzarias e comércios.',
    cta: 'Solicitar Orçamento',
    ctaSecondary: 'Ver Serviços',
  },
  es: {
    title: 'Transforma Tu Idea en',
    highlight: 'Realidad Digital',
    subtitle: 'Desarrollamos sitios web, e-commerces y sistemas que impulsan tu negocio. Soluciones tecnológicas a medida para restaurantes, hamburgueserías, pizzerías y comercios.',
    cta: 'Solicitar Presupuesto',
    ctaSecondary: 'Ver Servicios',
  },
  en: {
    title: 'Transform Your Idea Into',
    highlight: 'Digital Reality',
    subtitle: 'We develop websites, e-commerces and systems that boost your business. Custom technology solutions for restaurants, burger shops, pizzerias and retail.',
    cta: 'Request Quote',
    ctaSecondary: 'View Services',
  },
};

export const about = {
  pt: {
    title: 'Sobre Nós',
    subtitle: 'Tecnologia Amazônica',
    description: 'Somos uma empresa 100% brasileira, nascida no coração da Amazônia. Localizados em Tucuruí, Pará, na cidade que abriga a maior usina hidrelétrica 100% nacional do Brasil, carregamos a força e a inovação da nossa região em cada projeto.',
    description2: 'Combinamos a energia renovável que nasce aqui com tecnologia de ponta para entregar soluções digitais que transformam negócios em todo o Brasil e América Latina.',
    stats: [
      { value: '100+', label: 'Projetos Entregues' },
      { value: '50+', label: 'Clientes Satisfeitos' },
      { value: '5+', label: 'Anos de Experiência' },
      { value: '24/7', label: 'Suporte Técnico' },
    ],
  },
  es: {
    title: 'Sobre Nosotros',
    subtitle: 'Tecnología Amazónica',
    description: 'Somos una empresa 100% brasileña, nacida en el corazón de la Amazonía. Ubicados en Tucuruí, Pará, en la ciudad que alberga la mayor central hidroeléctrica 100% nacional de Brasil, llevamos la fuerza e innovación de nuestra región en cada proyecto.',
    description2: 'Combinamos la energía renovable que nace aquí con tecnología de punta para entregar soluciones digitales que transforman negocios en todo Brasil y América Latina.',
    stats: [
      { value: '100+', label: 'Proyectos Entregados' },
      { value: '50+', label: 'Clientes Satisfechos' },
      { value: '5+', label: 'Años de Experiencia' },
      { value: '24/7', label: 'Soporte Técnico' },
    ],
  },
  en: {
    title: 'About Us',
    subtitle: 'Amazonian Technology',
    description: 'We are a 100% Brazilian company, born in the heart of the Amazon. Located in Tucuruí, Pará, in the city that hosts Brazil\'s largest 100% national hydroelectric plant, we carry the strength and innovation of our region in every project.',
    description2: 'We combine the renewable energy born here with cutting-edge technology to deliver digital solutions that transform businesses across Brazil and Latin America.',
    stats: [
      { value: '100+', label: 'Projects Delivered' },
      { value: '50+', label: 'Satisfied Clients' },
      { value: '5+', label: 'Years of Experience' },
      { value: '24/7', label: 'Technical Support' },
    ],
  },
};

export const services = {
  pt: {
    title: 'Nossos Serviços',
    subtitle: 'Soluções Completas para Seu Negócio',
    cta: 'Fale Conosco',
    items: [
      {
        icon: 'Globe',
        title: 'Sites Institucionais',
        description: 'Sites modernos, responsivos e otimizados para SEO que destacam sua marca no mercado digital.',
      },
      {
        icon: 'ShoppingCart',
        title: 'E-commerce',
        description: 'Lojas virtuais completas com gestão de produtos, pagamentos integrados e experiência de compra otimizada.',
      },
      {
        icon: 'UtensilsCrossed',
        title: 'Cardápios Virtuais',
        description: 'Cardápios digitais interativos com QR Code para restaurantes, bares e cafeterias.',
      },
      {
        icon: 'Truck',
        title: 'Sistema de Delivery',
        description: 'Plataforma completa para hamburguerias, pizzarias, sushi e comércios com gestão de pedidos e entregas.',
      },
      {
        icon: 'Code',
        title: 'Software Sob Medida',
        description: 'Desenvolvimento de sistemas personalizados para automatizar e otimizar processos do seu negócio.',
      },
      {
        icon: 'Smartphone',
        title: 'Aplicativos Mobile',
        description: 'Apps nativos e híbridos para iOS e Android que conectam sua marca aos seus clientes.',
      },
    ],
    doubt: 'Tem alguma dúvida sobre nossos serviços?',
  },
  es: {
    title: 'Nuestros Servicios',
    subtitle: 'Soluciones Completas para Tu Negocio',
    cta: 'Contáctanos',
    items: [
      {
        icon: 'Globe',
        title: 'Sitios Institucionales',
        description: 'Sitios modernos, responsivos y optimizados para SEO que destacan tu marca en el mercado digital.',
      },
      {
        icon: 'ShoppingCart',
        title: 'E-commerce',
        description: 'Tiendas virtuales completas con gestión de productos, pagos integrados y experiencia de compra optimizada.',
      },
      {
        icon: 'UtensilsCrossed',
        title: 'Menús Virtuales',
        description: 'Menús digitales interactivos con código QR para restaurantes, bares y cafeterías.',
      },
      {
        icon: 'Truck',
        title: 'Sistema de Delivery',
        description: 'Plataforma completa para hamburgueserías, pizzerías, sushi y comercios con gestión de pedidos y entregas.',
      },
      {
        icon: 'Code',
        title: 'Software a Medida',
        description: 'Desarrollo de sistemas personalizados para automatizar y optimizar los procesos de tu negocio.',
      },
      {
        icon: 'Smartphone',
        title: 'Aplicaciones Móviles',
        description: 'Apps nativas e híbridas para iOS y Android que conectan tu marca con tus clientes.',
      },
    ],
    doubt: '¿Tienes alguna duda sobre nuestros servicios?',
  },
  en: {
    title: 'Our Services',
    subtitle: 'Complete Solutions for Your Business',
    cta: 'Contact Us',
    items: [
      {
        icon: 'Globe',
        title: 'Institutional Websites',
        description: 'Modern, responsive, SEO-optimized websites that highlight your brand in the digital market.',
      },
      {
        icon: 'ShoppingCart',
        title: 'E-commerce',
        description: 'Complete online stores with product management, integrated payments and optimized shopping experience.',
      },
      {
        icon: 'UtensilsCrossed',
        title: 'Virtual Menus',
        description: 'Interactive digital menus with QR Code for restaurants, bars and coffee shops.',
      },
      {
        icon: 'Truck',
        title: 'Delivery System',
        description: 'Complete platform for burger shops, pizzerias, sushi and retail with order and delivery management.',
      },
      {
        icon: 'Code',
        title: 'Custom Software',
        description: 'Development of personalized systems to automate and optimize your business processes.',
      },
      {
        icon: 'Smartphone',
        title: 'Mobile Applications',
        description: 'Native and hybrid apps for iOS and Android that connect your brand to your customers.',
      },
    ],
    doubt: 'Have any questions about our services?',
  },
};

export const contact = {
  pt: {
    title: 'Entre em Contato',
    subtitle: 'Vamos Conversar Sobre Seu Projeto',
    form: {
      name: 'Seu Nome',
      email: 'Seu E-mail',
      phone: 'Seu Telefone',
      message: 'Sua Mensagem',
      submit: 'Enviar pelo WhatsApp',
    },
    info: {
      location: 'Tucuruí, Pará - Brasil',
      email: 'contato@suaagencia.com.br',
      phone: '+55 94 99257-6989',
    },
  },
  es: {
    title: 'Contáctanos',
    subtitle: 'Hablemos Sobre Tu Proyecto',
    form: {
      name: 'Tu Nombre',
      email: 'Tu E-mail',
      phone: 'Tu Teléfono',
      message: 'Tu Mensaje',
      submit: 'Enviar por WhatsApp',
    },
    info: {
      location: 'Tucuruí, Pará - Brasil',
      email: 'contato@suaagencia.com.br',
      phone: '+55 94 99257-6989',
    },
  },
  en: {
    title: 'Get in Touch',
    subtitle: 'Let\'s Talk About Your Project',
    form: {
      name: 'Your Name',
      email: 'Your E-mail',
      phone: 'Your Phone',
      message: 'Your Message',
      submit: 'Send via WhatsApp',
    },
    info: {
      location: 'Tucuruí, Pará - Brazil',
      email: 'contato@suaagencia.com.br',
      phone: '+55 94 99257-6989',
    },
  },
};

export const footer = {
  pt: {
    company: 'Master Creator',
    description: 'Transformando ideias em soluções digitais desde o coração da Amazônia.',
    links: {
      services: 'Serviços',
      portfolio: 'Portfólio',
      privacy: 'Política de Privacidade',
    },
    hours: {
      title: 'Horário de Funcionamento',
      schedule: 'Segunda a Sexta - 8h às 18h',
      open: 'Aberto agora',
      closed: 'Fechado agora',
    },
    rights: 'Todos os direitos reservados.',
  },
  es: {
    company: 'Master Creator',
    description: 'Transformando ideas en soluciones digitales desde el corazón de la Amazonía.',
    links: {
      services: 'Servicios',
      portfolio: 'Portafolio',
      privacy: 'Política de Privacidad',
    },
    hours: {
      title: 'Horario de Funcionamiento',
      schedule: 'Lunes a Viernes - 8h a 18h',
      open: 'Abierto ahora',
      closed: 'Cerrado ahora',
    },
    rights: 'Todos los derechos reservados.',
  },
  en: {
    company: 'Master Creator',
    description: 'Transforming ideas into digital solutions from the heart of the Amazon.',
    links: {
      services: 'Services',
      portfolio: 'Portfolio',
      privacy: 'Privacy Policy',
    },
    hours: {
      title: 'Business Hours',
      schedule: 'Monday to Friday - 8am to 6pm',
      open: 'Open now',
      closed: 'Closed now',
    },
    rights: 'All rights reserved.',
  },
};

export const portfolio = {
  pt: {
    title: 'Nosso Portfólio',
    subtitle: 'Projetos que Transformaram Negócios',
    items: [
      {
        title: 'Burger House Delivery',
        description: 'Sistema completo de delivery para hamburgueria com gestão de pedidos em tempo real e cardápio digital interativo.',
        category: 'Delivery',
        image: 'burger',
      },
      {
        title: 'Pizza Express',
        description: 'Plataforma de pedidos online para pizzaria com personalização de pizzas e rastreamento de entregas.',
        category: 'Delivery',
        image: 'pizza',
      },
      {
        title: 'Sushi Master',
        description: 'Cardápio virtual elegante para restaurante japonês com sistema de reservas e pedidos online.',
        category: 'Cardápio Virtual',
        image: 'sushi',
      },
      {
        title: 'TechStore',
        description: 'E-commerce completo para loja de eletrônicos com integração de pagamentos e gestão de estoque.',
        category: 'E-commerce',
        image: 'ecommerce',
      },
      {
        title: 'Clínica Saúde+',
        description: 'Site institucional para clínica médica com agendamento online e área do paciente.',
        category: 'Site Institucional',
        image: 'clinic',
      },
      {
        title: 'Amazônia Eco Tours',
        description: 'Plataforma de turismo ecológico com reservas de passeios e integração com guias locais.',
        category: 'E-commerce',
        image: 'tourism',
      },
    ],
  },
  es: {
    title: 'Nuestro Portafolio',
    subtitle: 'Proyectos que Transformaron Negocios',
    items: [
      {
        title: 'Burger House Delivery',
        description: 'Sistema completo de delivery para hamburguesería con gestión de pedidos en tiempo real y menú digital interactivo.',
        category: 'Delivery',
        image: 'burger',
      },
      {
        title: 'Pizza Express',
        description: 'Plataforma de pedidos online para pizzería con personalización de pizzas y seguimiento de entregas.',
        category: 'Delivery',
        image: 'pizza',
      },
      {
        title: 'Sushi Master',
        description: 'Menú virtual elegante para restaurante japonés con sistema de reservas y pedidos online.',
        category: 'Menú Virtual',
        image: 'sushi',
      },
      {
        title: 'TechStore',
        description: 'E-commerce completo para tienda de electrónicos con integración de pagos y gestión de inventario.',
        category: 'E-commerce',
        image: 'ecommerce',
      },
      {
        title: 'Clínica Salud+',
        description: 'Sitio institucional para clínica médica con programación online y área del paciente.',
        category: 'Sitio Institucional',
        image: 'clinic',
      },
      {
        title: 'Amazônia Eco Tours',
        description: 'Plataforma de turismo ecológico con reservas de tours e integración con guías locales.',
        category: 'E-commerce',
        image: 'tourism',
      },
    ],
  },
  en: {
    title: 'Our Portfolio',
    subtitle: 'Projects that Transformed Businesses',
    items: [
      {
        title: 'Burger House Delivery',
        description: 'Complete delivery system for burger shop with real-time order management and interactive digital menu.',
        category: 'Delivery',
        image: 'burger',
      },
      {
        title: 'Pizza Express',
        description: 'Online ordering platform for pizzeria with pizza customization and delivery tracking.',
        category: 'Delivery',
        image: 'pizza',
      },
      {
        title: 'Sushi Master',
        description: 'Elegant virtual menu for Japanese restaurant with reservation system and online ordering.',
        category: 'Virtual Menu',
        image: 'sushi',
      },
      {
        title: 'TechStore',
        description: 'Complete e-commerce for electronics store with payment integration and inventory management.',
        category: 'E-commerce',
        image: 'ecommerce',
      },
      {
        title: 'Health+ Clinic',
        description: 'Institutional website for medical clinic with online scheduling and patient area.',
        category: 'Institutional Site',
        image: 'clinic',
      },
      {
        title: 'Amazônia Eco Tours',
        description: 'Ecological tourism platform with tour reservations and integration with local guides.',
        category: 'E-commerce',
        image: 'tourism',
      },
    ],
  },
};

export const languages = [
  { code: 'pt' as Language, name: 'Português', flag: '🇧🇷' },
  { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
];
