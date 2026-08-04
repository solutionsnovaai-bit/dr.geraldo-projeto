import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Balanca from "./components/Balanca";
import Planos from "./components/Planos";
import Transparencia from "./components/Transparencia";
import Etapas from "./components/Etapas";
import Fechamento from "./components/Fechamento";
import Rodape from "./components/Rodape";
import ZapFlutuante from "./components/ZapFlutuante";

export default function App() {
  const [saindo, setSaindo] = useState(false);
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    const t1 = window.setTimeout(() => setSaindo(true), 2600);
    const t2 = window.setTimeout(() => setPronto(true), 3000);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <>
      <Loader saindo={saindo} />
      <main>
        <Hero pronto={pronto} />
        <Balanca />
        <Planos />
        <Transparencia />
        <Etapas />
        <Fechamento />
      </main>
      <Rodape />
      <ZapFlutuante />
    </>
  );
}
