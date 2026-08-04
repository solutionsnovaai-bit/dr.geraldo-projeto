import Reveal from "./Reveal";
import { etapas } from "../data/planos";

export default function Etapas() {
  return (
    <section className="border-t border-[var(--linha-fria)] bg-carvao py-24 sm:py-28">
      <div className="faixa">
        <Reveal>
          <div className="rotulo">Do aceite ao primeiro caso</div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="titulo">
            Quatro etapas.{" "}
            <em className="not-italic text-ouro">Cerca de sete dias.</em>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px border border-[var(--linha-fria)] bg-[var(--linha-fria)] sm:grid-cols-2 lg:grid-cols-4">
          {etapas.map((e, i) => (
            <Reveal key={e.titulo} delay={i * 0.09} className="h-full">
              <div className="h-full bg-carvao px-7 py-9">
                <span className="mb-4 block font-numero text-[2.7rem] font-medium leading-none text-ouro">
                  {i + 1}
                </span>
                <h5 className="mb-3 font-display text-[0.82rem] font-medium uppercase tracking-[0.11em]">
                  {e.titulo}
                </h5>
                <p className="text-[0.85rem] leading-[1.7] text-neutro">{e.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
