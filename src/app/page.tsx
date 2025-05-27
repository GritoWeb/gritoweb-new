import Servico1 from "../../public/images/home/gritoweb-person-asset-1.png"
import Servico2 from "../../public/images/home/gritoweb-person-asset-2.png"
import Servico3 from "../../public/images/home/gritoweb-person-asset-3.png"
import ComoTrabalhamos from "../../public/images/home/gritoweb-person-asset-4.png"
import SetaBaixo from "../../public/icons/gritoweb-icon-arrow-with-line-1.svg"
import Image from "next/image";

import Clientes from "./components/Clientes";
import Botão from "./components/Botão";
import ComoTrabalhamosItem from "./components/ComoTrabalhamosItem";

export default function Home() {
  return (
    <>
    {/* H1 */}
      <div className="bg-background px-8 py-6 lg:px-32">
        <div className="lg:flex lg:justify-evenly items-center">
          <div className="lg:w-[30%]">
            <h1 className="text-primary font-light">Estabeleça <strong className="font-bold">sua marca</strong></h1>
            <h4 className="text-secondary lowercase">No mercado <span className="bg-secondary text-white px-[2px] rounded-lg">digital_</span></h4>
          </div>

          {/* Hero - pegar imagem certa do hero */}
          <div className="mt-8 flex justify-center">
            <Image src={Servico1} 
            alt="Hero página"
            className="w-[100%]"
            />
          </div>
        </div>

        {/* Texto Hero */}
        <div className="mt-12">
          <p className="text-primary text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        </div>

        {/* Adicionar seta para baixo */}

        {/* SECTION Principais Serviços */}
        <section className="mt-12 p-4">
          <div className="text-center">
            <h2 className="capitalize text-primary font-bold">Principais <span className="text-secondary">serviços</span></h2>
          </div>

          {/* Serviço Wordpress */}
          <div className="lg:flex">
            <div className="mt-18">
              <div className="border-primary border-3 rounded-xl p-6">
                <div className="mt-[-80px] flex justify-center pt-5">
                  <Image src={Servico1} 
                  alt="Wordpress"
                  width={190} />
                </div>
                <h3 className="text-primary mb-4">Word<span className="text-secondary">press</span></h3>
                <p className="text-accent-500">Conte com um time especialista em desenvolvimento de soluções para WordPress.</p>
              </div>
            </div>

            {/* Serviço Soluções Digitais */}
            <div className="mt-36">
              <div className="border-secondary border-3 rounded-xl p-6">
                <div className="mt-[-160px] flex justify-center pt-5">
                  <Image src={Servico2} 
                  alt="Wordpress"
                  width={190} />
                </div>
                <h3 className="text-primary mb-4">Soluções<br/><span className="text-secondary">Digitais</span></h3>
                <p className="text-accent-500">Conte com um time especialista em desenvolvimento de soluções para WordPress.</p>
              </div>
            </div>

            {/* Serviço E-Commerce */}
            <div className="mt-12">
              <div className="border-primary border-3 rounded-xl p-6">
                <h3 className="text-secondary mb-4">E-<span className="text-primary">Commerce</span></h3>
                <p className="text-accent-500">Conte com um time especialista em desenvolvimento de soluções para WordPress.</p>
                <div className="mb-[-120px] flex justify-end pt-5 mr-[-27px]">
                  <Image src={Servico3} 
                  alt="Wordpress"
                  width={190} />
              </div>
              </div>
            </div>
          </div>
          
        </section>

        {/* BUTTON Saiba Mais */}
        <div className="flex justify-center mt-36">
          <Botão url="/">Saiba Mais</Botão>
        </div>
      </div>


      {/* SECTION Clientes */}
      <Clientes />

      {/* SECTION Como Trabalhamos */}
      <section className="bg-background px-8 py-6 mt-12 lg:px-32">
        <div>
          <div className="mt-[-55px]">
            <Image src={ComoTrabalhamos} alt="Como Trabalhamos" />
          </div>

          <div className="text-left px-8 mb-12">
            <h2 className="capitalize text-primary font-bold">Como <span className="text-secondary">Trabalhamos</span></h2>
          </div>
        </div>

        <div>
          <ComoTrabalhamosItem title="Entendemos o seu negócio" numberItem="1" text1="No primeiro momento a equipe analisa o seu projeto por meio de uma visão macro e define quais serão os principais objetivos do seu negócio e quais valores que gostaria de agregar para sua marca." text2="Também se torna possível montar uma estimativa de investimento para próxima etapa." />
          <div className="flex justify-end">
            <Image src={SetaBaixo} alt="Seta Baixo" width={120} className="rotate-90" />
          </div>
          <ComoTrabalhamosItem title="Definimos nossa estratégia" numberItem="2" text1="Estudar o público-alvo para melhor abordagem e quais ferramentas digitais e tecnologias aplicadas, serão os principais fundamentos de estudo nesta etapa, visando sempre atingir as metas." text2="Nesta fase é permitido construir um planejamento que envolve prazo e total de investimento necessário para alcançar as metas." />
          <div className="flex justify-end">
            <Image src={SetaBaixo} alt="Seta Baixo" width={120} className="rotate-90" />
          </div>
          <ComoTrabalhamosItem title="Desenvolvemos" numberItem="3" text1="Após todo o processo de análise da marca, o time especializado da GritoWeb entra em ação para desenvolver e/ou integrar todas as ferramentas digitais necessárias para o seu negócio alavancar no ramo de atuação." text2="O feedback também é muito importante, sempre atualizamos o cliente sobre cada estratégia aplicada." />
        </div>
      </section>

    </>
  );
}
