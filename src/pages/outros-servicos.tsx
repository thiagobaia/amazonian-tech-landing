import React from 'react';
import { TrendingUp, Target, BarChart3, Users, CheckCircle, ArrowRight, Store, Megaphone, MapPin, Award } from 'lucide-react';

const OutrosServicos = () => {
    const servicosLocais = [
        {
            icon: <Store className="w-8 h-8 text-primary" />,
            title: "Tráfego para Negócios Locais",
            description: "Atraia clientes da sua região diretamente para sua loja física, clínica, restaurante ou prestadora de serviços através do Google Maps e redes sociais.",
        },
        {
            icon: <MapPin className="w-8 h-8 text-primary" />,
            title: "Google Meu Negócio & Campanhas Locais",
            description: "Otimize sua presença na sua cidade. Faça com que clientes encontrem sua empresa no momento exato em que estão buscando pelo que você vende.",
        },
        {
            icon: <Target className="w-8 h-8 text-primary" />,
            title: "Geração de Leads e Agendamentos",
            description: "Campanhas focadas em preencher sua agenda de atendimento, gerar orçamentos qualificados e aumentar as vendas no balcão ou WhatsApp.",
        },
    ];

    const servicosPoliticos = [
        {
            icon: <Megaphone className="w-8 h-8 text-emerald-light" />,
            title: "Campanhas Políticas e Eleitorais",
            description: "Estratégias de comunicação digital de alta performance em conformidade com a legislação eleitoral para maximizar a visibilidade do candidato.",
        },
        {
            icon: <Users className="w-8 h-8 text-emerald-light" />,
            title: "Construção de Autoridade & Provas de Apoio",
            description: "Divulgação de propostas, realizações e engajamento com a base de eleitores através de conteúdos direcionados por geolocalização e interesses.",
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-emerald-light" />,
            title: "Gestão de Crise & Monitoramento",
            description: "Análise de percepção pública, relatórios dinâmicos de impacto de campanha e ajustes rápidos de rota para otimizar o alcance político.",
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-roboto">
            {/* Header / Hero Section */}
            <section className="relative overflow-hidden py-24 sm:py-32 border-b border-border">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald/5 via-transparent to-transparent pointer-events-none" />
                <div className="section-container relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-medium text-sm mb-6 border border-border">
                        Estratégias de Alta Performance em Tráfego Pago
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
                        Tráfego Pago para <span className="text-primary">Negócios Locais</span> & <span className="text-emerald-light">Políticos</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-lg sm:text-xl mb-10">
                        Escale o faturamento do seu comércio na sua região ou impulsione sua campanha eleitoral com estratégias digitais validadas, focadas em conversão e autoridade.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#negocios-locais" className="btn-primary flex items-center gap-2">
                            Negócios Locais <ArrowRight className="w-5 h-5" />
                        </a>
                        <a href="#campanhas-politicas" className="btn-outline flex items-center gap-2">
                            Campanhas Políticas <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Seção 1: Negócios Locais */}
            <section id="negocios-locais" className="section-container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 text-primary font-semibold mb-2 uppercase tracking-wider text-sm">
                        <Store className="w-5 h-5" /> Crescimento Regional
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tráfego Focado em Negócios Locais</h2>
                    <p className="text-muted-foreground text-lg">
                        Pare de depender apenas do movimento da rua. Conecte sua empresa com clientes potenciais que estão na sua cidade e prontos para comprar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicosLocais.map((servico, index) => (
                        <div key={index} className="card-service flex flex-col justify-between">
                            <div>
                                <div className="p-4 bg-secondary w-fit rounded-xl mb-6 border border-border">
                                    {servico.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{servico.title}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {servico.description}
                                </p>
                            </div>
                            <ul className="space-y-2 pt-4 border-t border-border text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary" /> Clientes na sua região
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary" /> Aumento no WhatsApp/Loja
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Seção 2: Políticos e Campanhas Políticas */}
            <section id="campanhas-politicas" className="section-container bg-card/40 border-y border-border">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 text-emerald-light font-semibold mb-2 uppercase tracking-wider text-sm">
                        <Megaphone className="w-5 h-5" /> Eleições & Autoridade
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tráfego Pago para Políticos e Campanhas</h2>
                    <p className="text-muted-foreground text-lg">
                        Construa imagem, fortaleça sua base eleitoral e comunique suas propostas com precisão cirúrgica respeitando todas as normas legais.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicosPoliticos.map((servico, index) => (
                        <div key={index} className="card-service flex flex-col justify-between hover:border-emerald-light">
                            <div>
                                <div className="p-4 bg-secondary w-fit rounded-xl mb-6 border border-border">
                                    {servico.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{servico.title}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {servico.description}
                                </p>
                            </div>
                            <ul className="space-y-2 pt-4 border-t border-border text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-emerald-light" /> Conformidade legal
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-emerald-light" /> Segmentação por eleitorado
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Final */}
            <section className="section-container text-center">
                <div className="bg-gradient-to-r from-secondary via-card to-secondary border border-border p-10 sm:p-16 rounded-3xl relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Pronto para dominar sua região ou impulsionar sua campanha?</h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Entre em contato agora mesmo pelo WhatsApp e vamos estruturar a estratégia ideal para o seu negócio ou projeto político.
                        </p>
                        <a 
                            href="https://wa.me/5594992576989?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20tráfego%20pago." 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-primary inline-flex items-center gap-3 text-lg"
                        >
                            Falar com Especialista <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OutrosServicos;