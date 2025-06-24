'use client'
import { Easing, motion } from "framer-motion";

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
            transition: { duration: 1, ease: [0.42, 0, 0.58, 1] as Easing }
        }
    };

    return(
        <div
        ref={gatilhoRef}
        >
            <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            className="lg:flex lg:justify-evenly lg:items-center bg-white p-8 lg:p-0 lg:rounded-[999px_4rem_4rem_999px] rounded-4xl"
        >
            <div>
                <Image src={img} alt={imgAlt} className=" lg:max-w-[490px] rounded-full mb-8 lg:mb-0" />
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
        </div>
    )
}