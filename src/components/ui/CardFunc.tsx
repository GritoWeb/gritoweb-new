'use client'
import { motion } from "framer-motion";

import { useRef, useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface CardFuncDados {
    img: StaticImageData;
    imgAlt: string;
    title: string;
    subTitle: string;
    text1: string;
    text2: string | null;
}

const borderRadiusStyle = {
    borderRadius: "999px 2rem 2rem 999px"
};


export default function CardFunc ({ img, imgAlt, title, subTitle, text1, text2 }: CardFuncDados) {

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

    return(
        <motion.div
            ref={gatilhoRef}
            initial="hidden"
            animate={controls}
            variants={variants}
            style={borderRadiusStyle}
            className="lg:flex lg:justify-evenly lg:items-center bg-white p-8 lg:p-0"
        >
            <div>
                <Image src={img} alt={imgAlt} className=" lg:max-w-[490px] rounded-full" />
            </div>
            <div className="lg:w-[70%] lg:p-8">
                <div>
                    <h3 className="text-primary font-bold">{title}</h3>
                    <h4 className="text-secondary font-bold mt-[-10px]">{subTitle}</h4>
                </div>
                <div className="text-accent-500 mt-4">
                    <p>{text1}</p>
                    <br/>
                    <p>{text2}</p>
                </div>
            </div>
        </motion.div>
    )
}