'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "../../assets/icons/gritoweb-logo-hor.svg"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion";

export default function Header(){
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const menuVariants = {
        hidden: { y: "-100%", opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] } 
        },
        exit: { 
            y: "-100%", 
            opacity: 0, 
            transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] } 
        }
    };

    return(
        <header>
            <div className="flex justify-between pb-6 items-center">
                <Link href="/">
                    <Image src={Logo}
                        alt="Logo GritoWeb"
                        className="w-[100px] lg:w-[200px]" />
                </Link>
                
                {/* Botão menu mobile/tablet */}
                <button
                    className="lg:hidden text-primary font-bold px-4 py-2 rounded focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menu"
                >
                    menu
                </button>

                {/* Menu Desktop */}
                <div className="hidden lg:block">
                    <ul className="flex justify-between gap-16">
                        <li><Link className={`font-light uppercase ${pathname == "/sobrenos" ? "text-secondary": "text-primary"}`} href="/sobrenos">GritoWeb</Link></li>
                        <li><Link className={`font-light uppercase ${pathname == "/servicos" ? "text-secondary": "text-primary"}`} href="/servicos">Serviços</Link></li>
                        <li><Link className={`font-light uppercase text-primary`} href="/#clientes">Clientes</Link></li>
                        <li><Link className={`font-light uppercase ${pathname == "/contato" ? "text-secondary": "text-primary"}`} href="/contato">Contato</Link></li>
                    </ul>
                </div>
            </div>
            {/* Menu Mobile/Tablet */}
            <AnimatePresence>
            {menuOpen && (
                <motion.nav
                    key="mobile-menu"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                    className="lg:hidden bg-background absolute left-0 top-0 w-full z-50 shadow-md"
                >
                    <div className="flex flex-col items-end p-6">
                        <button
                            className="text-primary font-bold mb-4"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Fechar menu"
                        >
                            Fechar ✕
                        </button>
                        <ul className="flex flex-col gap-6 w-full items-end">
                            <li>
                                <Link
                                    className={`font-light uppercase ${pathname == "/sobrenos" ? "text-secondary": "text-primary"}`}
                                    href="/sobrenos"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    GritoWeb
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`font-light uppercase ${pathname == "/servicos" ? "text-secondary": "text-primary"}`}
                                    href="/servicos"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Serviços
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="font-light uppercase text-primary"
                                    href="/#clientes"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Clientes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`font-light uppercase ${pathname == "/contato" ? "text-secondary": "text-primary"}`}
                                    href="/contato"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>
                </motion.nav>
            )}
            </AnimatePresence>
            <hr className="border-accent-300"/>
        </header>
    )
}