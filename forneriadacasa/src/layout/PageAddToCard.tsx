import "./PageAddToCard.css";

import Pizzas from "../pages/PizzasContent";

export default function PageAddToCard() {

  return (

    <main className="flex items-center justify-center flex-col">
      <section className="flex justify-center bg-linear-to-b from-[#FED000] to-[#fec300] h-full w-full !py-4 !px-4">
        <div className="flex flex-col gap-8 bg-[] w-full max-w-[1000px]">
          <div className="!mt-6">
            <h1 className="text-[#5C3D2E] text-[3rem] !font-['DancingScript']">Aproveite nossas gostosuras</h1>
            <h1 className="text-[1.125rem] font-bold !mt-1">Escolha de acordo com sua preferência</h1>
          </div>
          <Pizzas />
        </div>
      </section>
    </main>

  )

}