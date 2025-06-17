import HeroIMg from "@/assets/images/sobrenos-hero.svg"
import HistoriaImg from "@/assets/images/sobrenos-1.svg"
import OndeChegamosImg from "@/assets/images/sobrenos-2.svg"
import HeroIcon from "@/assets/images/sobrenos-hero-title.svg"


import Image from "next/image"
import ServicosItem from "@/components/sections/ServicosItem"
import MentesCriativas from "@/components/sections/MentesCriativas"
import Clientes from "@/components/sections/Clientes"

import Link from "next/link"


export default function SobreNos() {
    return(
        <>
            <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:p-0 bg-background px-8">

                <div className="mt-8 flex justify-center lg:w-[50%]">
                    <Image src={HeroIMg} 
                    alt="Hero página"
                    />
                </div>

                <div className="mt-12 lg:mt-0">
                    <div className="text-primary font-light"><h1 className="flex items-center">Conheça a<Image className="mt-[-50px] w-20 lg:w-30" src={HeroIcon} alt="" /></h1><br /><strong className="font-bold lg:medium">Gritoweb</strong></div>
                    <p className="text-center text-primary mt-16">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </div>

            </div>


        <div className="lg:flex lg:flex-col lg:justify-between items-center lg:px-0 lg:gap-32 bg-background px-8">
            <div className="lg:my-16">
                seta
            </div>
            <ServicosItem title="Nossa" titleSec=" Historia" subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry" text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." text2="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." image={HistoriaImg} inverter={false} />

            <ServicosItem title="Onde chegamos" titleSec="" subTitle="Contrary to popular belief, Lorem Ipsum is not simply random text." text="It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." text2="" image={OndeChegamosImg} inverter={true} />
        </div>

        <div className=" bg-background lg:py-16">
            <MentesCriativas />
            <div className="text-center lg:flex lg:flex-col lg:gap-4 lg:mt-48 py-8">
                <h2 className="text-primary font-bold">Conheça nossos serviços e soluções para o seu negócio</h2>
            </div>
            <div className="flex justify-center lg:mt-16">
                <div className="px-6 py-2 rounded-4xl bg-secondary text-center text-2xl font-semibold mb-8 lg:mb-0">
                    <Link className="text-primary" href="">Saiba Mais</Link>
                </div>
            </div>
        </div>

        <div>
            <Clientes />
        </div>
            
        </>
    )
}