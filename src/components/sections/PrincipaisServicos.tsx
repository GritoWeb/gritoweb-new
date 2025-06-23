'use client'

import { motion, useAnimation } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"

import Image from "next/image"
import Servico1 from "../../assets/images/gritoweb-person-asset-1.png"
import Servico2 from "../../assets/images/gritoweb-person-asset-2.png"
import Servico3 from "../../assets/images/gritoweb-person-asset-3.png"

import Botao from "../ui/Botao"
import Link from "next/link"

export default function PrincipaisServicos() {
    const gatilhoRef = useRef(null)
    const isInView = useInView(gatilhoRef, { once: true })
    const controls = useAnimation()
    const [clipDone, setClipDone] = useState([false, false, false])

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls])


    const variants = {
        hidden: { clipPath: "inset(0 100% 0 0)" },
        visible: { 
            clipPath: "inset(0 0% 0 0)", 
            transition: { duration: 1, ease: [0.42, 0, 0.58, 1] }
        }
    };

    // Helper to handle animation complete for each card
    const handleAnimationComplete = (idx: number) => {
        setClipDone(prev => {
            if (prev[idx]) return prev // já está true
            const arr = [...prev]
            arr[idx] = true
            return arr
        })
    }

    return(
    <>
        <section className="mt-12 p-4 md:p-8 lg:px-0" ref={gatilhoRef}>
            <div className="text-center md:text-left">
                <h2 className="capitalize text-primary font-bold text-2xl md:text-3xl lg:text-4xl">
                    Principais <span className="text-secondary">serviços</span>
                </h2>
            </div>

            <div className="px-2 md:px-0 lg:px-16">
                <div className="flex flex-col md:flex-row md:justify-around md:gap-4 lg:gap-4">

                {/* Serviço Wordpress */}
                <motion.div
                    className="mt-12 md:mt-12 lg:mt-18 w-full"
                    custom={0}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    style={clipDone[0] ? { clipPath: "none" } : undefined}
                    onAnimationComplete={() => handleAnimationComplete(0)}
                >
                    <div className="border-primary border-3 rounded-xl p-4 md:p-6 lg:h-97 relative">
                        <div className="overflow-visible flex justify-center pt-5 mt-[-3rem] md:mt-[-4rem] lg:mt-[-5rem]">
                            <Image src={Servico1} alt="Wordpress" className="w-[140px] md:w-[180px] lg:w-[250px]" />
                        </div>
                        <h3 className="text-primary mb-4 md:text-center">Word<span className="text-secondary">press</span></h3>
                        <p className="text-accent-500 md:text-center">Conte com um time especialista em desenvolvimento de soluções para WordPress.</p>
                    </div>
                </motion.div>

                {/* Serviço Soluções Digitais */}
                <motion.div
                    custom={0.5}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    className="mt-12 md:mt-12 lg:mt-18 w-full"
                    style={clipDone[1] ? { clipPath: "none" } : undefined}
                    onAnimationComplete={() => handleAnimationComplete(1)}
                >
                    <div className="border-secondary border-3 rounded-xl p-4 md:p-6 lg:h-97">
                        <div className="mt-[-6rem] md:mt-[-7rem] lg:hidden flex justify-center pt-5">
                            <Image src={Servico2} alt="Wordpress" width={140} className="md:w-[180px]" />
                        </div>
                        <h3 className="text-primary mb-4 md:text-center">Soluções <span className="text-secondary">Digitais</span></h3>
                        <p className="text-accent-500 md:text-center">Conte com um time especialista em desenvolvimento de soluções para WordPress.</p>
                    </div>
                    <div className="hidden lg:flex flex justify-center items-center pt-5 lg:pt-0 mt-[-7rem]">
                        <Image src={Servico2} alt="Wordpress" width={250}/>
                    </div>
                </motion.div>

                {/* Serviço E-Commerce */}
                <motion.div
                    custom={1}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    className="mt-12 md:mt-12 lg:mt-[-3.65rem] w-full"
                    style={clipDone[2] ? { clipPath: "none" } : undefined}
                    onAnimationComplete={() => handleAnimationComplete(2)}
                >
                    <div className="flex justify-end mr-[-27px] hidden lg:flex lg:mb-[-140px]">
                        <Image src={Servico3} alt="Wordpress" width={250} />
                    </div>
                    <div className="border-primary border-3 rounded-xl p-4 md:p-6 lg:h-97 lg:flex justify-end lg:flex-col">
                        <h3 className="text-secondary mb-4 md:text-center">E-<span className="text-primary">Commerce</span></h3>
                        <p className="text-accent-500 md:text-center">Conte com um time especialista em desenvolvimento de soluções para WordPress.</p>
                        <div className="mb-[-4rem] md:mb-[-6rem] flex justify-end pt-5 mr-[-27px] lg:hidden">
                            <Image src={Servico3} alt="Wordpress" width={140} className="md:w-[180px]" />
                        </div>
                    </div>
                </motion.div>
                </div>

                <div className="hidden md:flex justify-end mt-8 md:mt-24">
                    <Link href="/" className="text-primary text-2xl md:text-3xl font-semibold hover:text-secondary">Saiba Mais</Link>
                </div>
            </div>

            {/* BOTÃO Saiba Mais */}
            <div className="flex justify-center mt-24 md:hidden ">
                <Botao url="/">Saiba Mais</Botao>
            </div>
        </section>
    </>
);
}