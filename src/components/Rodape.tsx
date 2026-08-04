import { site } from "../data/site";

export default function Rodape() {
  return (
    <footer className="border-t border-[var(--linha-fria)] py-14 text-center">
      <div className="faixa">
        <img
          src="/monograma.webp"
          alt=""
          className="mx-auto mb-7 w-[52px] opacity-60"
          loading="lazy"
        />
        <p className="text-[0.76rem] leading-[1.9] text-neutro">
          Proposta elaborada com exclusividade para
          <br />
          {site.cliente.tratamento} — {site.cliente.escritorio}
        </p>
        <p className="mt-4 font-display text-[0.62rem] uppercase tracking-[0.24em] text-marfim">
          Desenvolvido por {site.agencia}
        </p>
        <p className="mx-auto mt-8 max-w-[70ch] text-[0.7rem] leading-[1.8] text-[#5E594F]">
          Estimativa de custo do atendente CLT considerando remuneração mensal de R$ 2.200
          acrescida de INSS patronal, FGTS e provisões de férias, 13º e respectivos encargos. Não
          inclui vale-transporte, vale-refeição, exames admissionais nem provisão de rescisão — com
          esses itens, o valor real tende a ser superior. Custo do agente considera a mensalidade do
          plano de entrada somada às assinaturas de plataforma. Valores de referência para fins
          comparativos.
        </p>
        <p className="mt-6 text-[0.7rem] text-[#4E4A43]">
          © {site.ano} {site.agencia} · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
