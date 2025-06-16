import Image from "next/image"
import ComoTrabalhamosItem from "../ui/ComoTrabalhamosItem"
import ComoTrabalhamosImg from "../../assets/images/gritoweb-person-asset-4.png"
import SetaBaixo from "../../assets/icons/gritoweb-icon-arrow-with-line-1.svg"

export default function ComoTrabalhamos() {
    return(
        <>
            <section className="bg-background px-8 py-6 mt-12 lg:px-64">
            <div className="lg:flex lg:justify-between lg:items-center lg:flex-row-reverse">
                <div className="mt-[-55px] lg:mt-0">
                    <Image src={ComoTrabalhamosImg} alt="Como Trabalhamos" />
                </div> 

                <div className="text-left px-8 pb-12 lg:p-0">
                    <h2 className="capitalize text-primary font-bold">Como <br /><span className="text-secondary">Trabalhamos</span></h2>
                </div>
            </div>

            <div className="lg:flex lg:justify-evenly lg:gap-32 relative">
                <ComoTrabalhamosItem title="Entendemos o seu negócio" numberItem="1" text1="No primeiro momento a equipe analisa o seu projeto por meio de uma visão macro e define quais serão os principais objetivos do seu negócio e quais valores que gostaria de agregar para sua marca." text2="Também se torna possível montar uma estimativa de investimento para próxima etapa." />
                <div className="lg:absolute flex justify-end my-[-20px] lg:w-50 lg:top-[-5rem] lg:left-75">
                    <Image src={SetaBaixo} alt="Seta Baixo" className="w-26 lg:w-250 rotate-90 lg:rotate-0 transform " />
                </div>
                <ComoTrabalhamosItem title="Definimos nossa estratégia" numberItem="2" text1="Estudar o público-alvo para melhor abordagem e quais ferramentas digitais e tecnologias aplicadas, serão os principais fundamentos de estudo nesta etapa, visando sempre atingir as metas." text2="Nesta fase é permitido construir um planejamento que envolve prazo e total de investimento necessário para alcançar as metas." />
                <div className="lg:absolute flex justify-end my-[-20px] lg:w-50 lg:bottom-[-5rem] lg:left-190">
                    <Image src={SetaBaixo} alt="Seta Baixo" className="w-26 lg:w-250 rotate-90 lg:rotate-0 transform lg:scale-y-[-1]" />
                </div>
                <ComoTrabalhamosItem title="Desenvolvemos" numberItem="3" text1="Após todo o processo de análise da marca, o time especializado da GritoWeb entra em ação para desenvolver e/ou integrar todas as ferramentas digitais necessárias para o seu negócio alavancar no ramo de atuação." text2="O feedback também é muito importante, sempre atualizamos o cliente sobre cada estratégia aplicada." />
            </div>
        </section>
        </>
    )
}