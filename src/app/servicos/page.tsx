'use client'

import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

import Solucao1 from "../../assets/images/solucoes-1.png";
import Solucao2 from "../../assets/images/solucoes-2.svg";

import Seta from "../../assets/icons/gritoweb-icon-arrow-with-line-1.svg";
import SetaInvertida from "../../assets/icons/gritoweb-icon-arrow-with-line-2.svg";
import Image from "next/image";

import HeroServicos from "../../components/sections/HeroServicos";
import ServicosItem from "../../components/sections/ServicosItem";
import Clientes from "../../components/sections/Clientes";


export default function Servicos() {

    const gatilhoRef = useRef(null);
    const isInView = useInView(gatilhoRef, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const variants = {
        hidden: { clipPath: "inset(0 100% 0 0)" },
        visible: { 
            clipPath: "inset(0 0% 0 0)", 
            transition: { duration: 1, ease: [0.42, 0, 0.58, 1] } // Corrigido aqui
        }
    };

    return (
        <>
            <div className="bg-background px-8 py-6 lg:px-0">
                <HeroServicos />
                <motion.div
                    initial={{ clipPath: "inset(0 0 100% 0)" }}
                    animate={{ clipPath: "inset(0 0 0 0)" }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                    className="flex justify-center  lg:mt-0"
                >
                    <Image className="rotate-50 w-30 lg:w-60 mt-0 ml-0 lg:mt-[-2.5rem] lg:ml-[-18rem]" src={Seta} alt="Seta apontado para baixo" />
                </motion.div>
                
                <div className="mt-16 flex flex-col lg:mb-8"
                    ref={gatilhoRef}>
                    <div>
                        <ServicosItem
                            title="Soluções em "
                            titleSec="WordPress"
                            subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                            text=" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            text2="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Aldus PageMaker including versions of Lorem Ipsum."
                            image={Solucao1}
                            inverter={true}
                        />
                    </div>
                    
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        className="flex justify-center lg:mb-[-6.25rem]"
                    >
                        <Image className="hidden lg:block rotate-150 w-30 lg:w-60" src={SetaInvertida} alt="Seta apontado para baixo" />
                    </motion.div>
                    
                    <div>
                        <ServicosItem
                            title="E-Commerce"
                            titleSec=""
                            subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                            text=" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            text2="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Aldus PageMaker including versions of Lorem Ipsum."
                            image={Solucao2}
                            inverter={false}
                        />
                    </div>
                    
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        className="flex justify-center lg:mb-[-12.5rem]"
                    >
                        <Image className="hidden lg:block rotate-60 w-30 lg:w-60" src={SetaInvertida} alt="Seta apontado para baixo" />
                    </motion.div>
                    
                    <div>
                        <ServicosItem
                            title="Soluções "
                            titleSec="Digitais"
                            subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                            text=" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            text2="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Aldus PageMaker including versions of Lorem Ipsum."
                            image={Solucao1}
                            inverter={true}
                        />
                    </div>
                </div>
            </div>

            <div className="px-8 ">
                <Clientes />
            </div>
        </>
    );
}