import Image, { StaticImageData } from "next/image"

interface InformaçõesContatoDados {
    img: StaticImageData;
    imgAlt: string;
    title: string;
    text: string;
    text2: string | null;
    inverter: boolean;
}


export default function InformaçõesContato({ img, imgAlt, title, text, text2, inverter=false }:InformaçõesContatoDados ) {
    return(
        <>  
            <div className={`lg:flex lg:justify-evenly lg:items-center lg:gap-16 ${inverter ? "flex-row-reverse":""}`}>
                <div><Image src={img} alt={imgAlt} /></div>
                <div className="lg:w-[60%]">
                    <h3 className="text-primary">{title}</h3>
                    <br />
                    <p className="text-accent-500">{text}</p>
                    <br/>
                    <p className="text-accent-500">{text2}</p>
                </div>
            </div>
        </>
    )
}