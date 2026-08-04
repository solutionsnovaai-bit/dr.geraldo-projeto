// ═══════════════════════════════════════════════════════════
//  OS PLANOS. Ordem crescente de preço — o array já está na
//  ordem em que aparecem na tela.
//
//  primeiroMes = valor com 50% de desconto na adesão
//  recorrente  = valor cheio, a partir do segundo mês
// ═══════════════════════════════════════════════════════════

export type Plano = {
  id: string;
  nome: string;
  tagline: string;
  primeiroMes: string;
  recorrente: string;
  destaque?: boolean;
  fita?: string;
  cta: string;
  mensagem: string;
  itens: { texto: string; incluso: boolean }[];
};

export const planos: Plano[] = [
  {
    id: "captacao",
    nome: "Captação",
    tagline: "O escritório passa a prospectar sozinho, todos os dias.",
    primeiroMes: "497",
    recorrente: "997",
    cta: "Começar por aqui",
    mensagem:
      "Olá! Sou o Dr. Geraldo Souza. Tenho interesse no plano Captação.",
    itens: [
      { texto: "Agente de WhatsApp com Inteligência Artificial, ativo e receptivo", incluso: true },
      { texto: "Atende 24 horas por dia, todos os dias, sem fila de espera", incluso: true },
      { texto: "Roteiro de conversa desenhado por especialidade jurídica", incluso: true },
      { texto: "Triagem do caso antes de chegar ao Dr. Geraldo", incluso: true },
      { texto: "Passagem imediata para o atendimento humano quando o caso esquenta", incluso: true },
      { texto: "Ajustes de roteiro sempre que necessário", incluso: true },
      { texto: "Relatório mensal de conversas e casos gerados", incluso: true },
      { texto: "Listas quentes de contatos", incluso: false },
      { texto: "Redes sociais e anúncios", incluso: false },
      { texto: "Automações personalizadas", incluso: false },
    ],
  },
  {
    id: "autoridade",
    nome: "Autoridade",
    tagline: "O mesmo agente, agora com lista quente na mão.",
    primeiroMes: "847",
    recorrente: "1.697",
    destaque: true,
    fita: "Recomendado",
    cta: "Quero este",
    mensagem:
      "Olá! Sou o Dr. Geraldo Souza. Tenho interesse no plano Autoridade.",
    itens: [
      { texto: "Tudo do plano Captação", incluso: true },
      { texto: "Listas quentes entregues assim que chegam, sem esperar o mês virar", incluso: true },
      { texto: "Contatos segmentados pelas áreas que o escritório quer atender", incluso: true },
      { texto: "Base sempre renovada — nada de lista reciclada", incluso: true },
      { texto: "Contatos tratados antes do disparo, sem número inválido ou repetido", incluso: true },
      { texto: "Lista já carregada no agente, pronta para conversar", incluso: true },
      { texto: "Redes sociais e anúncios", incluso: false },
      { texto: "Automações personalizadas", incluso: false },
    ],
  },
  {
    id: "dominio",
    nome: "Domínio",
    tagline: "Captação, presença e automação operando como um sistema só.",
    primeiroMes: "1.497",
    recorrente: "2.997",
    cta: "Falar sobre este",
    mensagem:
      "Olá! Sou o Dr. Geraldo Souza. Gostaria de saber mais sobre o plano Domínio.",
    itens: [
      { texto: "Tudo do plano Autoridade", incluso: true },
      { texto: "Automações com Inteligência Artificial, sob medida para a rotina do escritório", incluso: true },
      { texto: "Produção completa para redes sociais: artes, vídeos e legendas", incluso: true },
      { texto: "Calendário de publicação organizado no início de cada mês", incluso: true },
      { texto: "Gestão completa dos anúncios no Meta (Instagram e Facebook)", incluso: true },
      { texto: "Página de captação exclusiva, no domínio do escritório", incluso: true },
      { texto: "Reunião mensal de estratégia e leitura de resultados", incluso: true },
    ],
  },
];

/** Etapas da implementação — a ordem importa, é uma sequência real */
export const etapas = [
  {
    titulo: "Conversa inicial",
    texto:
      "Trinta minutos para entender como o escritório atende hoje, quais áreas priorizar e o tom que o Dr. Geraldo usa com o cliente.",
  },
  {
    titulo: "Construção",
    texto:
      "Montamos o agente, escrevemos os roteiros por área e preparamos a linha e o dispositivo.",
  },
  {
    titulo: "Homologação",
    texto:
      "O Dr. Geraldo conversa com o agente como se fosse um cliente e aprova cada resposta antes de ir ao ar.",
  },
  {
    titulo: "Operação",
    texto:
      "O agente entra em funcionamento e passa a ser ajustado com base nas conversas reais.",
  },
];

export const porNossaConta = [
  "Chip e linha telefônica dedicada ao agente",
  "Conta de WhatsApp Business configurada do zero",
  "Dispositivo que hospeda o agente, funcionando 24h",
  "Todo o desenvolvimento, treinamento e manutenção",
  "Implementação inicial, sem taxa de entrada",
];

export const porContaDoEscritorio = [
  "Plataforma de inteligência artificial (GPTMaker)",
  "Conexão oficial de WhatsApp (Z-API)",
  "Verba de anúncios, no plano Domínio",
];
