import "./Card.css";

import { useCartStore } from "../../hooks/cartStore.ts";
import { IoAddCircleOutline, IoInformationCircle } from "react-icons/io5";

import type React from "react";

import ButtonFDC from "../others/ButtonFDC";
import Tooltip from "../others/Tooltip.tsx";

interface CardProps {
  img?: string,
  title: string,
  desc?: string,
  valor: string,
  border_color?: string,
  label?: string,
  bg_label?: string
}

export default function Card({ img="https://placehold.co/225x200/cdcdcd/000?text=Pizza", title="Pizza X", desc, valor="44,99", border_color="black", label, bg_label }: CardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  function handleAdd() {
    addToCart({
      id: title, // pode mudar pra ID real depois
      title: title,
      img: img,
      price: parseFloat(valor),
    });
  }
  
  return (

    <div className="card-container grid gap-2.5 bg-white w-full !p-2 rounded-md">
      <div className="relative rounded-md border-2 overflow-hidden" style={{ borderColor: `${border_color}` } as React.CSSProperties}>
        {label && (<span className={`absolute top-1 right-1 text-white text-xs font-bold rounded-md !p-1`} style={{ background: `${bg_label}` } as React.CSSProperties}>
          {label}
        </span>)}
        <img src={img} alt="Pizza - Ilustração" className={`h-full w-full object-cover aspect-[225/200]`}  loading="lazy" decoding="async" fetchPriority="low"/>
      </div>
      <div>
        <div className="flex justify-between flex-col gap-4 h-full w-full">
          <div>
            <h1 className="text-[1.2rem] font-bold">{title}</h1>
            <p className="text-[var(--card-text-secondary)] text-justify hyphens-auto text-[.8rem] !mt-2.5">
              {desc}
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="flex items-baseline text-[var(--card-text-secondary)] text-xs">
              R$
              <strong className="text-black text-[1.125rem] font-bold">{valor}</strong>
                /unidade
                <Tooltip label="Atenção: Os valores podem estar desatualizados. Confira se o valor atual está correto no WhatsApp ao confirmar o pedido no carrinho." content_classStyle="self-center !ml-0.75" style={{ "--tooltip-hover-x": "50%", "--tooltip-hover-y": "-5.25rem" } as React.CSSProperties}>
                  <IoInformationCircle className="self-center text-black text-base"/>
                </Tooltip>
              </span>
            <ButtonFDC typeBtn="button" label={
              <>
                <IoAddCircleOutline />
                <span>Adicionar</span>
              </>
            } onClick={() => handleAdd()} title="Clique para adicionar ao carrinho." styleClass="gap-1.25 w-full"/>
          </div>
        </div>
      </div>
    </div>

  )

}