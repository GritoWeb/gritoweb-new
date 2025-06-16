import Image, { StaticImageData } from "next/image";

interface HeroDados {
    title: string;
    titleBold: string;
    subTitle: string;
    tag: string | null;
    img: StaticImageData;
}

export default function Hero({ title, titleBold, subTitle, tag, img }: HeroDados) {
    return (
        <>
            <div className="lg:flex lg:justify-between items-center lg:px-64">
                <div>
                    <h1 className="text-primary font-light">{title}<br /><strong className="font-bold lg:font-black">{titleBold}</strong></h1>
                    <span className="text-2xl  lg:text-5xl text-secondary lowercase">{subTitle}<span className={`bg-secondary text-white px-[2px] rounded-lg ${tag === null ? "hidden" : ""} `}>{tag}</span></span>
                </div>

                {/* Hero - pegar imagem certa do hero */}
                <div className="mt-8 flex justify-center">
                    <Image src={img} 
                    alt="Hero página"
                    />
                </div>
            </div>
        </>
    );
}
