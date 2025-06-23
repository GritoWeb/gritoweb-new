'use client'

interface DadosComoTrabalhamos {
    title: string;
    numberItem: string;
    text1: string; 
    text2: string;
}

export default function ComoTrabalhamosItem( {numberItem, title, text1, text2}: DadosComoTrabalhamos ){
    return(
        <div className="">
            <div className="flex items-center gap-2">
                <span 
                className="text-[86px] font-semibold text-secondary"
                >{numberItem}.</span>
                <h3 className="text-primary">{title}</h3>
            </div>
            <p className="text-accent-500 ">{text1}<br/><br/>{text2}</p>
      </div>

    )
}