import Logo from "../../assets/icons/gritoweb-logo-hor.svg"
import Image from "next/image"
import Link from "next/link"

export default function Header(){
    return(
        <header>
            <div className="flex justify-between pb-6 items-center lg:px-32">
                <Image src={Logo}
                alt="Logo GritoWeb"
                className="w-[100px] lg:w-[200px]" />

                {/* Botão menu mobile */}
                <div className="lg:hidden">menu</div>

                {/* Menu Desktop */}
                <div className="hidden lg:block">
                    <ul className="flex justify-between gap-16">
                        <li><Link className="font-light uppercase text-primary" href="/">GritoWeb</Link></li>
                        <li><Link className="font-light uppercase text-primary" href="/servicos">Serviços</Link></li>
                        <li><Link className="font-light uppercase text-primary" href="#clientes">Clientes</Link></li>
                        <li><Link className="font-light uppercase text-primary" href="/contato">Contato</Link></li>
                    </ul>
                </div>
            </div>
            <hr className="border-accent-300"/>
        </header>
    )
}