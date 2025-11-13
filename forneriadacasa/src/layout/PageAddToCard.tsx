import "./PageAddToCard.css";


import Card from "../components/pizzaCard/Card";

import { pizzasDoces } from "../utils/pizzasDoces";
import { useHandleSectionClick } from "../hooks/useHandleSectionClick";
import { pizzasSalgadas } from "../utils/pizzasSalgadas";

export default function PageAddToCard() {
  const handleSectionClick = useHandleSectionClick()

  return (

    <main className="flex items-center justify-center flex-col">
      <section className="flex justify-center bg-linear-to-b from-[var(--bg-yellow-1)] to-[var(--bg-yellow-2)] {h-full} {h-[80dvh]} w-full !py-4 !px-4">
        <div className="flex flex-col gap-8 bg-[] w-full max-w-[1000px]">
          <div className="pageCard-text-content !mt-6">
            <h1 className="text-[var(--title-red-1)] text-[3rem] !font-['DancingScript']">Aproveite nossas gostosuras</h1>
            <h2 className="text-white text-[1.125rem] font-bold !mt-1.25">Escolha de acordo com sua preferência:</h2>
            <h3 className="text-white text-[1.125rem] !mt-1.25"><a href="" onClick={handleSectionClick("#salgadas")} className="text-[var(--text-salgado-doce)] hover:text-[var(--text-salgado-doce-hover)] active:text-[var(--text-salgado-doce-hover)] transition-colors ease-in-out duration-300 underline cursor-pointer">Salgadas</a> e/ou <a href="" onClick={handleSectionClick("#doces")} className="text-[var(--text-salgado-doce)] hover:text-[var(--text-salgado-doce-hover)] active:text-[var(--text-salgado-doce-hover)] transition-colors ease-in-out duration-300 underline cursor-pointer">Doces</a></h3>
          </div>
          <div className="flex items-center justify-center flex-col gap-8">
            <div id="doces" className="scroll-mt-[88px] w-full">
              <h1 className="text-[var(--text-salgado-doce)] text-3xl font-semibold !font-['DancingScript'] !mb-4">Doces</h1>
              <div className="cards-container grid gap-4 h-fit w-full">
                {pizzasDoces.map((pizzaDoce) => {
                  return (
                    <Card
                      key={pizzaDoce.title}
                      img={pizzaDoce.img}
                      title={pizzaDoce.title}
                      desc={pizzaDoce.desc}
                      valor={pizzaDoce.valor}
                      label={pizzaDoce.label}
                      bg_label={pizzaDoce.bg_label}
                      border_color={pizzaDoce.border_color}
                    />
                  )
                })}
              </div>
            </div>
            <div id="salgadas" className="scroll-mt-[88px] w-full">
              <h1 className="text-[var(--text-salgado-doce)] text-3xl font-semibold !font-['DancingScript'] !mb-4">Salgadas</h1>
              {/* <h2 className="text-black font-bold">SISTEMA EM DESENVOLVIMENTO, PEÇA NO <a href={`https://wa.me/5581983421723?text=${encodeURIComponent(`Olá! Gostaria de ser atendido.`)}`} target="_blank" rel="noopener noreferrer" title="Ir ao WhatsApp." className="text-[#25d366] hover:underline active:underline">WHATSAPP</a>.</h2> */}
              <div className="cards-container grid gap-4 h-fit w-full">
                {pizzasSalgadas.map((pizzaSalgada) => {
                  return (
                    <Card
                      key={pizzaSalgada.title}
                      img={pizzaSalgada.img}
                      title={pizzaSalgada.title}
                      desc={pizzaSalgada.desc}
                      valor={pizzaSalgada.valor}
                      label={pizzaSalgada.label}
                      bg_label={pizzaSalgada.bg_label}
                      border_color={pizzaSalgada.border_color}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  )

}