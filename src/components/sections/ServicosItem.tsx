import Image, { StaticImageData } from "next/image";

interface ServicosDados {
    title: string;
    titleSec: string | null;
    subTitle: string;
    text: string;
    text2: string | null;
    image: StaticImageData;
    inverter: boolean;
}


export default function ServicosItem( {title, titleSec, subTitle, text, text2, image, inverter}:ServicosDados ) {
    return(
        <div className={`lg:flex lg:items-center lg:justify-between ${inverter === true ? "lg:flex-row-reverse" : ""}`}>
            <div >
                <Image src={image} alt="Serviço" />
            </div>

            <div className="lg:w-[50%]">
                <h2 className="text-primary font-bold">{title}<span className="text-secondary">{titleSec}</span></h2>
                <br />
                <p className="text-primary font-semibold">{subTitle}</p>
                <br />
                <p className="text-accent-500">{text}</p>
                <br />
                <p className="text-accent-500">{text2}</p>
            </div>
        </div>
    )
}