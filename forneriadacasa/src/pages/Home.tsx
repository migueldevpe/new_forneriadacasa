import "./Home.css";

import ButtonFDC from "../components/others/ButtonFDC.tsx";
import pizzaHome from "/home/pizza1.webp"

export default function Home() {

  return (

    <section id="home" className="flex justify-center w-full bg-linear-to-b from-[var(--bg-yellow-1)] to-[var(--bg-yellow-2)] {!py-16} !pt-8">
      <div className="flex flex-row gap-10 text-white w-full max-w-[1000px]">
        <div className="home-text-content self-center w-6/12">
          <div>
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl !font-['DancingScript'] font-semibold">A melhor OPÇÃO da Casa!</h1>
              <h2 className="text-[var(--title-red-1)] [font-size:var(--h2-home)] font-bold tracking-tight !leading-[.8em] hover:transform-[scale(1.01)] active:transform-[scale(1.01)] transition-transform ease-in-out duration-300">CLONE</h2>
              <p className="text-justify hyphens-auto !leading-[1.2em]">Toda QUARTA-FEIRA, você têm diversas opções de sabores em duas pizzas grandes com refrigerante de 1L grátis!</p>
            </div>
            <aside className="home-aside-content flex items-center flex-row gap-2.5 !mt-3">
              <ButtonFDC go="order" label={
                <>
                  <span>PEDIR AGORA</span>
                </>
              } title="Ir para página de pizzas." />
              <span className="home-price-aside text-[var(--price-home-color-1)] text-[clamp(1.25rem,6.45vw,1.475rem)] sm:text-[1.475rem] font-bold">R$ 62,00</span>
              <small className="text-[var(--price-home-color-2)] text-[clamp(.8rem,4vw,.875rem)] sm:text-[.875rem] line-through">R$ 78,00</small>
            </aside>
          </div>
        </div>
        <picture className="home-img-container w-6/12">
          <img src={pizzaHome} alt="#" className="h-full w-full object-contain aspect-[650/660] pointer-events-none" loading="eager" decoding="sync" fetchPriority="high" />
        </picture>
      </div>
    </section>

  )

}