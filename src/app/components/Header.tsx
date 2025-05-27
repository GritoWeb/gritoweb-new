import Logo from "../../../public/icons/gritoweb-logo-hor.svg"
import Image from "next/image"

export default function Header(){
    return(
        <header>
            <div className="flex justify-between pb-6 items-center">
                <Image src={Logo}
                alt="Logo GritoWeb"
                width={100} />
                <div>menu</div>
            </div>
            <hr className="border-accent-300"/>
        </header>
    )
}