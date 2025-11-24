import "./Delivery.css";

import ButtonFDC from "../components/others/ButtonFDC.tsx";
import pizzaDelivery from "../assets/images/pizza2.webp"

export default function Delivery() {

  return (

    <section id="delivery" className="flex items-center justify-center w-full bg-linear-to-b from-[var(--bg-white-1)] to-[var(--bg-white-2)] scroll-mt-[48px]">
      <div className="flex justify-between flex-row gap-10 w-full max-w-[1000px]">
        <div className="delivery-text-content self-center w-6/12">
          <div>
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl !font-['DancingScript'] font-semibold">Delivery Rápido</h1>
              <h2 className="[font-size:var(--h2-delivery)] font-bold tracking-tight !leading-[.8em]">
                Piscou, 
                <br />
                <span className="text-[var(--title-red-2)]">a pizza chegou!</span>
              </h2>
              <p className="text-justify hyphens-auto !leading-[1.2rem]">Sua pizza favorita, quentinha e cheia de sabor, chega rapidinho até você! Escolha entre entrega rápida ou retirada no local — do jeito que for melhor pra você. Com apenas alguns cliques, mergulhe em um mundo de sabores irresistíveis.</p>
            </div>
            <aside className="delivery-aside-content flex flex-col gap-3 !mt-3">
              <ButtonFDC go="order" label={
                <>
                  <span>PEDIR AGORA</span>
                </>
              } title="Ir para página de pizzas." />
              <div className="flex items-center flex-row gap-4">
                <div className="delivery-container flex items-center flex-col">
                  <div className="bg-linear-to-br from-[var(--bg-yellow-2)] to-[var(--bg-yellow-1)] h-[105px] w-[105px] rounded-full overflow-hidden">
                  </div>
                  <span className="font-bold !mt-2">Delivery</span>
                </div>
                <div className="retirada-container flex items-center flex-col">
                  <div className="bg-linear-to-br from-[var(--bg-yellow-2)] to-[var(--bg-yellow-1)] h-[105px] w-[105px] rounded-full overflow-hidden">
                  </div>
                  <span className="font-bold !mt-2">Retirada</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <picture className="delivery-img-container w-6/12">
          <img src={pizzaDelivery} alt="#" className="h-full w-full object-contain aspect-[650/736] pointer-events-none" loading="lazy" decoding="async" fetchPriority="low" />
        </picture>
      </div>
    </section>

  ) 

}