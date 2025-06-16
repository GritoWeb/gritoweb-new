import HeroImg from "../assets/images/hero-home.png"

import Hero from "../components/sections/Hero"
import PrincipaisServicos from "../components/sections/PrincipaisServicos";
import Clientes from "../components/sections/Clientes";
import ComoTrabalhamos from "../components/sections/ComoTrabalhamos";

export default function Home() {
  return (
    <>
    {/* H1 */}
      <div className="bg-background px-8 py-6 lg:px-0">
        <Hero title="Estabeleça" titleBold="sua marca" subTitle="no mercado " tag="digital_" img={HeroImg} />

        {/* Texto Hero */}
        <div className="mt-12">
          <p className="text-primary text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        </div>

        {/* Adicionar seta para baixo */}

        {/* SECTION Principais Serviços */}
        <PrincipaisServicos />

        {/* BUTTON Saiba Mais */}

      </div>


      {/* SECTION Clientes */}
      <div id="clientes">
        <Clientes />
      </div>
      

      {/* SECTION Como Trabalhamos */}
      <ComoTrabalhamos />
    </>
  );
}
