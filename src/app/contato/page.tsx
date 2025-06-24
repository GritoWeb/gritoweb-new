import InformaçõesContato from "@/components/sections/InformaçõesContato"
import WordpressImg from "@/assets/images/solucoes-1.png"
import CarrinhoImg from "@/assets/images/solucoes-2.svg"
import FormContato from "@/components/sections/FormContato"
import Image from "next/image"

import EstrelaImg from "@/assets/images/contato-estrela.svg"

export const metadata = {
  title: "GritoWeb | Contato",
  // ...outros metadados...
};

export default function Contato() {
    return(
        <>
        <div className="p-8 md:p-12 lg:p-0 lg:gap-16 lg:py-48 bg-background lg:flex lg:justify-evenly lg:items-center relative z-[-3] overflow-x-hidden lg:overflow-visible">
            <Image src={EstrelaImg} alt="" className="absolute top-0 right-0 z-[-1] lg:left-[43%] lg:top-25" />
            <div className="lg:w-[55%] mb-32">
                <h2 className="text-primary font-extralight text-2xl md:text-3xl lg:text-4xl">
                    Fale com nossos especialistas e <br/>
                    <span className="text-primary font-bold"> alavanque seu negócio com soluções digitais personalizadas!</span>
                </h2>
            </div>
            <FormContato />
        </div>

        <div className="px-4 md:px-8 lg:p-0 bg-background flex flex-col gap-16 md:gap-12 lg:gap-16 lg:pb-16">
            <InformaçõesContato
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                img={WordpressImg}
                imgAlt="Img"
                text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                text2="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                inverter={false}
            />
            <InformaçõesContato
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                img={CarrinhoImg}
                imgAlt="Img"
                text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                text2="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                inverter={true}
            />
            <InformaçõesContato
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                img={WordpressImg}
                imgAlt="Img"
                text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                text2="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                inverter={false}
            />
        </div>
        </>
    )
}