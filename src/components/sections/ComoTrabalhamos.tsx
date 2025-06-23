'use client'

import {  motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import ComoTrabalhamosItem from "../ui/ComoTrabalhamosItem";
import ComoTrabalhamosImg from "../../assets/images/gritoweb-person-asset-4.png";
import SetaBaixo from "../../assets/icons/gritoweb-icon-arrow-with-line-1.svg";

export default function ComoTrabalhamos() {
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
            transition: { duration: 1, ease: [0.42, 0, 0.58, 1] }
        }
    };

    return (
        <section className="bg-background lg:pb-24 py-6 mt-12 px-8 lg:px-0">
            <div className="md:flex md:justify-between md:items-center md:flex-row-reverse">
                <div className="mt-[-55px] md:mt-0">
                    <Image src={ComoTrabalhamosImg} alt="Como Trabalhamos" />
                </div>

                <div className="text-left px-4 md:px-8 pb-12 md:pb-0 lg:p-0" ref={gatilhoRef}>
                    <h2 className="capitalize text-primary font-bold">
                        Como <br /><span className="text-secondary">Trabalhamos</span>
                    </h2>
                </div>
            </div>

            <div className="lg:flex lg:justify-evenly lg:gap-32 relative">

                {/* Item 1 */}
                <ComoTrabalhamosItem
                    title="Entendemos o seu negócio"
                    numberItem="1"
                    text1="No primeiro momento a equipe analisa o seu projeto por meio de uma visão macro e define quais serão os principais objetivos do seu negócio e quais valores que gostaria de agregar para sua marca."
                    text2="Também se torna possível montar uma estimativa de investimento para próxima etapa."
                />

                {/* Primeira Seta */}
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    className="lg:absolute flex justify-end my-[-20px] lg:w-50 lg:top-[-5rem] lg:left-75"
                >
                    <Image src={SetaBaixo} alt="Seta Baixo" className="w-26 lg:w-250 rotate-90 lg:rotate-0 transform" />
                </motion.div>

                {/* Item 2 */}
                <ComoTrabalhamosItem
                    title="Definimos nossa estratégia"
                    numberItem="2"
                    text1="Estudar o público-alvo para melhor abordagem e quais ferramentas digitais e tecnologias aplicadas, serão os principais fundamentos de estudo nesta etapa, visando sempre atingir as metas."
                    text2="Nesta fase é permitido construir um planejamento que envolve prazo e total de investimento necessário para alcançar as metas."
                />

                {/* Segunda Seta */}
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    className="lg:absolute flex justify-end my-[-20px] lg:w-50 lg:bottom-[-5rem] lg:left-190"
                >
                    <Image src={SetaBaixo} alt="Seta Baixo" className="w-26 lg:w-250 rotate-90 lg:rotate-0 transform lg:scale-y-[-1]" />
                </motion.div>

                {/* Item 3 */}
                <ComoTrabalhamosItem
                    title="Desenvolvemos"
                    numberItem="3"
                    text1="Após todo o processo de análise da marca, o time especializado da GritoWeb entra em ação para desenvolver e/ou integrar todas as ferramentas digitais necessárias para o seu negócio alavancar no ramo de atuação."
                    text2="O feedback também é muito importante, sempre atualizamos o cliente sobre cada estratégia aplicada."
                />
            </div>
        </section>
    );
}
