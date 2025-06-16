import Image from "next/image";
import HeroImg from "../../assets/images/solucoes-hero.png"

export default function HeroServicos() {
    return (
        <>
            <div className="lg:flex lg:justify-between lg:items-center lg:px-64 lg:mt-64">
                <div>
                    <h1 className="text-primary font-light">Soluções<br /><strong className="font-bold lg:font-black">inteligentes</strong></h1>
                    <span className="text-2xl  lg:text-5xl text-secondary lowercase">para o seu negócio</span>
                </div>

                <div className="my-8 flex justify-center lg:absolute lg:top-[6%] lg:left-[42%] lg:w-[850px] relative">
                    <Image src={HeroImg} 
                    alt="Hero página"
                    className="absolute "
                    />
                </div>
            </div>
        </>
    );
}
