import OrderNow from "../components/others/OrderNow";
import "./Home.css";

export default function Home() {

  return (

    <section id="home" className="flex justify-center w-full bg-linear-to-b from-[#FED000] to-[#fec300] {!py-16} !pt-4 !px-4">
      <div className="flex flex-row gap-2 text-white w-full max-w-[1000px]">
        <div className="self-center w-6/12">
          <div className="home-text-content max-w-[475px]">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl !font-['DancingScript'] font-semibold">A melhor OPÇÃO da Casa!</h1>
              <h2 className="text-[#ce9009] text-[6.8rem] font-bold tracking-tight !leading-[.8em] hover:transform-[scale(1.01)] active:transform-[scale(1.01)] transition-transform duration-300">CLONE</h2>
              <p className="text-justify hyphens-auto !leading-[1.2em]">Toda QUARTA-FEIRA, você têm diversas opções de sabores em duas pizzas grandes com refrigerante de 1L grátis!</p>
            </div>
            <aside className="home-aside-content flex items-center flex-row gap-2.75 !mt-3">
              <OrderNow />
              <span className="home-price-aside text-[#f9f9d0] text-[1.5rem] font-bold">R$ 61,99</span>
              <small className="text-[#e1e1e1] text-base line-through">R$ 77,99</small>
            </aside>
          </div>
        </div>
        <picture className="home-img-container w-6/12">
          <img src="https://forneriadacasa.vercel.app/assets/pizza1-CBxKWArt.webp" alt="" className="h-full w-full object-cover aspect-[650/660] pointer-events-none" loading="eager" decoding="sync" fetchPriority="high" />
        </picture>
      </div>
    </section>

  )

}