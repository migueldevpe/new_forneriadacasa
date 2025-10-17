import "./Delivery.css";

import OrderNow from "../components/others/OrderNow";

export default function Delivery() {

  return (

    <section id="delivery" className="flex items-center justify-center w-full bg-linear-to-b from-[#f5f5f5] to-[#d7d7d7] !py-8">
      <div className="flex justify-between flex-row gap-10 w-full max-w-[1000px]">
        <div className="self-center w-6/12">
          <div className="delivery-text-content {max-w-[475px] !mr-auto}">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl !font-['DancingScript'] font-semibold">Delivery Rápido</h1>
              <h2 className="[font-size:var(--h2-delivery)] font-bold tracking-tight !leading-[.8em]">
                Piscou, 
                <br />
                <span className="text-[#ce9009]">a pizza chegou!</span>
              </h2>
              <p className="text-justify hyphens-auto !leading-[1.2rem]">Sua pizza favorita, quentinha e cheia de sabor, chega rapidinho até você! Escolha entre entrega rápida ou retirada no local — do jeito que for melhor pra você. Com apenas alguns cliques, mergulhe em um mundo de sabores irresistíveis.</p>
            </div>
            <aside className="flex flex-col gap-3 !mt-3">
              <OrderNow />
              <div className="flex items-center flex-row gap-4">
                <div className="delivery-container flex items-center flex-col">
                  <div className="bg-linear-to-br from-[#fec300] to-[#FED000] h-[105px] w-[105px] rounded-full overflow-hidden">
                  </div>
                  <span className="font-bold !leading-[2em]">Delivery</span>
                </div>
                <div className="retirada-container flex items-center flex-col">
                  <div className="bg-linear-to-br from-[#fec300] to-[#FED000] h-[105px] w-[105px] rounded-full overflow-hidden">
                  </div>
                  <span className="font-bold !leading-[2em]">Retirada</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <picture className="delivery-img-container w-6/12">
          <img src="https://forneriadacasa.vercel.app/assets/pizza2-B9W4bR9z.webp" alt="#" className="h-full w-full object-contain aspect-[650/736] pointer-events-none" loading="lazy" decoding="async" fetchPriority="low" />
        </picture>
      </div>
    </section>

  ) 

}