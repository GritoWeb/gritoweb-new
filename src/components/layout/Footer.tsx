import Logo from "../../assets/icons/gritoweb-logo-reverse.svg"
import Image from "next/image"
import Link from "next/link";

export default function Footer() {
    const date: number = new Date().getFullYear();

    return(
        <footer className="bg-primary flex items-center flex-col gap-4 py-8">
            <Link href="/"><Image width={60} src={Logo} alt="Logo GritoWeb Branco" /></Link>
            <div className="text-center">
                <span className="text-white text-xs text-thin">©{date} GritoWeb | Todos os direitos reservados <br />CNPJ: 27.467.329/0001-13</span>
            </div>
        </footer>
    )
}