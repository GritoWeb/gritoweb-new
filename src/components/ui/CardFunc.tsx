import Image, { StaticImageData } from "next/image"

interface CardFuncDados {
    img: StaticImageData;
    imgAlt: string;
    title: string;
    subTitle: string;
    text1: string;
    text2: string | null;
}

export default function CardFunc ({ img, imgAlt, title, subTitle, text1, text2 }: CardFuncDados) {
    return(
        <>
            <div className="lg:flex lg:justify-evenly lg:items-center bg-white rounded-4xl p-8 lg:p-0 relative">
                <div>
                    <Image src={img} alt={imgAlt} className=" lg:max-w-[490px]" />
                </div>
                <div className="lg:w-[70%] lg:p-8">
                    <div>
                        <h3 className="text-primary font-bold">{title}</h3>
                        <h4 className="text-secondary font-bold mt-[-10px]">{subTitle}</h4>
                    </div>
                    <div className="text-accent-500 mt-4">
                        <p>{text1}</p>
                        <br/>
                        <p>{text2}</p>
                    </div>
                </div>
            </div>
        </>
    )
}