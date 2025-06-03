import Image from "next/image"
import Servico1 from "../../assets/images/gritoweb-person-asset-1.png"
import Servico2 from "../../assets/images/gritoweb-person-asset-2.png"
import Servico3 from "../../assets/images/gritoweb-person-asset-3.png"

export default function PrincipaisServicos() {
    return(
        <>
            <section className="mt-12 p-4 lg:px-64">
                <div className="text-center lg:text-left">
                    <h2 className="capitalize text-primary font-bold">Principais <span className="text-secondary">serviços</span></h2>
                </div>

                {/* Serviço Wordpress */}
                <div className="lg:flex lg:justify-around lg:gap-4 lg:px-16">
                    <div className="mt-18">
                    <div className="border-primary border-3 rounded-xl p-6 lg:h-97">
                        <div className="mt-[-80px] flex justify-center pt-5">
                        <Image src={Servico1} 
                        alt="Wordpress"
                        className="w-[190px] lg:w-[250px]" />
                        </div>
                        <h3 className="text-primary mb-4 lg:text-center">Word<span className="text-secondary">press</span></h3>
                        <p className="text-accent-500 lg:text-center">Conte com um time especialista em desenvolvimento de soluções para WordPress.</p>
                    </div>
                    </div>

                    {/* Serviço Soluções Digitais */}
                    <div className="mt-36 lg:mt-18" >
                    <div className="border-secondary border-3 rounded-xl p-6 lg:h-97">
                        <div className="mt-[-160px] lg:hidden flex justify-center pt-5">
                        <Image src={Servico2} 
                        alt="Wordpress"
                        width={190} />
                        </div>
                        <h3 className="text-primary mb-4 lg:text-center">Soluções <span className="text-secondary">Digitais</span></h3>
                        <p className="text-accent-500 lg:text-center">Conte com um time especialista em desenvolvimento de soluções para WordPress.</p>

                        
                    </div>
                    <div className="hidden lg:flex flex justify-center items-center pt-5 lg:pt-0 mt-[-170px]">
                            <Image src={Servico2} 
                            alt="Wordpress"
                            width={250}/>
                        </div>
                    </div>

                    {/* Serviço E-Commerce */}
                    <div className="mt-12 lg:mt-[-3.65rem]">
                        <div className="flex justify-end mr-[-27px] hidden lg:flex lg:mb-[-140px]">
                            <Image src={Servico3} 
                            alt="Wordpress"
                            width={250} />
                        </div>
                        <div className="border-primary border-3 rounded-xl p-6 lg:h-97 lg:flex justify-end lg:flex-col">
                                <h3 className="text-secondary mb-4 lg:text-center">E-<span className="text-primary">Commerce</span></h3>
                                <p className="text-accent-500 lg:text-center">Conte com um time especialista em desenvolvimento de soluções para WordPress.</p>
                                <div className="mb-[-120px] flex justify-end pt-5 mr-[-27px] lg:hidden">
                                <Image src={Servico3} 
                                alt="Wordpress"
                                width={190} />
                            </div>
                        </div>
                    </div>
                </div>
            
            </section>
        </>
    )
}