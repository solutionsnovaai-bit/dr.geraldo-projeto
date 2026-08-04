import { motion, useReducedMotion } from "framer-motion";

/**
 * Abertura: o monograma do escritório emerge do preto enquanto
 * uma lâmina de luz dourada varre a peça, como metal sendo revelado.
 */
export default function Loader({ saindo }: { saindo: boolean }) {
  const semMovimento = useReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-obsidiana"
      initial={{ opacity: 1 }}
      animate={{ opacity: saindo ? 0 : 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{ pointerEvents: saindo ? "none" : "auto" }}
      aria-hidden={saindo}
    >
      <div className="relative">
        <motion.img
          src="/monograma.webp"
          alt=""
          className="w-[92px] sm:w-[112px]"
          initial={semMovimento ? false : { opacity: 0, scale: 0.9, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* lâmina de luz varrendo o metal */}
        {!semMovimento && (
          <motion.div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.2, times: [0, 0.2, 0.75, 1], delay: 0.5 }}
          >
            <motion.div
              className="absolute inset-y-0 w-1/2 -skew-x-12"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(243,223,168,0.55), transparent)",
              }}
              initial={{ x: "-150%" }}
              animate={{ x: "250%" }}
              transition={{ duration: 1.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        )}
      </div>

      <motion.p
        className="mt-9 font-display text-[0.6rem] uppercase tracking-[0.46em] text-neutro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        Proposta Comercial
      </motion.p>
    </motion.div>
  );
}
