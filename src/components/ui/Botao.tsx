import Link from "next/link"

interface BotaoProps { 
    children: React.ReactNode;
    url: string
}

export default function Botao({children, url}: BotaoProps) {
    return(
        <Link className="px-3 py-1 text-white text-xl bg-primary rounded-3xl" href={url} >{children}</Link>
    )
}