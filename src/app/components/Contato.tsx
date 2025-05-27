import LogoMin from "../../../public/icons/gritoweb-favicon.svg"
import Image from "next/image"
import ImagemContato from "../../../public/images/home/gritoweb-person-asset-1.png"

export default function Contato() {
    return(
        <>
            <div className="flex justify-center mt-8 gap-2">
                <Image src={LogoMin} alt="Logo GritoWeb" width={90}/>
                <h2 className="font-light text-primary">Fale com<br/><span className="font-bold text-secondary">a gente!</span></h2>
            </div>

            <div className="flex justify-center items-center flex-col mt-12 gap-4"> 
                <div className="border-3 text-primary px-4 py-2 rounded-4xl text-center w-[280px]">
                    <span className="text-sm">contato@gritoweb.com</span>
                </div>

                <div className="border-3 border-[#1AAB93] text-primary px-4 py-2 text-center rounded-4xl w-[280px]">
                    <span className="text-xl">(15) 99739-4486</span>
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <Image src={ImagemContato} alt="Contate-nos" width={220} />
            </div>
        </>
    )
}