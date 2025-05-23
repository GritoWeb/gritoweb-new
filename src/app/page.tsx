import Servico1 from "../../public/images/home/gritoweb-person-asset-1.png"
import Servico2 from "../../public/images/home/gritoweb-person-asset-2.png"
import Servico3 from "../../public/images/home/gritoweb-person-asset-3.png"
import Image from "next/image";

import Botão from "./components/Botão";

export default function Home() {
  return (
    <>
    {/* H1 */}
      <div className="mt-16">
        <h1 className="text-primary font-light">Estabeleça <strong className="font-bold">sua marca</strong></h1>
        <h4 className="text-secondary lowercase">No mercado <span className="bg-secondary text-white px-[2px] rounded-lg">digital_</span></h4>
      </div>

      {/* Hero - pegar imagem certa do hero */}
      <div className="mt-8">
        <Image src={Servico1} 
        alt="Hero página" />
      </div>

      {/* Texto 1 */}
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
            <div className="mb-[-120px] flex justify-end pt-5">
              <Image src={Servico3} 
              alt="Wordpress"
              width={190} />
          </div>
          </div>
        </div>
      </section>

      {/* Botão Saiba Mais */}
      <div className="flex justify-center mt-36">
        <Botão url="/">Saiba Mais</Botão>
      </div>
    </>
  );
}
