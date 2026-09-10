import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Star,
  Sparkles,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Send,
  Heart,
  PackageCheck,
  ShieldCheck,
  RotateCcw,
  Navigation,
  Eye,
  Check
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: AnniLingeriePage,
});

export default function AnniLingeriePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategoryTab, setActiveCategoryTab] = useState("rendas");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  // Form State
  const [customerName, setCustomerName] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("Conjuntos de Renda Sensual & Bodies");
  const [selectedSize, setSelectedSize] = useState("Tamanho M (42) / Calcinha M");
  const [deliveryMode, setDeliveryMode] = useState("Entrega Discreta em Domicílio (Teresópolis)");
  const [customerNotes, setCustomerNotes] = useState("");

  const phone = "5521991270445";
  const phoneDisplay = "(21) 99127-0445";
  const address = "Galeria Teresópolis — R. Francisco Sá, 185 - Loja 19 - Várzea, Teresópolis - RJ, 25953-011";
  const hours = "Segunda a Sábado: 09:00 às 19:00";

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Vim pelo site oficial da Anni Lingerie e gostaria de consultoria para escolher minhas peças."
  )}`;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, equipe da Anni Lingerie! Vim pelo site oficial e gostaria de atendimento:

*Nome:* ${customerName || "Não informado"}
*Estilo / Linha:* ${selectedStyle}
*Tamanho Aproximado:* ${selectedSize}
*Modalidade:* ${deliveryMode}
${customerNotes ? `*Preferência / Peça:* ${customerNotes}` : ""}

Poderiam me enviar fotos e opções disponíveis com as medidas?`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  // Coleções em Destaque
  const collectionsData = {
    rendas: {
      label: "Rendas & Noites Especiais",
      badge: "Sensualidade Sofisticada",
      description: "Conjuntos rendados com modelagem anatômica que valorizam o decote natural sem apertar nem machucar as costelas.",
      items: [
        {
          name: "Conjunto Rendado Boudoir com Aro",
          tag: "Mais Amado",
          highlight: "Sustentação Delicada",
          desc: "Renda floral francesa macia com forro suave em algodão e calcinha rendada de laterais confortáveis.",
          benefit: "Sem bojo de espuma dura, realce natural do busto."
        },
        {
          name: "Body Sensual All-Lace com Decote V",
          tag: "Alta Costura",
          highlight: "Versatilidade Única",
          desc: "Perfeito para noites a dois ou para compor looks modernos sob blazers e camisas sociais de alfaiataria.",
          benefit: "Fecho inferior triplo e alças reguláveis."
        },
        {
          name: "Corpete Estruturado Rendado",
          tag: "Edição Especial",
          highlight: "Cintura Definida",
          desc: "Barbatana flexível e tecido que desenha a silhueta com extremo conforto e zero incômodo ao sentar.",
          benefit: "Fechamento regulável com múltiplos níveis."
        },
        {
          name: "Conjunto Strappy Romance",
          tag: "Destaque Visual",
          highlight: "Tiras Geométricas",
          desc: "Tiras macias que emolduram o decote e a cintura com sofisticação moderna e sensualidade sutil.",
          benefit: "Elásticos aveludados que não marcam a pele."
        }
      ]
    },
    conforto: {
      label: "Conforto Invisível (Sem Costura)",
      badge: "O Queridinho do Dia a Dia",
      description: "Esqueça a sensação incômoda de sutiã apertando no trabalho. Peças leves como uma pluma cortadas a laser.",
      items: [
        {
          name: "Calcinha Corte a Laser Invisível",
          tag: "Líder de Vendas",
          highlight: "Zero Marcas na Roupa",
          desc: "Invisível sob leggings de academia, vestidos finos e calças sociais justas. Aderência macia e forro 100% algodão.",
          benefit: "Kits de 3, 5 ou 10 unidades com valor especial."
        },
        {
          name: "Sutiã Anatômico Sem Aro Soft Touch",
          tag: "Conforto Máximo",
          highlight: "Acabou o Aro Doloroso",
          desc: "Tecnologia de moldagem térmica que sustenta o busto sem nenhuma estrutura de metal rígida.",
          benefit: "Laterais largas que suavizam marcas laterais."
        },
        {
          name: "Top Conforto em Modal Sustentável",
          tag: "Toque Pele Sobre Pele",
          highlight: "Super Transpirável",
          desc: "Fibra vegetal modal que absorve o calor e garante frescor ao longo de jornadas inteiras de trabalho.",
          benefit: "Ideal para usar em casa ou no trabalho."
        },
        {
          name: "Conjunto Segunda Pele Ultrafina",
          tag: "Segurança Diária",
          highlight: "Camuflagem Perfeita",
          desc: "Cores nude e tons de pele pensados para roupas brancas ou transparentes sem deixar sombras visíveis.",
          benefit: "Elasticidade 360 graus que se molda ao corpo."
        }
      ]
    },
    sleepwear: {
      label: "Sleepwear & Robes de Seda",
      badge: "Noites com Puro Glamour",
      description: "Pijamas fluidos, camisolas rendadas e robes elegantes para você se sentir deslumbrante e relaxada em casa.",
      items: [
        {
          name: "Pijama Curto em Cetim Acetinado",
          tag: "Suavidade Pura",
          highlight: "Toque Frio Confortável",
          desc: "Camisa de botão com vivos elegantes e shorts com cós suave que não aperta a cintura durante o sono.",
          benefit: "Tecido que não amassa fácil e caimento fluido."
        },
        {
          name: "Camisola Longa Slipdress com Renda",
          tag: "Romance Noturno",
          highlight: "Fenda Lateral Suave",
          desc: "Decote com recorte de renda delicada, alças finas reguláveis e drapeado gracioso que acompanha seus passos.",
          benefit: "Sensação sedosa e frescor aveludado."
        },
        {
          name: "Robe Midi com Amarração & Mangas Flare",
          tag: "Elegância Clássica",
          highlight: "Peça Coringa",
          desc: "A peça que transforma seu momento de autocuidado, maquiagem ou café da manhã em um momento especial.",
          benefit: "Faixa de amarração dupla que não escorrega."
        },
        {
          name: "Conjunto Pijama Calça Longa Soft",
          tag: "Inverno Serrano",
          highlight: "Aconchego na Serra",
          desc: "Perfeito para as noites frescas de Teresópolis, unindo elegância à proteção térmica sem perder a feminilidade.",
          benefit: "Modelagem pensada para o clima serrano."
        }
      ]
    },
    noivas: {
      label: "Noivas & Lua de Mel (Bridal)",
      badge: "O Enxoval dos Sonhos",
      description: "Peças brancas e off-white em rendas exclusivas para o dia do casamento, making of, noite de núpcias e mala de viagem.",
      items: [
        {
          name: "Conjunto Noiva Núpcias em Renda Branca",
          tag: "Bridal Exclusive",
          highlight: "Detalhes em Pérola",
          desc: "Sutiã rendado com bojo suave anatômico, calcinha de renda nobre e cinta-liga com meias opcionais.",
          benefit: "Caixa presente especial com laço de cetim."
        },
        {
          name: "Robe de Noiva para Making Of",
          tag: "Fotografia Impecável",
          highlight: "Bordado Personalizado",
          desc: "Manga ampla com aplicações de renda delicada, perfeito para fotos inesquecíveis nos preparativos com as madrinhas.",
          benefit: "Não amassa e veste com facilidade sobre o penteado."
        },
        {
          name: "Body Bridal Rendado Off-White",
          tag: "Desejo Puro",
          highlight: "Transparências Sutis",
          desc: "Peça impactante para a lua de mel com decote profundo e recortes estratégicos de renda guipure.",
          benefit: "Toque extremamente macio na pele."
        },
        {
          name: "Kit Completo Chá de Lingerie",
          tag: "Assessoria Completa",
          highlight: "Lista de Presentes",
          desc: "Monte sua lista com as consultoras da Anni Lingerie para suas amigas escolherem as peças certas sem errar.",
          benefit: "Troca fácil garantida na loja da Galeria."
        }
      ]
    },
    funcional: {
      label: "Pós-Cirúrgico & Maternidade",
      badge: "Cuidado & Acolhimento",
      description: "Recuperação segura e sustentação técnica sem abrir mão do toque feminino, com recomendação de cirurgiões plásticos.",
      items: [
        {
          name: "Sutiã Pós-Cirúrgico de Alta Sustentação",
          tag: "Recomendação Médica",
          highlight: "Abertura Frontal Dupla",
          desc: "Costuras externas para não irritar cicatrizes, fecho por colchetes frontais de 2 níveis e faixa estabilizadora.",
          benefit: "Compressão uniforme para prótese de silicone e mastopexia."
        },
        {
          name: "Sutiã de Amamentação Click Prático",
          tag: "Maternidade Serena",
          highlight: "Abertura com 1 Mão",
          desc: "Fecho magnético ou click rápido que permite amamentar sem complicação, com tecido que acomoda as mudanças de volume.",
          benefit: "Alças reforçadas e forro 100% puro algodão."
        },
        {
          name: "Robe Maternidade Conforto & Visitas",
          tag: "Praticidade Hospitalar",
          highlight: "Acesso Rápido ao Seio",
          desc: "Desenvolvido para receber visitas na maternidade ou curtir os primeiros dias do bebê com conforto e postura elegante.",
          benefit: "Comprimento ideal para o ambiente hospitalar."
        },
        {
          name: "Cinta Modeladora Pós-Parto Anatômica",
          tag: "Apoio Abdominal",
          highlight: "Segurança nos Movimentos",
          desc: "Ajuda na retração da musculatura abdominal e alivia o peso lombar nas primeiras semanas pós-parto.",
          benefit: "Fecho lateral com reforço respirável."
        }
      ]
    }
  };

  const boutiqueDifferentiators = [
    {
      icon: Eye,
      title: "O Fim do Sutiã Errado",
      desc: "Mais de 80% das mulheres usam o tamanho incorreto. Nossa consultoria ajuda a descobrir a medida exata de tórax e busto para você nunca mais sentir dor."
    },
    {
      icon: PackageCheck,
      title: "Entrega 100% Discreta",
      desc: "Receba seu pedido em Teresópolis em embalagem neutra, lacrada e totalmente sigilosa, garantindo sua total privacidade."
    },
    {
      icon: Heart,
      title: "Atendimento Acolhedor & Paciente",
      desc: "Destaque especial para a vendedora Vivian e equipe, reconhecidas nas avaliações do Google pela simpatia, carinho e respeito ao corpo real de cada mulher."
    },
    {
      icon: RotateCcw,
      title: "Troca Sem Burocracia na Galeria",
      desc: "Precisou ajustar o tamanho de peças de vestuário ou sleepwear? Basta passar na nossa loja física na Galeria Teresópolis (Loja 19)."
    }
  ];

  const comparisonPoints = [
    {
      aspect: "Experiência de Compra",
      ecommerce: "Linktree genérico ou e-commerce frio sem orientação",
      anni: "Consultoria acolhedora no WhatsApp e na Galeria Teresópolis"
    },
    {
      aspect: "Acerto do Tamanho",
      ecommerce: "Alto risco de errar o tamanho da taça e do bojo",
      anni: "Consultoras medem e orientam com base no seu biotipo exato"
    },
    {
      aspect: "Privacidade na Entrega",
      ecommerce: "Embalagens genéricas que podem violar o sigilo",
      anni: "Embalagem discreta, opaca e lacrada para entrega em Teresópolis"
    },
    {
      aspect: "Toque nas Rendas & Tecidos",
      ecommerce: "Você só descobre se pinica quando a encomenda chega",
      anni: "Rendas nobres testadas que não pinicam e maciez extrema"
    }
  ];

  const testimonials = [
    {
      name: "Taiana Costa",
      role: "Cliente Fiel · Avaliação Google Maps",
      text: "Perfeita, amo todas as peças! Sempre que penso em lingerie nova, lembro de vocês. Atendimento perfeito, peças de qualidade, confortáveis e sensuais! Amo demais a Anni Lingerie!",
      stars: 5
    },
    {
      name: "Danielle Gomes",
      role: "Cliente Verificada · Avaliação Google Maps",
      text: "Gostaria de parabenizar a funcionária Vivian pela atenção, simpatia, paciência e carinho no atendimento às clientes! Faz toda a diferença se sentir tão bem acolhida.",
      stars: 5
    },
    {
      name: "Depoimento de Cliente",
      role: "Local Guide Google",
      text: "Com produtos de alta qualidade, preço ótimo e o atendimento nota mil! Voltarei mais vezes e indicarei a loja com certeza para todas as amigas de Teresópolis.",
      stars: 5
    }
  ];

  const faqItems = [
    {
      q: "Como funciona a consultoria para acertar o tamanho do sutiã?",
      a: "Você só precisa informar suas medidas de busto e tórax (ou enviar uma fita métrica simples pelo WhatsApp). Nossa equipe orienta a taça correta (A, B, C ou D) e indica os modelos anatômicos que não apertam as costas nem machucam as costelas."
    },
    {
      q: "A embalagem de entrega por delivery é realmente discreta?",
      a: "Sim, 100%! Todas as entregas são enviadas em caixas ou envelopes opacos e lacrados, sem nenhuma menção externa a lingerie ou moda íntima, garantindo sua total privacidade se você receber no trabalho ou em casa."
    },
    {
      q: "Posso retirar meu pedido diretamente na loja da Galeria Teresópolis?",
      a: "Com certeza! Você escolhe as peças com nossas consultoras pelo WhatsApp e nós deixamos seu pedido separado na Loja 19 da Galeria Teresópolis (Rua Francisco Sá, 185) para você só passar e retirar."
    },
    {
      q: "Como funciona a política de trocas?",
      a: "Peças de sleepwear, pijamas, robes e corpetes com etiqueta original e sem sinais de uso podem ser trocadas facilmente na nossa loja física. Calcinhas e peças íntimas seguem as normas de higiene e vigilância sanitária para a sua própria proteção."
    },
    {
      q: "Vocês atendem noivas para chá de lingerie e lua de mel?",
      a: "Sim! Temos uma linha noivas exclusiva (Bridal Collection) e ajudamos a noiva a montar a lista do Chá de Lingerie com suas preferências de cores e tamanhos para facilitar a escolha das convidadas."
    },
    {
      q: "Quais são as formas de pagamento aceitas?",
      a: "Aceitamos Pix, cartões de crédito e débito de todas as bandeiras (com parcelamento em compras a partir do valor mínimo) e pagamento em dinheiro na loja."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F6] text-slate-900 selection:bg-rose-200 selection:text-rose-950 pb-24 lg:pb-0 font-sans">
      {/* TOP NOTIFICATION RIBBON */}
      <div className="bg-[#4C0519] text-[#FFE4E6] text-xs py-2 px-4 border-b border-rose-950">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-rose-400 animate-pulse"></span>
            <span className="font-medium text-rose-100">
              Galeria Teresópolis (Loja 19) · Consultoria de Medidas no WhatsApp & Entrega Discreta em toda a cidade
            </span>
          </div>
          <div className="flex items-center gap-4 text-rose-200">
            <span className="hidden md:inline-flex items-center gap-1 text-[11px]">
              <MapPin className="h-3.5 w-3.5 text-rose-300" /> R. Francisco Sá, 185 - Loja 19 · Várzea
            </span>
            <a
              href={`tel:${phone}`}
              className="font-bold text-white hover:text-rose-200 transition"
            >
              {phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* 1. NAVBAR - ZERO EMOJIS - SEM ÍCONE NA HEADER (APENAS O NOME DA MARCA) */}
      <header className="sticky top-0 z-50 border-b border-rose-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
          {/* BRAND NAME TYPOGRAPHIC ONLY - ZERO ICONS IN HEADER */}
          <a href="#" className="flex flex-col group transition">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-serif tracking-tight text-[#4C0519] group-hover:text-rose-700 transition">
                Anni <span className="italic font-normal text-rose-600">Lingerie</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#4C0519] bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full">
                Boutique
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-rose-900/60 uppercase mt-0.5">
              Moda Íntima & Sleepwear · Galeria Teresópolis, Loja 19
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <a href="#colecoes" className="text-sm font-semibold text-slate-700 hover:text-rose-700 transition">
              Coleções
            </a>
            <a href="#consultoria" className="text-sm font-semibold text-slate-700 hover:text-rose-700 transition">
              O Sutiã Perfeito
            </a>
            <a href="#diferenciais" className="text-sm font-semibold text-slate-700 hover:text-rose-700 transition">
              Diferenciais
            </a>
            <a href="#avaliacoes" className="text-sm font-semibold text-slate-700 hover:text-rose-700 transition">
              Avaliações
            </a>
            <a href="#localizacao" className="text-sm font-semibold text-slate-700 hover:text-rose-700 transition">
              Galeria Teresópolis
            </a>
            <a href="#faq" className="text-sm font-semibold text-slate-700 hover:text-rose-700 transition">
              Dúvidas
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(
                "Olá! Gostaria de falar com a consultora da Anni Lingerie sobre peças e tamanhos."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#4C0519] hover:bg-[#680924] text-white px-5 py-2.5 text-xs sm:text-sm font-bold shadow-md shadow-rose-900/20 transition-all active:scale-95"
            >
              <MessageCircle className="h-4 w-4 text-rose-300" />
              <span>Consultar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-200 text-[#4C0519] lg:hidden hover:bg-rose-50 transition"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-rose-100 bg-white px-6 py-5 lg:hidden animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-4">
              <a
                href="#colecoes"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-rose-700 transition py-1"
              >
                Coleções & Rendas Finais
              </a>
              <a
                href="#consultoria"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-rose-700 transition py-1"
              >
                Guia do Sutiã Perfeito
              </a>
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-rose-700 transition py-1"
              >
                Vantagens da Boutique
              </a>
              <a
                href="#avaliacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-rose-700 transition py-1"
              >
                Avaliações das Clientes
              </a>
              <a
                href="#localizacao"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-rose-700 transition py-1"
              >
                Galeria Teresópolis (Loja 19)
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-rose-700 transition py-1"
              >
                Perguntas Frequentes
              </a>

              <div className="pt-3 border-t border-rose-100 flex flex-col gap-2">
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#4C0519] py-3 text-sm font-bold text-white shadow-md"
                >
                  <MessageCircle className="h-4 w-4" />
                  Atendimento WhatsApp Oficial
                </a>
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-rose-200 py-2.5 text-xs font-semibold text-slate-700"
                >
                  <Phone className="h-3.5 w-3.5 text-rose-600" />
                  Ligar para {phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION - SILK BOUDOIR & SENSUAL ROMANCE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50/40 to-[#FAF8F6] py-12 md:py-20 border-b border-rose-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Left Col: Core Value Proposition */}
            <div className="lg:col-span-7">
              {/* Trust Badge */}
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-3.5 py-1.5 text-xs font-bold text-[#881337] shadow-sm backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
                <span>Boutique Galeria Teresópolis · Loja 19</span>
                <span className="text-rose-300">·</span>
                <span className="text-emerald-800 font-extrabold">Entrega Discreta na Serra</span>
              </div>

              <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-slate-950 leading-[1.14]">
                Lingeries que abraçam seu corpo com{" "}
                <span className="italic font-normal text-[#9F1239] underline decoration-rose-200 underline-offset-8">
                  sensualidade, delicadeza
                </span>{" "}
                e conforto absoluto.
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700">
                Chega de sutiãs que machucam as costelas, arames rígidos e peças que marcam a roupa. Na <strong>Anni Lingerie</strong>, você encontra rendas nobres que não pinicam, sleepwear de seda fluido e a assessoria atenciosa e paciente da Vivian para descobrir a taça perfeita para seu biotipo real.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4C0519] hover:bg-[#680924] px-7 py-4 text-base font-bold text-white shadow-xl shadow-rose-950/20 transition-all hover:scale-[1.02] active:scale-95 text-center"
                >
                  <MessageCircle className="h-5 w-5 text-rose-300" />
                  Consultar Tamanho com a Vivian no WhatsApp
                </a>
                <a
                  href="#colecoes"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-rose-300 bg-white px-7 py-4 text-base font-bold text-[#4C0519] shadow-sm hover:bg-rose-50 transition-all text-center"
                >
                  <span>Explorar Coleções</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Social Proof Strip */}
              <div className="mt-8 pt-6 border-t border-rose-100 flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-950 flex items-center gap-1.5">
                    <span>4,8 Estrelas no Google Maps</span>
                    <span className="text-xs font-semibold text-rose-900/60">· 16 Avaliações Reais</span>
                  </div>
                  <p className="text-xs text-slate-600 italic">
                    "Atendimento carinhoso, peças confortáveis e sensuais!"
                  </p>
                </div>
              </div>
            </div>

            {/* Right Col: Boutique Experience Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-rose-200/80 bg-white p-6 sm:p-8 shadow-2xl shadow-rose-950/10">
                {/* Card Header */}
                <div className="flex items-center justify-between pb-5 border-b border-rose-100">
                  <div>
                    <span className="text-xl font-serif font-bold text-[#4C0519]">Anni Lingerie</span>
                    <span className="text-xs text-slate-500 block">Galeria Teresópolis · Loja 19</span>
                  </div>
                  <span className="rounded-full bg-rose-50 border border-rose-200 px-3 py-1 text-xs font-bold text-[#881337]">
                    Boutique Exclusiva
                  </span>
                </div>

                {/* Highlights List */}
                <div className="py-5 space-y-3.5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-700">
                      <Eye className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">O Fim do Sutiã Errado</p>
                      <p className="text-xs text-slate-600">Consultoria de medidas para taça e costas exatas sem dor.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-700">
                      <PackageCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Embalagem 100% Discreta</p>
                      <p className="text-xs text-slate-600">Receba em embalagem neutra e lacrada com total privacidade.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-700">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Rendas Nobres que Não Pinicam</p>
                      <p className="text-xs text-slate-600">Fios macios antialérgicos que unem beleza e conforto no uso diário.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-700">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Atendimento Paciente & Carinhoso</p>
                      <p className="text-xs text-slate-600">Acolhimento elogiado por clientes fiéis de Teresópolis.</p>
                    </div>
                  </div>
                </div>

                {/* Direct Phone Bar */}
                <div className="rounded-2xl bg-rose-50/60 border border-rose-100 p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 text-[#881337]" />
                    <span className="text-xs font-bold text-slate-800">{phoneDisplay}</span>
                  </div>
                  <a
                    href={defaultWhatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-[#881337] hover:text-[#4C0519] flex items-center gap-1"
                  >
                    Falar agora <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. METRICS & TRUST STRIP */}
      <section className="border-b border-rose-100 bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-[#FAF8F6] border border-rose-100">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#881337]">4,8</span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-slate-700">Google Avaliações</span>
              <span className="text-[11px] text-slate-500">16 depoimentos autênticos</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F6] border border-rose-100">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-slate-900">100%</span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-slate-700">Entrega Discreta</span>
              <span className="text-[11px] text-slate-500">Privacidade total no recebimento</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F6] border border-rose-100">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#881337]">Loja 19</span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-slate-700">Galeria Teresópolis</span>
              <span className="text-[11px] text-slate-500">Ponto central na Rua Francisco Sá</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F6] border border-rose-100">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-slate-900">1 a 1</span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-slate-700">Consultoria Íntima</span>
              <span className="text-[11px] text-slate-500">Suporte paciente com a Vivian</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COLEÇÕES COM ABAS INTERATIVAS */}
      <section id="colecoes" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block rounded-full bg-rose-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#881337] border border-rose-200">
              Vitrine Boutique Oficial
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold tracking-tight text-slate-950">
              Coleções & Linhas Exclusivas
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Peças desenhadas para abraçar sua feminilidade em qualquer momento, da rotina do trabalho a ocasiões inesquecíveis.
            </p>
          </div>

          {/* Categories Tab Navigation */}
          <div className="mt-10 flex items-center justify-start sm:justify-center overflow-x-auto pb-3 gap-2 sm:gap-3 no-scrollbar">
            {Object.entries(collectionsData).map(([key, category]) => {
              const isActive = activeCategoryTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategoryTab(key)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? "bg-[#4C0519] text-white shadow-md shadow-rose-950/20"
                      : "bg-[#FAF8F6] text-slate-700 hover:bg-rose-50 border border-rose-100"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Active Tab Header */}
          <div className="mt-8 rounded-2xl bg-[#FAF8F6] border border-rose-200/70 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-serif font-bold text-[#4C0519]">
                  {collectionsData[activeCategoryTab as keyof typeof collectionsData].label}
                </h3>
                <span className="rounded-full bg-rose-100 text-[#881337] text-[10px] font-extrabold uppercase px-2.5 py-0.5">
                  {collectionsData[activeCategoryTab as keyof typeof collectionsData].badge}
                </span>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                {collectionsData[activeCategoryTab as keyof typeof collectionsData].description}
              </p>
            </div>
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(
                `Olá! Gostaria de ver opções e fotos disponíveis da linha: ${collectionsData[activeCategoryTab as keyof typeof collectionsData].label}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#4C0519] hover:bg-[#680924] text-white text-xs font-bold px-4 py-2.5 transition"
            >
              <MessageCircle className="h-3.5 w-3.5 text-rose-300" />
              <span>Ver Peças no WhatsApp</span>
            </a>
          </div>

          {/* Cards Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {collectionsData[activeCategoryTab as keyof typeof collectionsData].items.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-3xl border border-rose-100 bg-white p-6 shadow-sm hover:shadow-xl hover:border-rose-300 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-rose-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-rose-800">
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-bold text-[#881337]">
                      {item.highlight}
                    </span>
                  </div>

                  <h4 className="mt-4 text-base sm:text-lg font-serif font-bold text-slate-900 group-hover:text-rose-700 transition">
                    {item.name}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>

                  <div className="mt-4 rounded-xl bg-[#FAF8F6] border border-rose-100/80 p-2.5">
                    <p className="text-[11px] text-slate-700 font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      {item.benefit}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-rose-100">
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(
                      `Olá! Gostaria de consultar tamanho e valor da peça: ${item.name}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rose-50 group-hover:bg-[#4C0519] group-hover:text-white py-2.5 text-xs font-bold text-[#4C0519] transition"
                  >
                    <span>Consultar Disponibilidade</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GUIA DO SUTIÃ PERFEITO (CONSULTORIA ÍNTIMA) */}
      <section id="consultoria" className="py-16 md:py-24 bg-[#FAF8F6] border-y border-rose-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-rose-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#881337]">
              Adeus ao Incômodo Diário
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold tracking-tight text-slate-950">
              O Fim do Sutiã Errado
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Você sabia que a grande maioria das mulheres usa o número errado de sutiã sem perceber? Veja os sinais comuns e como resolvemos:
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-50 text-rose-700 font-bold text-sm">
                1
              </div>
              <h3 className="mt-4 text-base font-serif font-bold text-slate-900">Alças Cavando os Ombros?</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                O peso deve ser sustentado pela faixa das costas, e não pelas alças. Quando a faixa está frouxa, as alças puxam e causam dor cervical.
              </p>
            </div>

            <div className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-50 text-rose-700 font-bold text-sm">
                2
              </div>
              <h3 className="mt-4 text-base font-serif font-bold text-slate-900">Aro Cutucando as Costelas?</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                Sinal de taça menor do que o volume real da sua mama. O aro fica em cima do tecido mamário em vez de repousar confortavelmente na base.
              </p>
            </div>

            <div className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-50 text-rose-700 font-bold text-sm">
                3
              </div>
              <h3 className="mt-4 text-base font-serif font-bold text-slate-900">Faixa Subindo nas Costas?</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                Se a parte de trás do sutiã sobe em direção à nuca, a medida do tórax está muito larga. Ajustar o tamanho certo estabiliza toda a postura.
              </p>
            </div>
          </div>

          {/* Vivian Consultation Callout */}
          <div className="mt-10 rounded-3xl bg-gradient-to-r from-rose-100/80 via-white to-rose-50 border border-rose-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#881337] flex items-center gap-1.5">
                <Heart className="h-3.5 w-3.5 text-rose-600" />
                Atendimento Carinhoso & Dedicado
              </span>
              <h4 className="text-lg font-serif font-bold text-[#4C0519]">
                Descubra sua medida com auxílio da Vivian
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Nossa consultora orienta você com toda a paciência e discrição pelo WhatsApp, ou recebe você na loja da Galeria Teresópolis para provar sem pressa.
              </p>
            </div>

            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(
                "Olá Vivian! Gostaria de consultoria para descobrir o tamanho ideal de sutiã para o meu corpo."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#4C0519] hover:bg-[#680924] text-white px-6 py-3.5 text-xs sm:text-sm font-bold shadow-md shadow-rose-950/20 transition"
            >
              <MessageCircle className="h-4 w-4 text-rose-300" />
              <span>Chamar a Vivian no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. DIFERENCIAIS DA BOUTIQUE VS E-COMMERCE FRIO */}
      <section id="diferenciais" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block rounded-full bg-rose-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#881337] border border-rose-200">
              Por que a Anni Lingerie
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold tracking-tight text-slate-950">
              Vantagens de Uma Boutique de Verdade
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Veja por que nossas clientes preferem a Anni Lingerie a sites distantes ou plataformas genéricas:
            </p>
          </div>

          {/* Comparison Table */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-rose-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-rose-100 bg-[#FAF8F6] text-xs font-bold uppercase tracking-wider text-slate-700">
              <div className="p-4 md:col-span-4 hidden md:block">Detalhe da Experiência</div>
              <div className="p-4 md:col-span-4 text-slate-500 bg-slate-100/50">E-commerce Tradicional / Linktree</div>
              <div className="p-4 md:col-span-4 bg-rose-100/70 text-[#4C0519] font-extrabold">Boutique Anni Lingerie</div>
            </div>

            <div className="divide-y divide-rose-100">
              {comparisonPoints.map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 items-center text-xs sm:text-sm">
                  <div className="p-4 md:col-span-4 font-serif font-bold text-slate-900 bg-rose-50/20">
                    {row.aspect}
                  </div>
                  <div className="p-4 md:col-span-4 text-slate-500 flex items-start gap-2">
                    <X className="h-3.5 w-3.5 text-rose-500 shrink-0 mt-0.5" />
                    <span>{row.ecommerce}</span>
                  </div>
                  <div className="p-4 md:col-span-4 font-semibold text-slate-900 bg-rose-50/40 flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{row.anni}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {boutiqueDifferentiators.map((b, idx) => {
              const IconComp = b.icon;
              return (
                <div key={idx} className="rounded-3xl border border-rose-100 bg-[#FAF8F6] p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-[#881337]">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-base font-serif font-bold text-slate-900">{b.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. PROVA SOCIAL / AVALIAÇÕES REAIS GOOGLE MAPS */}
      <section id="avaliacoes" className="py-16 md:py-24 bg-[#FAF8F6] border-t border-rose-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-rose-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#881337]">
              Relatos Autênticos
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold tracking-tight text-slate-950">
              O Que Nossas Clientes Dizem
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Comentários reais registrados na ficha oficial da loja na Galeria Teresópolis no Google Maps.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-rose-200/80 bg-white p-7 shadow-sm"
              >
                <div>
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-800 italic font-serif">
                    "{t.text}"
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-rose-100 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4C0519] text-white font-serif font-bold text-xs">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-xs sm:text-sm font-bold text-slate-950">{t.name}</span>
                    <span className="block text-[11px] text-slate-500">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SIMULADOR DE CONSULTORIA & PEDIDO WHATSAPP */}
      <section id="contato" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-3xl border border-rose-200 bg-gradient-to-b from-white to-[#FAF8F6] p-6 sm:p-12 shadow-2xl shadow-rose-950/10">
            <div className="text-center">
              <span className="inline-block rounded-full bg-rose-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#881337] border border-rose-200">
                Atendimento Rápido & Personalizado
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                Receba Fotos & Modelos no WhatsApp
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Preencha suas preferências abaixo para a equipe da loja na Galeria Teresópolis preparar suas opções:
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Seu Nome:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carolina Almeida"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#4C0519] focus:ring-2 focus:ring-rose-900/10"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Estilo de Interesse:
                  </label>
                  <select
                    value={selectedStyle}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#4C0519] focus:ring-2 focus:ring-rose-900/10"
                  >
                    <option value="Conjuntos de Renda Sensual & Bodies">Rendas Sensuais & Bodies</option>
                    <option value="Linha Conforto Sem Costura (Dia a Dia)">Conforto Invisível (Sem Costura)</option>
                    <option value="Sleepwear / Pijamas de Seda & Robes">Sleepwear, Pijamas & Robes</option>
                    <option value="Coleção Noivas / Lua de Mel / Chá">Coleção Noivas & Chá de Lingerie</option>
                    <option value="Linha Pós-Cirúrgica / Maternidade">Pós-Cirúrgico & Maternidade</option>
                    <option value="Presente Especial para Namorada/Esposa">Presente Especial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Tamanho Aproximado:
                  </label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#4C0519] focus:ring-2 focus:ring-rose-900/10"
                  >
                    <option value="Tamanho P (40) / Calcinha P">Tamanho P (40) / Calcinha P</option>
                    <option value="Tamanho M (42) / Calcinha M">Tamanho M (42) / Calcinha M</option>
                    <option value="Tamanho G (44) / Calcinha G">Tamanho G (44) / Calcinha G</option>
                    <option value="Tamanho GG (46) / Calcinha GG">Tamanho GG (46) / Calcinha GG</option>
                    <option value="Plus Size (48 ao 52)">Plus Size (48 ao 52)</option>
                    <option value="Não sei meu tamanho, quero ajuda da consultora">Quero ajuda para descobrir meu tamanho</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Como prefere receber?
                </label>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    onClick={() => setDeliveryMode("Entrega Discreta em Domicílio (Teresópolis)")}
                    className={`cursor-pointer rounded-xl border p-3.5 flex items-center gap-3 transition ${
                      deliveryMode.includes("Entrega")
                        ? "border-[#4C0519] bg-rose-50/60 text-slate-900 font-bold"
                        : "border-rose-200 bg-white text-slate-600"
                    }`}
                  >
                    <PackageCheck className="h-4 w-4 text-[#881337] shrink-0" />
                    <span className="text-xs">Entrega Discreta em Casa</span>
                  </label>

                  <label
                    onClick={() => setDeliveryMode("Retirar na Galeria Teresópolis (Loja 19)")}
                    className={`cursor-pointer rounded-xl border p-3.5 flex items-center gap-3 transition ${
                      deliveryMode.includes("Retirar")
                        ? "border-[#4C0519] bg-rose-50/60 text-slate-900 font-bold"
                        : "border-rose-200 bg-white text-slate-600"
                    }`}
                  >
                    <Clock className="h-4 w-4 text-[#881337] shrink-0" />
                    <span className="text-xs">Retirar na Galeria (Loja 19)</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Detalhes ou Preferências de Cores (Opcional):
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Gostaria de ver opções em tons preto e vinho marsala, com aro delicado e sem bojo..."
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#4C0519] focus:ring-2 focus:ring-rose-900/10"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#4C0519] hover:bg-[#680924] text-white py-4 text-base font-bold shadow-xl shadow-rose-950/20 transition-all active:scale-95"
              >
                <Send className="h-4 w-4 text-rose-300" />
                <span>Enviar para a Consultora no WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 9. LOCALIZAÇÃO NA GALERIA TERESÓPOLIS COM MAPA */}
      <section id="localizacao" className="py-16 md:py-24 bg-[#FAF8F6] border-t border-rose-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-block rounded-full bg-rose-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#881337]">
                  Visite Nossa Boutique Física
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold tracking-tight text-slate-950">
                  Anni Lingerie
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Instalada na tradicional Galeria Teresópolis, no coração da Várzea, com ambiente reservado e aconchegante para você experimentar suas peças com tranquilidade.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-rose-200 p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#881337] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Endereço da Boutique</span>
                    <p className="text-sm font-semibold text-slate-900">{address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#881337] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Horário de Funcionamento</span>
                    <p className="text-sm font-semibold text-slate-900">{hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#881337] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">WhatsApp & Contato</span>
                    <p className="text-sm font-semibold text-slate-900">{phoneDisplay}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Rua+Francisco+Sa+185+Varzea+Teresopolis+RJ"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4C0519] hover:bg-[#680924] text-white px-5 py-3 text-xs font-bold transition"
                >
                  <Navigation className="h-4 w-4 text-rose-300" />
                  <span>Traçar Rota no Google Maps</span>
                </a>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-rose-300 bg-white hover:bg-rose-50 text-[#4C0519] px-5 py-3 text-xs font-bold transition"
                >
                  <Phone className="h-4 w-4 text-rose-600" />
                  <span>Ligar para a Loja</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-3xl border border-rose-200 bg-white shadow-xl h-[380px] sm:h-[420px]">
                <iframe
                  title="Localização Anni Lingerie na Galeria Teresópolis"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0682054695373!2d-42.97058862398455!3d-22.413247021334964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x98529f7cf7c91d%3A0xc31910ef92540c54!2sR.%20Francisco%20S%C3%A1%2C%20185%20-%20V%C3%A1rzea%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025953-011!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SANFONADO (DÚVIDAS FREQUENTES) */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-rose-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#881337] border border-rose-200">
              Esclarecimentos Rápidos
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold tracking-tight text-slate-950">
              Perguntas Frequentes
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Tudo o que você precisa saber sobre consultoria, entrega discreta e formas de atendimento.
            </p>
          </div>

          <div className="mt-12 space-y-3.5">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-rose-100 bg-[#FAF8F6] transition"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left font-serif font-bold text-slate-900 hover:bg-rose-50 transition"
                >
                  <span className="text-sm sm:text-base pr-4">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${
                      faqOpen === idx ? "rotate-180 text-[#881337]" : ""
                    }`}
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-rose-100/70 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FOOTER - ZERO EMOJIS */}
      <footer className="border-t border-rose-100 bg-[#23020B] text-rose-200/80 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Col 1: Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-serif font-bold tracking-tight text-white">
                  Anni <span className="italic font-normal text-rose-300">Lingerie</span>
                </span>
              </div>
              <p className="text-xs leading-relaxed text-rose-200/70">
                Boutique de lingerie fina, sleepwear de seda, camisolas e linha conforto na Galeria Teresópolis (Loja 19). Peças que abraçam seu corpo com sensualidade e conforto diário.
              </p>
              <div className="pt-2">
                <span className="text-[11px] font-bold text-rose-300 block">Atendimento com a Vivian:</span>
                <p className="text-sm font-bold text-white">{phoneDisplay}</p>
              </div>
            </div>

            {/* Col 2: Coleções */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-100">Coleções Especiais</h4>
              <ul className="mt-3 space-y-2 text-xs">
                <li>
                  <a href="#colecoes" className="hover:text-white transition">Rendas & Noites Especiais</a>
                </li>
                <li>
                  <a href="#colecoes" className="hover:text-white transition">Conforto Invisível (Sem Costura)</a>
                </li>
                <li>
                  <a href="#colecoes" className="hover:text-white transition">Sleepwear, Cetim & Robes</a>
                </li>
                <li>
                  <a href="#colecoes" className="hover:text-white transition">Coleção Noivas & Chá de Lingerie</a>
                </li>
                <li>
                  <a href="#colecoes" className="hover:text-white transition">Linha Pós-Cirúrgica & Maternidade</a>
                </li>
              </ul>
            </div>

            {/* Col 3: Loja Física */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-100">Boutique Física</h4>
              <p className="mt-3 text-xs leading-relaxed text-rose-200/90 font-semibold">{address}</p>
              <p className="mt-3 text-xs text-rose-200/70">
                <strong className="text-rose-100">Horário:</strong> {hours}
              </p>
              <p className="mt-1 text-xs text-emerald-300 font-semibold">
                Entrega discreta para toda a cidade
              </p>
            </div>

            {/* Col 4: WhatsApp Direct */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-100">Canal Exclusivo</h4>
              <p className="mt-3 text-xs text-rose-200/70">
                Tire dúvidas de medidas e confira as novidades da semana com nossa equipe:
              </p>
              <a
                href={defaultWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-rose-700 hover:bg-rose-600 text-white px-4 py-2.5 text-xs font-bold transition shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-rose-900/60 text-center text-[11px] text-rose-300/50">
            © {new Date().getFullYear()} Anni Lingerie · Galeria Teresópolis, Loja 19 · Todos os direitos reservados · Desenvolvimento e Performance por Cronos Agency
          </div>
        </div>
      </footer>

      {/* 12. MOBILE FIXED BOTTOM ACTION BAR (COMPENSADO POR pb-24 lg:pb-0) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-rose-200 bg-white/95 backdrop-blur-md px-4 py-3 lg:hidden shadow-lg">
        <div className="flex items-center gap-2">
          <a
            href={`tel:${phone}`}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50/50 py-3 text-xs font-bold text-slate-800 active:scale-95 transition"
          >
            <Phone className="h-4 w-4 text-[#881337]" />
            <span>Ligar</span>
          </a>
          <a
            href={defaultWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="flex-[2] flex items-center justify-center gap-1.5 rounded-xl bg-[#4C0519] py-3 text-xs font-bold text-white shadow-md shadow-rose-950/20 active:scale-95 transition"
          >
            <MessageCircle className="h-4 w-4 text-rose-300" />
            <span>Consultar no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
