'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroImg from "@/assets/images/hero-home.png"
import Image from "next/image";

const Hero = () => {
    const [displayedTag, setDisplayedTag] = useState("");
    const textDisplay = "digital_";

    useEffect(() => {
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex < textDisplay.length) {
                setDisplayedTag(textDisplay.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
    <div className="flex flex-col md:flex-row md:justify-between items-center px-6 md:px-12 lg:px-0">
        <div className="w-full md:w-1/2">
            <h1 className="text-primary font-light text-3xl md:text-5xl lg:text-7xl">
                Estabeleça<br />
                <strong className="font-bold lg:font-black">sua marca</strong>
            </h1>

            <span className="text-xl md:text-3xl lg:text-5xl text-secondary lowercase">
                no mercado 
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2}}
                    className="bg-secondary text-white px-[2px] rounded-lg ml-2"
                >
                    {displayedTag}
                </motion.span>
            </span>
        </div>

        <div className="mt-8 md:mt-0 flex justify-center w-full md:w-1/2">
            <Image src={HeroImg} alt="Hero página" className="max-w-[320px] md:max-w-[400px] lg:max-w-full h-auto" />
        </div>
    </div>
);
}

export default Hero;
