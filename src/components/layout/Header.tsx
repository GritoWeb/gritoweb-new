'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "../../assets/icons/gritoweb-logo-hor.svg"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, Easing, motion } from "framer-motion";

export default function Header(){
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    // Travar/destravar scroll do body ao abrir/fechar menu mobile
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    // Animação do menu (slide da esquerda para direita)
    const menuVariants = {
        hidden: { x: "-100%", opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1, 
            transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] as Easing} 
        },
        exit: { 
            x: "-100%", 
            opacity: 0, 
            transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] as Easing } 
        }
    };

    // Animação dos links (de baixo pra cima, com delay em cascata)
    const linksVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.45 + i * 0.08, // começa após o menu, em cascata
                duration: 0.4,
                ease: [0.42, 0, 0.58, 1] as Easing
            }
        }),
        exit: { opacity: 0, y: 40, transition: { duration: 0.2 } }
    };

    const links = [
        {
            href: "/sobrenos",
            label: "GritoWeb",
            isActive: pathname === "/sobrenos"
        },
        {
            href: "/servicos",
            label: "Serviços",
            isActive: pathname === "/servicos"
        },
        {
            href: "/#clientes",
            label: "Clientes",
            isActive: pathname === "/#clientes"
        },
        {
            href: "/contato",
            label: "Contato",
            isActive: pathname === "/contato"
        }
    ];


    return(
        <header>
            <div className="flex justify-between py-1 items-center">
                <Link href="/">
                    <Image src={Logo}
                        alt="Logo GritoWeb"
                        className="w-[100px] lg:w-[150px]" />
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
            {/* Menu Mobile/Tablet tela inteira */}
            <AnimatePresence>
            {menuOpen && (
                <motion.nav
                    key="mobile-menu"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                    className="lg:hidden fixed inset-0 w-full h-full z-50 bg-primary flex flex-col"
                    style={{ top: 0, left: 0 }}
                >
                    <div className="flex flex-col items-end p-6 h-full">
                        <button
                            className="text-white font-bold mb-8 text-2xl"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Fechar menu"
                        >
                            Fechar ✕
                        </button>
                        <ul className="flex flex-col gap-16 w-full items-end mt-16">
                            {links.map((link, i) => (
                                <motion.li
                                    key={link.href}
                                    custom={i}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={linksVariants}
                                >
                                    <Link
                                        className={`font-bold uppercase text-4xl ${link.isActive ? "text-secondary" : "text-white"}`}
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.nav>
            )}
            </AnimatePresence>
            <hr className="border-accent-300"/>
        </header>
    )
}