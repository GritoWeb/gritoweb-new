import Servico1 from "../../../public/images/home/gritoweb-person-asset-1.png";
import Image from "next/image";

export default function Servicos() {
    return (
        <>
            <div className="bg-background px-8 py-6 lg:px-32">
                <div className="lg:flex lg:justify-evenly items-center">
                    <div className="lg:w-[30%]">
                        <h1 className="text-primary font-light">
                            Soluções <strong className="font-bold">inteligentes</strong>
                        </h1>
                        <h4 className="text-secondary lowercase">
                            para o seu negócio
                        </h4>
                    </div>

                    {/* Hero - pegar imagem certa do hero */}
                    <div className="mt-8 flex justify-center">
                        <Image 
                            src={Servico1} 
                            alt="Hero página"
                            className="w-[100%]"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
