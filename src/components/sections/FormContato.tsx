import FormImg from "@/assets/images/contato-form.svg"
import Image from "next/image"

export default function FormContato() {
    return(
        <div className="bg-secondary rounded-xl p-8 lg:p-12 lg:w-[35%] my-8 lg:my-0 relative">
                <Image src={FormImg} alt="Pessoas apoiada no formulário" className="absolute top-[-7rem] right-[-4rem]" />
                <form action="/contato" method="post" className="flex flex-col gap-3 items-center">
                    <label className="w-full border-2 border-white px-8 py-4 rounded-full" htmlFor=""><input className="placeholder:text-white placeholder:font-light text-white font-light focus:outline-none" type="text" placeholder="Nome:" /></label>
                    <label className="w-full border-2 border-white px-8 py-4 rounded-full" htmlFor=""><input className="placeholder:text-white placeholder:font-light text-white font-light focus:outline-none" type="email" placeholder="E-mail:" /></label>
                    <label className="w-full border-2 border-white px-8 py-4 rounded-full" htmlFor=""><input className="placeholder:text-white placeholder:font-light text-white font-light focus:outline-none" type="tel" placeholder="Telefone:" /></label>
                    <label className="w-full border-2 border-white px-8 py-4 rounded-full" htmlFor=""><input className="placeholder:text-white placeholder:font-light text-white font-light focus:outline-none" type="text" placeholder="Empresa:" /></label>
                    <label htmlFor=""><input className="text-1xl mt-8 bg-primary px-6 py-3 text-white font-bold rounded-full cursor-pointer" type="submit" value="Agendar uma Call" /></label>
                </form>
            </div>
    )
}