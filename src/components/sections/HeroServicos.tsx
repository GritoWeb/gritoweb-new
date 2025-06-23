'use client'

import {  motion } from "framer-motion";

import Image from "next/image";
import HeroImg from "../../assets/images/solucoes-hero.png"

export default function HeroServicos() {


    return (
        <>
            <div 
            className="lg:flex lg:justify-between lg:items-center lg:mt-64">
                <div>
                    <h1 className="text-primary font-light">Soluções<br /><strong className="font-bold lg:font-black">inteligentes</strong></h1>
                    <span className="text-2xl  lg:text-5xl text-secondary lowercase">para o seu negócio</span>
                </div>


<motion.div
    initial={{ clipPath: "inset(0 0 0 100%)" }}
    animate={{ clipPath: "inset(0 0% 0 0)" }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className="my-8 flex justify-center lg:absolute lg:top-[5%] lg:left-[42%] lg:w-[850px] relative"
>
    <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
    >
        <Image
            src={HeroImg}
            alt="Hero página"
        />
    </motion.div>
</motion.div>

            </div>
        </>
    );
}
