import "./PageAddToCard.css";

import PizzasContent from "../pages/PizzasContent";
//import { useState } from "react";

export default function PageAddToCard() {
  // const [email, setEmail] = useState<string>();
  // const [userEmail, setUserEmail] = useState<string>()

  // function enviarEmail(e: React.MouseEvent) {
  //   e.preventDefault();
  //   setUserEmail(email);
  // }

  return (

    <main className="flex items-center justify-center flex-col">
      <section className="flex justify-center bg-linear-to-b from-[var(--bg-yellow-1)] to-[var(--bg-yellow-2)] {h-full} {h-[80dvh]} w-full !py-4 !px-4">
        <div className="flex flex-col gap-8 bg-[] w-full max-w-[1000px]">
          <div className="pageCard-text-content !mt-6">
            <h1 className="text-[var(--title-red-1)] text-[3rem] !font-['DancingScript']">Aproveite nossas gostosuras</h1>
            <h2 className="text-white text-[1.125rem] font-bold !mt-1.25">Escolha de acordo com sua preferência:</h2>
            <h3 className="text-white text-[1.125rem] !mt-1.25"><a href="#salgadas" className="text-[var(--text-salgado-doce)] hover:text-[var(--text-salgado-doce-hover)] active:text-[var(--text-salgado-doce-hover)] transition-colors ease-in-out duration-300 underline cursor-pointer">Salgadas</a> e/ou <a href="#doces" className="text-[var(--text-salgado-doce)] hover:text-[var(--text-salgado-doce-hover)] active:text-[var(--text-salgado-doce-hover)] transition-colors ease-in-out duration-300 underline cursor-pointer">Doces</a></h3>
          </div>
          <PizzasContent />
        </div>
      </section>
    </main>

  )

}