import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/** Revela o conteúdo quando ele entra em cena, uma vez só. */
export default function Reveal({ children, delay = 0, y = 28, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const emCena = useInView(ref, { once: true, margin: "-70px" });
  const semMovimento = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={semMovimento ? false : { opacity: 0, y }}
      animate={emCena || semMovimento ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
