import CardFunc from "../ui/CardFunc"
import FuncionarioImg from "../../assets/images/funcionario-medio-grito.png"

export default function MentesCriativas() {
    return(
        <> 
        <div>
            <div className="text-center lg:flex lg:flex-col lg:gap-4 lg:mb-12 py-8 lg:py-0 px-8">
                <h2 className="text-primary font-bold">Nossas<br /><span className="text-secondary">mentes criativas</span></h2>
                <span className="text-primary font-bold">Lorem Ipsum is simply dummy text of the printing<br/>and typesetting industry</span>
            </div>

            <div className="lg:px-32">
                <CardFunc title="Funcionário Médio GritoWeb" subTitle="Lorem Ipsum blab blalbla" text1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." text2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." img={FuncionarioImg} imgAlt="imagem funcionario" />
            </div>

        </div>
        </>
    )
}