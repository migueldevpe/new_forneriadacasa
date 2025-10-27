
import "./CartContainer.css";

import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { handleToggle } from "../../hooks/handleToggle.ts";
import { FaTrash } from "react-icons/fa6";
import { useCartStore } from "../../hooks/cartStore.ts";
import { useState } from "react";
import { IoInformationCircle } from "react-icons/io5";

import ButtonFDC from "../others/ButtonFDC";
import Tooltip from "../others/Tooltip.tsx";

export default function CartContainer() {
  const { cart, updateQuantity, removeFromCart, total } = useCartStore();

  const [payMethod, setPayMethod] = useState("");
  const [adress, setAdress] = useState("");
  const [note, setNote] = useState("");
  const [stuffedBorder, setStuffedBorder] = useState("");

  const linhasDoPedido = cart.map(item => 
    `*${item.quantity}x* ${item.title} - *R$${item.price.toFixed(2)}*/unidade - Subtotal: *R$${(item.price * item.quantity).toFixed(2)}*`
  ).join("\n\n");

  function submitMensagem(e: React.FormEvent) {
    e.preventDefault()

    if (!payMethod || !adress) return;

    const mensagem = 
      `Olá! Gostaria de realizer um pedido.
      
      ⪪≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡⪫
      
      Pedido — *Forneria da Casa*

      ${linhasDoPedido.replace(/\./g, ',')}

      ⪪≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡⪫

      Método de Pagamento: *${payMethod.toUpperCase()}*
      Borda: *${stuffedBorder === "" ? "SEM RECHEIO" : stuffedBorder.toUpperCase()}*
      Endereço: *${adress.toUpperCase()}*
      Observação: *${note === "" ? "N/A" : note.toUpperCase()}*
      Valor total: *R$${total.toFixed(2).replace(/\./g, ',')}*` 

    window.open(`https://wa.me/5581984325732?text=${encodeURIComponent(mensagem.replace(/^(?!\s*$)\s+/gm, ''))}`, "_blank", "noopener,noreferrer")
  }

  return (

    <div className="cart-container fixed inset-0 left-6/12 transform-[translateX(-50%)] h-[100dvh] w-full max-w-[1000px] !mt-[48px] pointer-events-none z-0">
      <div className="relative h-full w-full">
        <div className="cart flex absolute top-0 right-0 bg-white w-full max-w-[450px] rounded-b-md shadow-md pointer-events-auto">
          <div className="flex flex-col w-full">
            <header className="cart-header flex items-center justify-between flex-row {!px-2 !py-2.75} bg-[var(--cart-header)] text-white text-[1.125rem] font-bold">
              <span>CARRINHO</span>
              <GrClose className="h-[1em] w-[1em] hover:transform-[scale(1.05)] active:transform-[scale(1.1)] transition-transform ease-in-out duration-300 cursor-pointer" onClick={handleToggle('carrinho')}/>
            </header>
            <div className="h-full w-full !p-2 overflow-y-hidden">
              <div className="flex flex-col gap-2 relative h-full w-full rounded-md overflow-y-auto" style={{ scrollbarWidth: "thin" } as React.CSSProperties}>
                {cart.length === 0 ? (
                  <p className="absolute top-6/12 left-6/12 transform-[translateX(-50%)] w-full text-[var(--cart-text-null)] text-center">Seu carrinho está vazio. &#x1F355;</p>
                ) : (
                  cart.map((item) => (                  
                    <div key={item.id} className="cart-item grid gap-1 bg-[var(--cart-item-bg)] h-[120px] w-full rounded-md shadow-xs !p-1">
                      <div className="h-full w-full rounded-md border-black border-2 overflow-hidden">
                        <img src={item.img} alt={item.title} className="h-full w-full object-cover" loading="lazy" decoding="async" fetchPriority="low" />
                      </div>
                      <div className="flex flex-col justify-between h-full w-full !p-1">
                        <div>
                          <h1 className="text-[1.125rem] font-bold">{item.title}</h1>
                        </div>
                        <div className="flex items-center justify-between flex-row">
                          <div className="flex items-center justify-center flex-row gap-2">
                            <span className="font-bold">R${(item.price * item.quantity).toFixed(2).replace(/\./g, ',')}</span>
                            <div>
                              <input
                              type="number" 
                              min={1} max={10} 
                              placeholder="1" 
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                              className="!h-fit !w-[35px] [all:revert]"/>
                              <button className="font-bold !p-1 !ml-0.5 cursor-pointer" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                              <button className="font-bold !p-1 !ml-0.5 cursor-pointer" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            </div>
                          </div>
                          <FaTrash className="cursor-pointer" onClick={() => removeFromCart(item.id)} />
                        </div>
                      </div>
                    </div>
                  ))              
                )}
              </div>
            </div>
            {cart.length > 0 && (
              <div className="flex flex-col gap-2 w-full !p-2 !pt-0">
                <form onSubmit={submitMensagem} className="flex flex-col gap-0.75">
                  <div className="flex items-center flex-row gap-1">
                    <label htmlFor="paymethod">Pagamento:</label>
                    <select name="paymethod" id="paymethod" onChange={(e) => setPayMethod(e.target.value)} value={payMethod} className="!max-h-[22px] [all:revert]" required >
                      <option value="" disabled selected>Escolha</option>
                      <option value="Pix">Pix</option>
                      <option value="Dinheiro">Dinheiro</option>
                      <option value="Cartão">Cartão</option>
                    </select>
                  </div>
                  <div className="flex items-center flex-row gap-1">
                    <label htmlFor="stuffedBorder">Borda:</label>
                    <select name="stuffedBorder" id="stuffedBorder" onChange={(e) => setStuffedBorder(e.target.value)} value={stuffedBorder} className="max-h-[22px] [all:revert]">
                      <option value="" selected>Sem recheio</option>
                      <option value="Catupiry">Catupiry</option>
                      <option value="Cheddar">Cheddar</option>
                      <option value="Cream Cheese">Cream Cheese</option>
                      <option value="Chocolate">Chocolate</option>
                    </select>
                    <Tooltip label="Consulte o valor correto dos adicionais (Bordas ou Turbinações) no WhatsApp." style={{ "--tooltip-hover-x": "50%", "--tooltip-hover-y": "-3.75rem" } as React.CSSProperties}>
                      <IoInformationCircle />
                    </Tooltip>

                  </div>                  
                  <div className="flex items-center flex-row gap-1">
                    <label htmlFor="adress">Endereço:</label>
                    <input type="text" name="adress" id="adress" placeholder="Cidade, Rua, Bloco, Número" onChange={(e) => setAdress(e.target.value)} value={adress} className="!max-h-[22px] !w-full [all:revert]" required/>
                  </div>
                  <div className="flex items-center flex-row gap-1">
                    <label htmlFor="note">Observação:</label>
                    <input type="text" name="note" id="note" placeholder="Tirar cebola, Ponto de referência" onChange={(e) => setNote(e.target.value)} value={note} className="!max-h-[22px] !w-full [all:revert]"/>
                  </div>
                  <p>Total: <span className="font-bold">R${total.toFixed(2).replace(/\./g, ',')}</span></p>
                  <ButtonFDC typeBtn="submit" label={
                    <>
                      <HiMiniArrowTopRightOnSquare />
                      <span>Confirmar no WhatsApp</span>
                    </>
                  } styleClass="flex-1 gap-1.25 text-[1rem] text-center w-full !py-3"/>                  
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  )

}