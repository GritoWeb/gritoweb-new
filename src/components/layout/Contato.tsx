import LogoMin from "../../assets/icons/gritoweb-favicon.svg"
import Image from "next/image"
import ImagemContato from "../../assets/images/gritoweb-person-asset-4.png"
import Setas from "../../assets/icons/gritoweb-arrow-path.svg"
import Link from "next/link"

export default function Contato() {
    return(
        <div className="bg-background"> 
        <hr className="border-accent-300"/>
            <div className="flex justify-center pt-8 gap-2">
                <Image src={LogoMin} alt="Logo GritoWeb" className="w-25 lg:w-35"/>
                <h2 className="font-light text-primary">Fale com<br/><span className="font-bold text-secondary">a gente!</span></h2>
            </div>


            <div className="flex justify-evenly items-center">
                <div className="hidden lg:block lg:w-[33%]">
                    <Image src={Setas} alt="Sequência de setas" />
                    <div className="flex gap-2 justify-center">
                        <div><Link href="/" target="_blank">inst</Link></div>
                        <div><Link href="/" target="_blank">link</Link></div>
                    </div>
                </div>

                <div className="flex justify-center items-center flex-col mt-12 lg:m-0 gap-4 lg:w-[33%]"> 
                    <div className="border-3 text-primary px-4 py-2 rounded-4xl text-center lg:w-[320px]">
                        <span className="text-sm lg:text-2xl">contato@gritoweb.com</span>
                    </div>

                    <div className="border-3 border-[#1AAB93] text-primary px-4 py-2 text-center rounded-4xl lg:w-[320px]">
                        <span className="text-xl lg:text-2xl">(15) 99739-4486</span>
                    </div>
                </div>

                <div className="lg:w-[33%] hidden lg:block">
                    <Image src={ImagemContato} alt="Imagem de contato"/>
                </div>
            </div>

            

            <div className="flex justify-center mt-8 lg:hidden">
                <Image src={ImagemContato} alt="Contate-nos" width={220} />
            </div>
        </div>
    )
}