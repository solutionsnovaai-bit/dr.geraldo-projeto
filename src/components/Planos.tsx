import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { planos, type Plano } from "../data/planos";
import { site, linkZap } from "../data/site";

export default function Planos() {
  return (
    <section
      id="planos"
      className="border-y border-[var(--linha)] bg-carvao py-24 sm:py-28"
    >
      <div className="faixa">
        <Reveal>
          <div className="rotulo">Investimento</div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="titulo">
            Três níveis. <em className="not-italic text-ouro">Um compromisso só: o mensal.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="subtexto mb-12">
            Sem fidelidade, sem multa, sem carência. Se em algum mês não fizer sentido, é só avisar.
          </p>
        </Reveal>

        {/* Cortesia de implementação */}
        <Reveal delay={0.2}>
          <div className="mx-auto mb-14 flex max-w-[820px] flex-wrap items-center justify-center gap-4 border border-[var(--linha)] bg-[rgba(201,146,43,0.045)] px-7 py-5 text-center">
            <span className="font-numero text-2xl text-neutro line-through decoration-ouro">
              {site.setup.valorCheio}
            </span>
            <span className="font-numero text-[2rem] font-semibold text-ouro">R$ 0</span>
            <p className="max-w-[46ch] text-[0.87rem] leading-relaxed text-neutro">
              {site.setup.texto}
            </p>
          </div>
        </Reveal>

        <div className="grid items-stretch gap-5 md:grid-cols-3">
          {planos.map((plano, i) => (
            <Reveal key={plano.id} delay={i * 0.1} className="h-full">
              <Card plano={plano} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-9 text-center text-[0.78rem] leading-relaxed text-neutro">
            Os valores em destaque são do primeiro mês, com 50% de desconto na adesão. A partir do
            segundo mês vale a mensalidade cheia, indicada abaixo de cada valor.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Card({ plano }: { plano: Plano }) {
  const destaque = !!plano.destaque;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex h-full flex-col px-8 pb-9 pt-11 ${
        destaque
          ? "borda-ouro md:-translate-y-3"
          : "border border-[var(--linha-fria)] bg-superficie hover:border-[var(--linha)]"
      }`}
    >
      {plano.fita && (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-ouro px-5 py-[7px] font-display text-[0.55rem] font-semibold uppercase tracking-[0.26em] text-[#0A0805]">
          {plano.fita}
        </span>
      )}

      <h3 className="mb-1.5 font-display text-[1.18rem] font-medium uppercase tracking-[0.13em]">
        {plano.nome}
      </h3>
      <p className="mb-7 min-h-[2.9em] text-[0.83rem] leading-relaxed text-neutro">
        {plano.tagline}
      </p>

      <div className="flex items-baseline gap-1.5">
        <span className="font-numero text-[1.15rem] text-neutro">R$</span>
        <span
          className={`font-numero text-[3.5rem] font-medium leading-none ${
            destaque ? "text-ouro" : "text-marfim"
          }`}
        >
          {plano.primeiroMes}
        </span>
        <span className="text-[0.8rem] text-neutro">no 1º mês</span>
      </div>

      <p className="mt-2 text-[0.78rem] text-neutro">
        Depois <span className="text-marfim">R$ {plano.recorrente}</span>/mês
      </p>

      <p className="mb-7 border-b border-[var(--linha-fria)] pb-6 pt-4 text-[0.72rem] uppercase tracking-[0.09em] text-neutro">
        Mensal · sem fidelidade
      </p>

      <ul className="mb-8 flex-1 list-none">
        {plano.itens.map((item) => (
          <li
            key={item.texto}
            className={`flex items-start gap-3 py-2.5 text-[0.885rem] leading-relaxed ${
              item.incluso ? "text-[#CFC9BC]" : "text-[#4E4A43]"
            }`}
          >
            <svg
              viewBox="0 0 12 12"
              className="mt-[0.42em] h-2.5 w-2.5 flex-shrink-0"
              aria-hidden="true"
            >
              <path
                d="M1.5 6.2 L4.4 9 L10.5 2.6"
                fill="none"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke={item.incluso ? "#C9922B" : "#3A3730"}
              />
            </svg>
            {item.texto}
          </li>
        ))}
      </ul>

      <a
        href={linkZap(plano.mensagem)}
        target="_blank"
        rel="noopener noreferrer"
        className={`block border py-4 text-center font-display text-[0.68rem] font-medium uppercase tracking-[0.24em] transition-colors duration-300 ${
          destaque
            ? "border-ouro bg-ouro text-[#0A0805] hover:border-ouro-claro hover:bg-ouro-claro"
            : "border-ouro text-ouro hover:bg-ouro hover:text-[#0A0805]"
        }`}
      >
        {plano.cta}
      </a>
    </motion.article>
  );
}
