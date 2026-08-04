import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { site, linkZap } from "../data/site";

export default function Fechamento() {
  return (
    <section className="relative overflow-hidden py-28 text-center sm:py-32">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[min(800px,110vw)] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(201,146,43,0.12), transparent 68%)",
        }}
      />
      <div className="faixa relative">
        <Reveal>
          <p className="mb-5 font-display text-[0.6rem] uppercase tracking-[0.42em] text-ouro">
            Próximo passo
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="titulo">
            {site.cliente.tratamento}, o agente pode estar
            <br />
            <em className="not-italic text-ouro">atendendo ainda esta semana.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="subtexto mx-auto mb-9">
            Basta escolher um plano. A implementação começa no dia seguinte ao aceite.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <motion.a
            href={linkZap(
              `Olá! Sou o ${site.cliente.tratamento}. Recebi a proposta da ${site.agencia} e gostaria de conversar.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block bg-ouro px-12 py-5 font-display text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[#0A0805] hover:shadow-[0_16px_44px_rgba(201,146,43,0.28)]"
          >
            Falar no WhatsApp
          </motion.a>
        </Reveal>
        <Reveal delay={0.32}>
          <p className="mt-9 text-[0.78rem] tracking-wide text-neutro">
            Proposta válida por{" "}
            <b className="font-medium text-ouro">{site.proposta.validadeDias} dias</b> a partir de{" "}
            {site.proposta.emitidaEm}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
