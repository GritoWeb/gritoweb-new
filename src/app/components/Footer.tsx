import Logo from "../../../public/icons/gritoweb-logo-reverse.svg"
import Image from "next/image"

export default function Footer() {
    const date: number = new Date().getFullYear();

    return(
        <footer className="bg-primary flex items-center flex-col gap-4">
            <Image width={60} src={Logo} alt="Logo GritoWeb Branco" />
            <div className="text-center">
                <span className="text-white text-xs text-thin">©{date} GritoWeb | Todos os direitos reservados <br />CNPJ: 27.467.329/0001-13</span>
            </div>
        </footer>
    )
}