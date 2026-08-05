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
    <header className="relative flex min-h-[100svh] flex-col items-center justify-end overflow-hidden px-6 pb-16 pt-10 text-center sm:flex-row sm:items-center sm:justify-start sm:px-12 sm:pb-0 sm:pt-0 sm:text-left lg:px-20">
      {/* Mobile: arte ocupa o topo e dissolve no preto, como antes.
          Desktop: arte vira o fundo inteiro do header, ancorada à direita. */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-[58svh] select-none sm:inset-0 sm:h-full"
        initial={semMovimento ? false : { opacity: 0, scale: 1.06 }}
        animate={pronto ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 2.2, ease }}
      >
        <picture>
          <source media="(max-width: 767px)" srcSet="/hero-mobile.webp" />
          <img
            src="/hero-desktop.webp"
            alt={`${site.cliente.tratamento} — ${site.cliente.escritorio}`}
            className="h-full w-full object-cover object-center sm:object-right"
            fetchPriority="high"
          />
        </picture>
        {/* Só no desktop: gradiente pra garantir contraste do texto sobre a metade esquerda da arte */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-black via-black/55 to-transparent sm:block" />
      </motion.div>

      {/* Partículas douradas cobrindo o header inteiro — unifica a textura que já existe
          na imagem com a área de texto, sem depender de nenhum asset novo. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: [
            "radial-gradient(1px 1px at 8% 22%, rgba(214,178,90,0.55) 50%, transparent 51%)",
            "radial-gradient(1px 1px at 18% 63%, rgba(214,178,90,0.35) 50%, transparent 51%)",
            "radial-gradient(1.5px 1.5px at 32% 12%, rgba(214,178,90,0.4) 50%, transparent 51%)",
            "radial-gradient(1px 1px at 46% 78%, rgba(214,178,90,0.3) 50%, transparent 51%)",
            "radial-gradient(1px 1px at 61% 34%, rgba(214,178,90,0.45) 50%, transparent 51%)",
            "radial-gradient(1.5px 1.5px at 74% 58%, rgba(214,178,90,0.3) 50%, transparent 51%)",
            "radial-gradient(1px 1px at 88% 15%, rgba(214,178,90,0.4) 50%, transparent 51%)",
            "radial-gradient(1px 1px at 5% 88%, rgba(214,178,90,0.25) 50%, transparent 51%)",
            "radial-gradient(1.5px 1.5px at 25% 45%, rgba(214,178,90,0.35) 50%, transparent 51%)",
            "radial-gradient(1px 1px at 55% 92%, rgba(214,178,90,0.3) 50%, transparent 51%)",
            "radial-gradient(1px 1px at 95% 70%, rgba(214,178,90,0.35) 50%, transparent 51%)",
            "radial-gradient(1.5px 1.5px at 40% 30%, rgba(214,178,90,0.4) 50%, transparent 51%)",
          ].join(", "),
          backgroundRepeat: "repeat",
          backgroundSize: "480px 480px",
        }}
      />

      {/* Mobile: texto embaixo, centralizado, em área já preta.
          Desktop: texto sobreposto à esquerda, alinhado, vertical e compacto o suficiente
          pra realmente centralizar no meio do header. */}
      <div className="relative z-10 w-full sm:max-w-[42ch]">
        <motion.p
          className="mb-6 font-display text-[0.6rem] uppercase tracking-[0.44em] text-neutro"
          {...anima(0.35)}
        >
          {site.proposta.referencia}
        </motion.p>

        <motion.h1
          className="mx-auto mb-5 max-w-[17ch] font-display text-[clamp(1.6rem,4.4vw,3rem)] font-normal leading-[1.24] sm:mx-0 sm:max-w-none"
          {...anima(0.5)}
        >
          Captação de leads que{" "}
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
          className="mx-auto mt-8 h-[56px] w-px origin-top sm:mx-0"
          style={{ background: "linear-gradient(180deg, var(--ouro), transparent)" }}
          initial={semMovimento ? false : { scaleY: 0, opacity: 0 }}
          animate={pronto ? { scaleY: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.9, ease }}
        />
      </div>
    </header>
  );
}
