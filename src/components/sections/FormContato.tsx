'use client'

import { motion } from "framer-motion"
import FormImg from "@/assets/images/contato-form.svg"
import Image from "next/image"

export default function FormContato() {
    return(
        <div className="bg-secondary rounded-xl p-4 md:p-8 lg:p-12 w-full md:max-w-xl lg:w-[35%] my-8 lg:my-0 relative mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <Image
                    src={FormImg}
                    alt="Pessoas apoiada no formulário"
                    className="absolute top-[-4rem] right-[-2rem] md:top-[-6rem] md:right-[-4rem] w-[120px] md:w-[180px]"
                />
            </motion.div>
            <form action="/contato" method="post" className="flex flex-col gap-3 items-center z-100">
                <label className="w-full border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-full">
                    <input
                        id="nome"
                        className="placeholder:text-white placeholder:font-light text-white font-light focus:outline-none bg-transparent w-full"
                        type="text"
                        placeholder="Nome:"
                        name="nome"
                    />
                </label>
                <label className="w-full border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-full">
                    <input
                        id="email"
                        className="placeholder:text-white placeholder:font-light text-white font-light focus:outline-none bg-transparent w-full"
                        type="email"
                        placeholder="E-mail:"
                        name="email"
                    />
                </label>
                <label className="w-full border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-full">
                    <input
                        id="telefone"
                        className="placeholder:text-white placeholder:font-light text-white font-light focus:outline-none bg-transparent w-full"
                        type="tel"
                        placeholder="Telefone:"
                        name="telefone"
                    />
                </label>
                <label className="w-full border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-full">
                    <input
                        id="empresa"
                        className="placeholder:text-white placeholder:font-light text-white font-light focus:outline-none bg-transparent w-full"
                        type="text"
                        placeholder="Empresa:"
                        name="empresa"
                    />
                </label>
                <input
                    className="text-1xl mt-8 bg-primary px-6 py-3 text-white font-bold rounded-full cursor-pointer w-full md:w-auto"
                    type="submit"
                    value="Agendar uma Call"
                />
            </form>
        </div>
    )
}