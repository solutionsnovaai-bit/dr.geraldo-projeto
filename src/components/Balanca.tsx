import { useRef } from "react";
import { motion, useInView, useReducedMotion, type TargetAndTransition } from "framer-motion";
import Reveal from "./Reveal";
import { site } from "../data/site";

const ease = [0.16, 1, 0.3, 1] as const;
const { clt, ia, resposta } = site.comparativo;

/**
 * A balança do próprio monograma do escritório, usada como argumento:
 * ela pende para o lado mais pesado — o custo de um funcionário.
 */
export default function Balanca() {
  const ref = useRef<HTMLDivElement>(null);
  const emCena = useInView(ref, { once: true, amount: 0.4 });
  const semMovimento = useReducedMotion();
  const pesou = emCena || semMovimento;

  const mov = (alvo: TargetAndTransition) =>
    semMovimento
      ? {}
      : {
          animate: pesou ? alvo : {},
          transition: { duration: 1.9, delay: 0.45, ease },
        };

  return (
    <section className="relative py-24 sm:py-28">
      <div className="faixa">
        <Reveal>
          <div className="rotulo">A conta que ninguém faz</div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="titulo">
            O gargalo do escritório não é falta de cliente.
            <br />
            <em className="not-italic text-ouro">É o tempo até a primeira resposta.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="subtexto">
            Quem procura advogado raramente procura um só. Manda mensagem para três, quatro, e fecha
            com quem responde primeiro — não necessariamente com quem é melhor. Um atendente humano
            responde durante o expediente. Um agente de IA responde às 23h de domingo, no mesmo
            minuto, e já chega ao {site.cliente.tratamento} com o caso triado.
          </p>
        </Reveal>

        <div ref={ref} className="mt-16 grid place-items-center">
          <svg
            viewBox="0 0 780 400"
            className="w-full max-w-[780px] overflow-visible"
            role="img"
            aria-label={`Comparativo de custo mensal: atendente CLT ${clt.valor}, agente de inteligência artificial ${ia.valor}`}
          >
            {/* base e coluna */}
            <path d="M330 356 L450 356 L438 340 L342 340 Z" fill="#1B1813" />
            <rect x="384" y="96" width="12" height="248" fill="#1B1813" />
            <circle cx="390" cy="96" r="13" fill="#C9922B" />
            <circle cx="390" cy="96" r="5" fill="#000000" />

            {/* viga */}
            <motion.g
              style={{ transformOrigin: "390px 96px" }}
              initial={semMovimento ? false : { rotate: 0 }}
              {...mov({ rotate: 9.5 })}
            >
              <rect x="110" y="91" width="560" height="8" rx="4" fill="#C9922B" />
              <circle cx="130" cy="95" r="6" fill="#C9922B" />
              <circle cx="650" cy="95" r="6" fill="#C9922B" />
            </motion.g>

            {/* prato pesado */}
            <motion.g initial={semMovimento ? false : { y: 0 }} {...mov({ y: 46 })}>
              <line x1="130" y1="95" x2="130" y2="196" stroke="#7A5410" strokeWidth="2" />
              <path
                d="M33 196 L227 196 L203 241 L57 241 Z"
                fill="#141210"
                stroke="#7A5410"
                strokeWidth="1.6"
              />
              <text
                x="130"
                y="176"
                textAnchor="middle"
                className="font-display"
                fontSize="13"
                letterSpacing="3"
                fill="#8C857A"
              >
                {clt.rotulo}
              </text>
              <text
                x="130"
                y="227"
                textAnchor="middle"
                className="font-numero"
                fontSize="30"
                fontWeight="500"
                fill="#8C857A"
              >
                {clt.valor}
              </text>
            </motion.g>

            {/* prato leve */}
            <motion.g initial={semMovimento ? false : { y: 0 }} {...mov({ y: -46 })}>
              <line x1="650" y1="95" x2="650" y2="196" stroke="#C9922B" strokeWidth="2" />
              <path
                d="M553 196 L747 196 L723 241 L577 241 Z"
                fill="#1B1813"
                stroke="#C9922B"
                strokeWidth="1.6"
              />
              <text
                x="650"
                y="176"
                textAnchor="middle"
                className="font-display"
                fontSize="13"
                letterSpacing="3"
                fill="#C9922B"
              >
                {ia.rotulo}
              </text>
              <text
                x="650"
                y="227"
                textAnchor="middle"
                className="font-numero"
                fontSize="30"
                fontWeight="500"
                fill="#F3DFA8"
              >
                {ia.valor}
              </text>
            </motion.g>
          </svg>

          <div className="mt-16 grid w-full gap-px border border-[var(--linha-fria)] bg-[var(--linha-fria)] sm:grid-cols-3">
            <Celula titulo="Custo por hora · humano" valor={clt.hora}>
              176 horas úteis no mês, das 9h às 18h, de segunda a sexta.
            </Celula>
            <Celula titulo="Custo por hora · agente" valor={ia.hora} dourado>
              720 horas no mês. Todos os dias, incluindo feriado e madrugada.
            </Celula>
            <Celula titulo="Tempo até responder" valor={resposta} dourado>
              Sem fila, sem “retorno amanhã”, sem lead esfriando no visto.
            </Celula>
          </div>
        </div>
      </div>
    </section>
  );
}

function Celula({
  titulo,
  valor,
  dourado,
  children,
}: {
  titulo: string;
  valor: string;
  dourado?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-obsidiana p-7">
      <p className="mb-3 font-display text-[0.58rem] uppercase tracking-[0.32em] text-neutro">
        {titulo}
      </p>
      <p
        className={`font-numero text-[2.5rem] font-medium leading-none ${
          dourado ? "text-ouro" : "text-marfim"
        }`}
      >
        {valor}
      </p>
      <p className="mt-2.5 text-[0.82rem] leading-relaxed text-neutro">{children}</p>
    </div>
  );
}
