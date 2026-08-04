import { motion, useReducedMotion } from "framer-motion";
import { site } from "../data/site";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero({ pronto }: { pronto: boolean }) {
  const semMovimento = useReducedMotion();
  const anima = (delay: number) =>
    semMovimento
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: pronto ? { opacity: 1, y: 0 } : {},
          transition: { duration: 1.1, delay, ease },
        };

  return (
    <header className="relative flex min-h-[100svh] flex-col items-center justify-end overflow-hidden px-6 pb-16 pt-10 text-center sm:pb-20">
      {/* A arte da marca sangra do topo e se dissolve no preto */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-[58svh] select-none sm:h-[64svh]"
        initial={semMovimento ? false : { opacity: 0, scale: 1.06 }}
        animate={pronto ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 2.2, ease }}
      >
        <picture>
          <source media="(max-width: 767px)" srcSet="/hero-mobile.webp" />
          <img
            src="/hero-desktop.webp"
            alt={`${site.cliente.tratamento} — ${site.cliente.escritorio}`}
            className="fusao-hero h-full w-full object-cover object-center"
            fetchPriority="high"
          />
        </picture>
      </motion.div>

      {/* O texto vive abaixo da arte, onde o fundo já é preto puro */}
      <div className="relative w-full">
        <motion.p
          className="mb-6 font-display text-[0.6rem] uppercase tracking-[0.44em] text-neutro"
          {...anima(0.35)}
        >
          {site.proposta.referencia}
        </motion.p>

        <motion.h1
          className="mx-auto mb-7 max-w-[17ch] font-display text-[clamp(1.6rem,4.4vw,3rem)] font-normal leading-[1.24]"
          {...anima(0.5)}
        >
          Atendimento jurídico que{" "}
          <span className="inline-block bg-gradient-to-br from-ouro-profundo via-ouro-claro to-ouro bg-clip-text text-transparent">
            não dorme, não falta e não pede aumento
          </span>
        </motion.h1>

        <motion.p className="text-[0.85rem] tracking-wide text-neutro" {...anima(0.65)}>
          Preparado para <b className="font-medium text-marfim">{site.cliente.tratamento}</b> ·{" "}
          {site.cliente.escritorio}
          <br />
          {site.cliente.cidade}
        </motion.p>

        <motion.div
          className="mx-auto mt-11 h-[74px] w-px origin-top"
          style={{ background: "linear-gradient(180deg, var(--ouro), transparent)" }}
          initial={semMovimento ? false : { scaleY: 0, opacity: 0 }}
          animate={pronto ? { scaleY: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.9, ease }}
        />
      </div>
    </header>
  );
}
