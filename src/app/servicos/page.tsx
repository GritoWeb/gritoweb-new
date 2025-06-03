import Servico4 from "../../assets/images/gritoweb-person-asset-4.png";
import Servico1 from "../../assets/images/gritoweb-person-asset-1.png";
import Seta from "../../assets/icons/gritoweb-icon-arrow-with-line-1.svg"
import Image from "next/image";

import Hero from "../../components/sections/Hero";
import ServicosItem from "../../components/sections/ServicosItem";
import Clientes from "../../components/sections/Clientes";

export default function Servicos() {
    return (
        <>
            <div className="bg-background px-8 py-6 lg:px-0">
                <Hero title="Soluções" titleBold="inteligentes" subTitle="para o seu negócio" tag={null} img={Servico4} />
                <div className="flex justify-center">
                    <Image className="rotate-50 w-30 lg:w-60 lg:mt-[-50px] lg:ml-[-12rem]" src={Seta} alt="Seta apontado para baixo" />
                </div>
                
                <div className="mt-32 flex flex-col gap-16 lg:px-64 lg:mb-8">
                    <ServicosItem title="Soluções em " titleSec="WordPress" subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry" text=" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." text2="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Aldus PageMaker including versions of Lorem Ipsum." image={Servico1} inverter={true} />
                    <ServicosItem title="E-Commerce" titleSec="" subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry" text=" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." text2="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Aldus PageMaker including versions of Lorem Ipsum." image={Servico1} inverter={false} />
                    <ServicosItem title="Soluções " titleSec="Digitais" subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry" text=" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." text2="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Aldus PageMaker including versions of Lorem Ipsum." image={Servico1} inverter={true} />
                </div>
            </div>

            <div className="px-8 ">
                <Clientes />
            </div>
        </>
    );
}
