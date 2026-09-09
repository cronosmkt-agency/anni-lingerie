import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Stethoscope, Activity, ShieldCheck, HeartHandshake, Smile, Sparkles, CheckCircle2,
  Calendar, Clock, MapPin, Phone, MessageCircle, ChevronDown, Star, ArrowRight, Menu, X,
  Award, Car, Wrench, GraduationCap, ShoppingBag, Dumbbell, Flame, Send, Zap, KeyRound,
  Coffee, Compass, Check, AlertCircle, FileText
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: ClientLandingPage,
});

export default function ClientLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  // Simulator Form State
  const [name, setName] = useState("");
  const [selectedService, setSelectedService] = useState("Conjuntos Rendados & Bodies Sensuais");
  const [notes, setNotes] = useState("");

  const phone = "5521991270445";
  const phoneDisplay = "(21) 99127-0445";
  const address = "Galeria Teresópolis — R. Francisco Sá, 185 - Loja 19, Várzea, Teresópolis - RJ";
  const hours = "Segunda a Sábado das 09:00 às 19:00";

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Vim pelo site oficial e gostaria de mais informações e atendimento."
  )}`;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Vim pelo site oficial e gostaria de atendimento.

*Nome:* ${name || "Não informado"}
*Interesse / Serviço:* ${selectedService}
${notes ? `*Observações:* ${notes}` : ""}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const services = [["Conjuntos de Renda Sensual", "Sutiãs estruturados, calcinhas rendadas e corpetes para ocasiões especiais.", "Rendas"], ["Sleepwear & Robes Elegantes", "Pijamas de cetim fluido, camisolas e robes sofisticados para relaxar.", "Sleepwear"], ["Linha Conforto Dia a Dia", "Microfibra macia, sem costura e com suporte anatômico suave.", "Conforto"], ["Linha Noivas & Pós-Cirúrgica", "Peças brancas para enxoval de lua de mel e sutiãs de sustentação funcional.", "Especial"]];
  const features = [["Sparkles", "Rendas Nobres & Bodies", "Modelagens sensuais com aro e sustentação perfeita que realçam sua beleza."], ["HeartHandshake", "Atendimento Doce da Vivian", "Consultoras atenciosas e pacientes que cuidam de você com carinho."], ["Smile", "Linha Conforto Invisível", "Peças cortadas a laser que não marcam sob a roupa justa de trabalho."]];
  const testimonials = [["Taiana Costa", "Perfeita, amo todas as peças! Sempre que penso em lingerie nova, lembro de vocês. Atendimento perfeito, peças de qualidade, confortáveis e sensuais! Amoooo 🩷", 5], ["Danielle Gomes", "Gostaria de parabenizar a funcionária Vivian pela atenção, simpatia, paciência e carinho no atendimento às clientes!", 5], ["Cliente Google", "Com produtos de alta qualidade, preço ótimo e o atendimento nota mil ♥️! Indicarei a loja com certeza!", 5]];
  const stats = [["4,8 ★", "Avaliações no Google"], ["Loja 19", "Galeria Teresópolis"], ["100%", "Amor e Autoestima"]];
  const faq = [["Como saber meu tamanho ideal de sutiã?", "Nossa equipe orienta pelo WhatsApp com base nas suas medidas de busto e tórax, garantindo que você nunca mais use sutiã apertado."], ["A embalagem de entrega é discreta?", "Sim, todas as entregas por motoboy são enviadas em caixas ou envelopes lacrados sem identificação externa."], ["Onde fica a loja?", "Na Galeria Teresópolis — Rua Francisco Sá, 185, Loja 19, Várzea, Teresópolis."]];
  const simulatorOptions = ["Conjuntos Rendados & Bodies Sensuais", "Sleepwear / Pijamas de Seda & Robes", "Linha Conforto sem Costura / Dia a Dia", "Especial Noivas / Maternidade / Pós-Cirúrgico"];
  const reassuranceItems = [["Consultoria de Medidas", "Ajudamos você a descobrir o tamanho exato de sutiã para o seu corpo."], ["Rendas que Não Pinicam", "Tecidos macios de alto padrão que unem beleza ao conforto no dia a dia."], ["Entrega Discreta", "Envio em embalagem lacrada e sigilosa para toda Teresópolis."]];

  // Icon mapping
  const renderIcon = (name: string) => {
    switch (name) {
      case "Stethoscope": return <Stethoscope className="h-6 w-6" />;
      case "Activity": return <Activity className="h-6 w-6" />;
      case "ShieldCheck": return <ShieldCheck className="h-6 w-6" />;
      case "HeartHandshake": return <HeartHandshake className="h-6 w-6" />;
      case "Smile": return <Smile className="h-6 w-6" />;
      case "Sparkles": return <Sparkles className="h-6 w-6" />;
      case "Award": return <Award className="h-6 w-6" />;
      case "Car": return <Car className="h-6 w-6" />;
      case "Wrench": return <Wrench className="h-6 w-6" />;
      case "GraduationCap": return <GraduationCap className="h-6 w-6" />;
      case "ShoppingBag": return <ShoppingBag className="h-6 w-6" />;
      case "Dumbbell": return <Dumbbell className="h-6 w-6" />;
      case "Flame": return <Flame className="h-6 w-6" />;
      case "KeyRound": return <KeyRound className="h-6 w-6" />;
      case "Coffee": return <Coffee className="h-6 w-6" />;
      case "Compass": return <Compass className="h-6 w-6" />;
      case "Clock": return <Clock className="h-6 w-6" />;
      default: return <CheckCircle2 className="h-6 w-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F6] text-slate-900 selection:bg-slate-200">
      {/* 1. NAVBAR - ZERO EMOJIS */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-950 text-rose-200 border border-rose-800/60 shadow-md">
              {renderIcon("Sparkles")}
            </div>
            <div>
              <span className="block text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                Anni Lingerie
              </span>
              <span className="block text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Boutique de Lingerie Fina & Sleepwear
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#diferenciais" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              Diferenciais
            </a>
            <a href="#servicos" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              Serviços
            </a>
            <a href="#sobre" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              Sobre
            </a>
            <a href="#avaliacoes" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              Avaliações
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              Dúvidas
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              Consultar Tamanho Ideal no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground md:hidden"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-border bg-card px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#diferenciais" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-foreground">
                Diferenciais
              </a>
              <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-foreground">
                Serviços
              </a>
              <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-foreground">
                Sobre
              </a>
              <a href="#avaliacoes" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-foreground">
                Avaliações
              </a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-foreground">
                Dúvidas Frequentes
              </a>
              <a
                href={defaultWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                Fale no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Text Left */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold text-foreground">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ⭐ 4,8 com 16 Avaliações · Galeria Teresópolis (Loja 19) · Consultoria Íntima
              </div>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Lingeries que abraçam seu corpo com sensualidade, <span className="text-accent underline decoration-accent/30 underline-offset-8">delicadeza e conforto absoluto.</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Conjuntos de renda nobre, camisolas e robes de seda, linha conforto invisível que não marca e suporte carinhoso das consultoras na Galeria Teresópolis.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="h-5 w-5" />
                  Consultar Tamanho Ideal no WhatsApp
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-bold text-foreground transition-all hover:bg-secondary"
                >
                  Conhecer Nossos Serviços
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Social Proof Pill */}
              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="flex gap-1 text-amber-500">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    4.8 Estrelas · 4,8 Estrelas no Google
                  </p>
                  <p className="text-xs text-muted-foreground">16 avaliações · Amor e autoestima feminina</p>
                </div>
              </div>
            </div>

            {/* Reassurance Card Right */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
                <div className="flex items-center justify-between border-b border-border pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-950 text-rose-200 border border-rose-800/60">
                      {renderIcon("Sparkles")}
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-foreground">
                        Anni Lingerie Boutique
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        Galeria Teresópolis · Loja 19
                      </span>
                    </div>
                  </div>
                  <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">
                    Autoestima & Conforto
                  </span>
                </div>

                <div className="space-y-4 py-6">
                  {reassuranceItems.map(([title, desc]: [string, string], idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <p className="text-sm text-slate-700">
                        <strong className="text-foreground">{title}:</strong> {desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-border bg-secondary p-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Atendimento & Informações</p>
                      <p className="text-sm font-bold text-foreground">{phoneDisplay}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <section className="border-y border-slate-200 bg-slate-50/70 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {stats.map(([num, label]: [string, string], idx: number) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-3xl font-extrabold text-slate-900 sm:text-4xl">{num}</span>
                <span className="mt-1 text-sm font-medium text-slate-600">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PILARES / DIFERENCIAIS */}
      <section id="diferenciais" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Por que nos escolher
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              A Delicadeza Anni Lingerie
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {features.map(([iconName, title, desc]: [string, string, string], idx: number) => (
              <div key={idx} className="group rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-accent transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {renderIcon(iconName)}
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVIÇOS & ESPECIALIDADES */}
      <section id="servicos" className="border-t border-border bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Nossa Atuação
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Coleções Exclusivas
            </p>
            <p className="mt-4 text-base text-slate-600">
              Peças pensadas para valorizar você em todos os momentos
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, desc, tag]: [string, string, string], idx: number) => (
              <div key={idx} className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-lg">
                <div>
                  <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {tag}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(
                      `Olá! Gostaria de mais informações sobre: ${title}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:opacity-80"
                  >
                    Consultar Detalhes <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOBRE / O ESPAÇO - ZERO EMOJIS */}
      <section id="sobre" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-10 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-950 text-rose-200 border border-rose-800/60 shadow-xl">
                  {renderIcon("Sparkles")}
                </div>
                <h4 className="mt-5 text-2xl font-bold text-foreground">Anni Lingerie</h4>
                <p className="mt-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Moda Íntima & Sleepwear · Galeria Teresópolis
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 text-left">
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <p className="text-xs font-medium text-muted-foreground">Endereço Físico</p>
                    <p className="mt-1 text-xs font-bold text-foreground">{address}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <p className="text-xs font-medium text-muted-foreground">Horários de Atendimento</p>
                    <p className="mt-1 text-xs font-bold text-foreground">{hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <h2 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Conheça Nossa Estrutura
              </h2>
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Boutique na Galeria Teresópolis
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Localizada na Loja 19 da Galeria Teresópolis (Rua Francisco Sá, 185), a Anni Lingerie é o espaço onde a mulher encontra lingeries feitas para o corpo real, aliando elegância e bem-estar.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Nossas consultoras, com destaque para a Vivian, atendem com atenção aos detalhes para que você escolha as peças com total segurança e comodidade.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROVA SOCIAL / AVALIAÇÕES */}
      <section id="avaliacoes" className="bg-slate-50/70 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Depoimentos Reais
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              O Que Dizem Nossas Clientes
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(([name, text, stars]: [string, string, number], idx: number) => (
              <div key={idx} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 italic">
                    "{text}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-bold text-foreground">
                    {name.charAt(0)}
                  </div>
                  <span className="text-xs font-bold text-foreground">{name}</span>
                  <span className="text-xs text-muted-foreground">· Avaliação Google</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SIMULADOR INTERATIVO / AGENDAMENTO WHATSAPP */}
      <section id="contato" className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl sm:p-12">
            <div className="text-center">
              <span className="inline-block rounded-full bg-secondary px-4 py-1 text-xs font-semibold text-foreground">
                Atendimento Rápido
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl">
                Atendimento VIP no WhatsApp
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                Envie sua preferência de estilo para receber fotos das peças disponíveis:
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="mt-10 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground">Seu Nome Completo:</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground">
                  Estilo de Lingerie:
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                >
                  {simulatorOptions.map((opt: string, idx: number) => (
                    <option key={idx} value={opt} className="bg-card text-foreground">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground">Mensagem ou Dúvida (Opcional):</label>
                <textarea
                  rows={3}
                  placeholder="Descreva detalhes ou dúvidas para adiantar o atendimento..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-base font-bold text-primary-foreground shadow-xl transition-all hover:opacity-90 active:scale-95"
              >
                <Send className="h-5 w-5" />
                Falar com a Consultora no WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 9. FAQ SANFONADO */}
      <section id="faq" className="bg-slate-50/80 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Tire Suas Dúvidas
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Perguntas Frequentes
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faq.map(([q, a]: [string, string], idx: number) => (
              <div key={idx} className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition">
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left font-bold text-slate-900 hover:bg-slate-50/50"
                >
                  <span>{q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      faqOpen === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-slate-600">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOOTER - ZERO EMOJIS */}
      <footer className="border-t border-slate-200 bg-white py-12 text-slate-600">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-950 text-rose-200 border border-rose-800/60">
                  {renderIcon("Sparkles")}
                </div>
                <span className="text-lg font-bold text-slate-900">Anni Lingerie</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Lingerie fina de renda, sleepwear de seda, camisolas, sutiãs anatômicos e linha pós-cirúrgica com consultoria na Galeria Teresópolis.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">Endereço</h4>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{address}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">Horários</h4>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{hours}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">Contato Direto</h4>
              <p className="mt-3 text-xs text-muted-foreground">Telefone / WhatsApp:</p>
              <p className="text-sm font-bold text-foreground">{phoneDisplay}</p>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Anni Lingerie · Todos os direitos reservados · Desenvolvimento e Performance por Cronos Agency
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={defaultWhatsAppLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 transition-all hover:scale-110 active:scale-95"
        aria-label="WhatsApp direto"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
