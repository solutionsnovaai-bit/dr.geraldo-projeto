import Reveal from "./Reveal";
import { porNossaConta, porContaDoEscritorio } from "../data/planos";
import { site } from "../data/site";

export default function Transparencia() {
  return (
    <section className="py-24 sm:py-28">
      <div className="faixa">
        <Reveal>
          <div className="rotulo">Sem letra miúda</div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="titulo">
            O que entra no valor{" "}
            <em className="not-italic text-ouro">e o que não entra</em>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="subtexto">
            Preferimos deixar isso claro na proposta a explicar depois da
            primeira fatura.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal delay={0.2}>
            <Caixa titulo="Por nossa conta" destaque>
              <Lista itens={porNossaConta} />
              <Nota>
                O escritório não precisa comprar aparelho, contratar linha nem
                deixar um celular ligado num canto da sala. Chegamos com a
                estrutura pronta.
              </Nota>
            </Caixa>
          </Reveal>

          <Reveal delay={0.3}>
            <Caixa titulo="Contratado direto pelo escritório">
              <Lista itens={porContaDoEscritorio} />
              <Nota>
                As assinaturas de IA somam{" "}
                <b className="font-medium text-marfim">
                  aproximadamente R$ 180 por mês
                </b>{" "}
                e são pagas pelo escritório diretamente às plataformas — sem
                intermediação e sem margem nossa. São elas que sustentam o
                agente, então a contratação é condição para o desenvolvimento e
                a gestão. A verba de anúncios é definida pelo{" "}
                {site.cliente.tratamento} e paga direto à Meta.
              </Nota>
            </Caixa>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Caixa({
  titulo,
  destaque,
  children,
}: {
  titulo: string;
  destaque?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`h-full px-8 py-9 ${
        destaque
          ? "border border-[var(--linha)] bg-[rgba(201,146,43,0.03)]"
          : "border border-[var(--linha-fria)] bg-superficie"
      }`}
    >
      <h4
        className={`mb-6 font-display text-[0.72rem] font-medium uppercase tracking-[0.26em] ${
          destaque ? "text-ouro" : "text-marfim"
        }`}
      >
        {titulo}
      </h4>
      {children}
    </div>
  );
}

function Lista({ itens }: { itens: string[] }) {
  return (
    <ul className="list-none">
      {itens.map((i) => (
        <li
          key={i}
          className="relative py-2.5 pl-5 text-[0.885rem] leading-relaxed text-[#CFC9BC] before:absolute before:left-0 before:top-[1.02em] before:h-px before:w-[7px] before:bg-ouro"
        >
          {i}
        </li>
      ))}
    </ul>
  );
}

function Nota({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 border-t border-[var(--linha-fria)] pt-5 text-[0.83rem] leading-[1.75] text-neutro">
      {children}
    </p>
  );
}
