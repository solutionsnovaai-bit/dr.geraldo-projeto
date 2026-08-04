// ═══════════════════════════════════════════════════════════
//  EDITE AQUI. Praticamente tudo que muda na proposta está
//  neste arquivo e em ./planos.ts — não precisa mexer nos
//  componentes para trocar número, datas ou textos.
// ═══════════════════════════════════════════════════════════

export const site = {
  /** WhatsApp da Nova AI Solutions — país + DDD + número, só dígitos */
  whatsapp: "5511951007967",

  cliente: {
    tratamento: "Dr. Geraldo Souza",
    escritorio: "Advocacia e Consultoria Jurídica",
    cidade: "São Bernardo do Campo — SP",
  },

  proposta: {
    /** Aparece no topo da página */
    referencia: "Proposta Comercial · Agosto de 2026",
    /** Data base da validade */
    emitidaEm: "4 de agosto de 2026",
    validadeDias: 15,
  },

  /** Taxa de implementação — mostrada riscada, como cortesia */
  setup: {
    valorCheio: "R$ 1.500",
    texto:
      "Normalmente aplicamos taxa de implementação e desenvolvimento. Para o Dr. Geraldo, essa taxa foi integralmente zerada.",
  },

  /** Comparativo de custo usado na seção da balança */
  comparativo: {
    clt: { rotulo: "ATENDENTE CLT", valor: "R$ 3.740", hora: "R$ 21,25" },
    ia: { rotulo: "AGENTE DE IA", valor: "R$ 1.177", hora: "R$ 1,63" },
    resposta: "3 seg",
  },

  agencia: "Nova AI Solutions",
  ano: 2026,
};

/** Monta o link do WhatsApp já com a mensagem pronta */
export function linkZap(mensagem: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
