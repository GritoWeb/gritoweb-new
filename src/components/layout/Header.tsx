'use client';

import { usePathname } from "next/navigation";

import Logo from "../../assets/icons/gritoweb-logo-hor.svg"
import Image from "next/image"
import Link from "next/link"

export default function Header(){
    const pathname = usePathname();

    if (pathname == "/contato"){
        return(
        <header>
            <div className="flex justify-center pb-6 items-center lg:px-32">
                <Link href="/">
                    <Image src={Logo}
                    alt="Logo GritoWeb"
                    className="w-[100px] lg:w-[200px]" />
                </Link>
            </div>
            <hr className="border-accent-300"/>
        </header>
    )
    }else{
        return(
        <header>
            <div className="flex justify-between pb-6 items-center lg:px-32">
                <Link href="/">
                    <Image src={Logo}
                    alt="Logo GritoWeb"
                    className="w-[100px] lg:w-[200px]" />
                </Link>
                

                {/* Botão menu mobile */}
                <div className="lg:hidden">menu</div>

                {/* Menu Desktop */}
                <div className="hidden lg:block">
                    <ul className="flex justify-between gap-16">
                        <li><Link className="font-light uppercase text-primary" href="/sobrenos">GritoWeb</Link></li>
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

    
}