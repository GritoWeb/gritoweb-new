'use client'

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion"

import LogoMin from "../../assets/icons/gritoweb-favicon.svg"
import Image from "next/image"
import ImagemContato from "../../assets/images/contato.svg"
import Setas from "../../assets/icons/gritoweb-arrow-path.svg"
import Link from "next/link"

export default function Contato() {

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

    return(
        <div    
            className="bg-background"
            ref={gatilhoRef}> 
        <hr className="border-accent-300"/>
            <div className="flex justify-center pt-8 gap-2">
                <Image src={LogoMin} alt="Logo GritoWeb" className="w-25 lg:w-35"/>
                <h2 className="font-light text-primary">Fale com<br/><span className="font-bold text-secondary">a gente!</span></h2>
            </div>


            <div className="flex justify-evenly items-center lg:mb-[-8px]">
                <motion.div className="hidden lg:block lg:w-[33%]"
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                >
                    <Image src={Setas} alt="Sequência de setas" />
                    <div className="flex gap-2 justify-center">
                        <div><Link href="/" target="_blank">inst</Link></div>
                        <div><Link href="/" target="_blank">link</Link></div>
                    </div>
                </motion.div>

                <div className="flex justify-center items-center flex-col mt-12 lg:m-0 gap-4 lg:w-[33%]"> 
                    <div className="border-3 text-primary px-4 py-2 rounded-4xl text-center lg:w-[320px]">
                        <Link href="mailto:contato@gritoweb.com" className="text-sm lg:text-2xl">contato@gritoweb.com</Link>
                    </div>

                    <div className="border-3 border-[#1AAB93] text-primary px-4 py-2 text-center rounded-4xl lg:w-[320px]">
                        <Link href="tel:15997394486" className="text-xl lg:text-2xl">(15) 99739-4486</Link>
                    </div>
                </div>

                <div className="lg:w-[33%] hidden lg:block ">
                    <Image src={ImagemContato} alt="Imagem de contato"  />
                </div>
            </div>

            

            <div className="flex justify-center mt-8 lg:hidden">
                <Image src={ImagemContato} alt="Contate-nos" width={220} className="mb-[-0.3rem] lg:mb-0" />
            </div>
        </div>
    )
}