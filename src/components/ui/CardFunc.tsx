import Image, { StaticImageData } from "next/image"

interface CardFuncDados {
    img: StaticImageData;
    imgAlt: string;
    title: string;
    subTitle: string;
    text1: string;
    text2: string | null;
}

const borderRadiusStyle = {
  borderTopLeftRadius: "9999px",     
  borderBottomLeftRadius: "9999px",  
  borderTopRightRadius: "32px",      
  borderBottomRightRadius: "32px",   
};

export default function CardFunc ({ img, imgAlt, title, subTitle, text1, text2 }: CardFuncDados) {
    return(
        <>
            <div style={borderRadiusStyle} className="lg:flex lg:justify-evenly lg:items-center bg-white p-8 lg:p-0 ">
                <div>
                    <Image src={img} alt={imgAlt} className=" lg:max-w-[490px] rounded-full" />
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