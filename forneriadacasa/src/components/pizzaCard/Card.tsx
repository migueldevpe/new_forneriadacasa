import "./Card.css";

import { useCartStore } from "../../hooks/cartStore.ts";
import { IoCheckmarkCircleSharp, IoInformationCircle } from "react-icons/io5";
import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

import type React from "react";

import ButtonFDC from "../others/ButtonFDC";
import Tooltip from "../others/Tooltip.tsx";

interface CardProps {
  img?: string,
  img_ia?: boolean,
  title: string,
  desc?: string,
  valor: string,
  border_color?: string,
  label?: string,
  bg_label?: string
}

export default function Card({ img="https://placehold.co/225x200/cdcdcd/000?text=Pizza", img_ia, title="Pizza X", desc, valor="44,99", border_color="black", label, bg_label }: CardProps) {
  const addToCart = useCartStore((state) => state.addToCart);;
  
  const [textBtn, setTextBtn] = useState<string>("Adicionar");
  const [iconBtn, setIconBtn] = useState<React.ReactNode>(<IoMdAddCircleOutline />)
  const [animBtn, setAnimBtn] = useState<string>("")

  function handleAdd() {
    addToCart({
      id: title,
      title: title,
      img: img,
      borderPizza: "",
      price: parseFloat(valor),
    });
  }

  const handleBtnClick = () => {
    handleAdd();

    setTextBtn("Adicionado");
    setIconBtn(<IoCheckmarkCircleSharp />);
    setAnimBtn("addBtnAnim")

    const timeout = setTimeout(() => {
      setTextBtn("Adicionar");
      setIconBtn(<IoMdAddCircleOutline />);
      setAnimBtn("");
    }, 1750);

    return () => clearTimeout(timeout)
  }

  return (

    <div className="card-container grid gap-2.5 bg-white w-full !p-2 rounded-md">
      <div className="relative rounded-md border-2 overflow-hidden" style={{ borderColor: `${border_color}` } as React.CSSProperties}>
        {img_ia && (
          <img src="https://media.discordapp.net/attachments/1351637319416938536/1442576560690434180/marker1.webp?ex=6925ef9d&is=69249e1d&hm=f1cd378c1156e9be7ba7e254c1f459e7fcb8a4bad8f1db762f71d3fee80c6425&=&format=webp&width=900&height=900" className={`absolute aspect-[1024/1024] w-30 pointer-events-none [transform:_translateX(-50%)] left-6/12 bottom-[-24px]`} alt="Essa imagem foi gerado por IA." title="Essa imagem foi gerado por IA." />
        )}
        {label && (
          <span className={`absolute top-1 right-1 text-white text-xs font-bold rounded-md !p-1`} style={{ background: `${bg_label}` } as React.CSSProperties}>
          {label}
          </span>
        )}
        <img src={img} alt={`${title} - Ilustração`} className={`h-full w-full object-cover aspect-[225/200]`}  loading="lazy" decoding="async" fetchPriority="low"/>
      </div>
      <div>
        <div className="flex justify-between flex-col gap-4 h-full w-full">
          <div>
            <h1 className="text-[1.2rem] font-bold">{title}</h1>
            <p title={desc} className="descParagraph text-[var(--card-text-secondary)] text-justify hyphens-auto text-[.8rem] !mt-2">
              {desc}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex items-baseline text-[var(--card-text-secondary)] text-xs">
              R$
              <strong className="text-black text-[1.125rem] font-bold">{valor}</strong>
                /unidade
                <Tooltip label="Atenção: Os valores podem estar desatualizados. Confira se o valor atual está correto no WhatsApp ao confirmar o pedido no carrinho." content_classStyle="self-center !ml-0.75" style={{ "--tooltip-hover-x": "50%", "--tooltip-hover-y": "-5.25rem" } as React.CSSProperties}>
                  <IoInformationCircle className="self-center text-black text-base cursor-help"/>
                </Tooltip>
              </span>
            <ButtonFDC typeBtn="button" label={
              <>
                {iconBtn}
                <span>{textBtn}</span>
              </>
            } onClick={handleBtnClick} title="Clique para adicionar ao carrinho." styleClass={`gap-1.25 w-full ${animBtn}`}/>
          </div>
        </div>
      </div>
    </div>

  )

}