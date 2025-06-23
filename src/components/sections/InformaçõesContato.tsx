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
        <div className={`
            flex flex-col md:flex-row
            ${inverter ? "md:flex-row-reverse" : ""}
            md:justify-evenly md:items-center md:gap-8 lg:gap-16
            w-full
        `}>
            <div className="flex justify-center md:justify-start md:w-1/3 mb-6 md:mb-0 lg:w-[40%]">
                <Image src={img} alt={imgAlt} className="w-[180px] md:w-[200px] lg:w-[100%] h-auto" />
            </div>
            <div className="md:w-2/3 px-2 md:px-4 lg:px-0 lg:w-[50%]">
                <h3 className="text-primary text-lg md:text-xl lg:text-2xl">{title}</h3>
                <br />
                <p className="text-accent-500 text-base md:text-lg">{text}</p>
                <br/>
                <p className="text-accent-500 text-base md:text-lg">{text2}</p>
            </div>
        </div>
    )
}