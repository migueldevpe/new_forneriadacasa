import "./Card.css";

import { IoAddCircleOutline, IoInformationCircle } from "react-icons/io5";

interface CardProps {
  img?: string,
  title: string,
  desc?: string,
  valor: string,
  border_color?: string,
  label?: string,
  bg_label?: string
}

export default function Card({ img="https://placehold.co/225x200/cdcdcd/fff?text=Pizza", title="Pizza X", desc, valor="44,99", border_color="black", label, bg_label }: CardProps) {
  
  return (

    <div className="card-container grid gap-2.5 bg-white w-full !p-2 rounded-md">
      <div className="relative">
        {label && (<span className={`absolute top-1 right-1 text-white text-xs font-bold rounded-md !p-1`} style={{ background: `${bg_label}` } as React.CSSProperties}>{label}</span>)}
        <img src={img} alt="Pizza - Ilustração" className={`h-full w-full object-cover aspect-[225/200] rounded-md border-2 pointer-events-none`} style={{ borderColor: `${border_color}` } as React.CSSProperties} loading="lazy" decoding="async" fetchPriority="low"/>
      </div>
      <div>
        <div className="flex justify-between flex-col gap-4 h-full w-full">
          <div>
            <h1 className="text-[1.2rem] font-bold">{title}</h1>
            <p className="text-[#4A4A4A] text-justify hyphens-auto text-[.8rem] !leading-none !mt-2.5">{desc}</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="flex items-baseline text-[#4A4A4A] text-xs">R$<strong className="text-black text-[1.125rem] font-bold">{valor}</strong>/unidade<IoInformationCircle className="self-center text-black text-base !ml-0.75"/></span>
            <button type="button" className="btn-add flex items-center justify-center gap-1.25 bg-[#06008A] hover:bg-[#2245e2] active:bg-[#2245e2] hover:shadow-[inset_0_-2px_0_#06008A] active:shadow-[inset_0_-2px_0_#06008A] text-white w-full text-[.925rem] font-bold rounded-md cursor-pointer !p-2.5 {!mt-auto}"><IoAddCircleOutline />Adicionar</button>
          </div>
        </div>
      </div>
    </div>

  )

}