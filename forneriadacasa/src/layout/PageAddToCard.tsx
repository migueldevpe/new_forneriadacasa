import "./PageAddToCard.css";


import Card from "../components/pizzaCard/Card";

import { pizzasDoces } from "../utils/pizzasDoces";
import { useHandleSectionClick } from "../hooks/useHandleSectionClick";

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
                <Card 
                  img="src/assets/temporaryPizzas/marguerita.webp" 
                  title="Pizza de Marguerita" 
                  desc="Pizza tradicional, com molho artesanal de tomate, mussarela derretida, rodelas de tomate fresco e manjericão, trazendo o autêntico sabor italiano em cada fatia." 
                  valor="32,00"
                />
                <Card 
                  img="src/assets/temporaryPizzas/mussarela.webp" 
                  title="Pizza de Mussarela" 
                  desc="Simples e irresistível. Massa fina e crocante, coberta com molho artesanal de tomate e generosa camada de mussarela dourada, finalizada com orégano e azeite." 
                  valor="32,00" 
                  label="Promoção" 
                  bg_label="#e2a222" 
                  border_color="#e2a222" 
                />
                <Card 
                  img="src/assets/temporaryPizzas/mussarelacheddar.webp" 
                  title="Pizza de Mussarela c/ Cheddar" 
                  desc="Pizza cremosa e saborosa, coberta com mussarela e cheddar derretido, que juntos criam uma harmonia perfeita entre o leve e o marcante." 
                  valor="32,00" 
                />
                <Card 
                  img="https://placehold.co/250x250/cdcdcd/000?text=Mussarela+c/+Catupiry" 
                  title="Pizza de Mussarela c/ Catupiry" 
                  desc="-" 
                  valor="32,00" 
                />
                <Card 
                  img="src/assets/temporaryPizzas/nordestina.webp" 
                  title="Pizza Nordestina" 
                  desc="-" 
                  valor="46,00" 
                />
                <Card 
                  img="src/assets/temporaryPizzas/pepperoni.webp" 
                  title="Pizza de Pepperoni" 
                  desc="-" 
                  valor="42,00" 
                />
                <Card 
                  img="src/assets/temporaryPizzas/portuguesa.webp" 
                  title="Pizza Portuguesa" 
                  desc="-" 
                  valor="42,00" 
                />
                <Card 
                  img="src/assets/temporaryPizzas/3queijos.webp" 
                  title="Pizza de 3 Queijos" 
                  desc="Combinação irresistível de mussarela, parmesão e gorgonzola, criando uma pizza cremosa e intensa, perfeita para os amantes de queijo." 
                  valor="32,00"
                />
                <Card 
                  img="src/assets/temporaryPizzas/4queijos.webp" 
                  title="Pizza de 4 Queijos" 
                  desc="-" 
                  valor="32,00"
                />
                <Card 
                  img="src/assets/temporaryPizzas/calabresa.webp" 
                  title="Pizza de Calabresa" 
                  desc="Tradicional e cheia de sabor. Coberta com molho artesanal, rodelas de calabresa levemente grelhadas e cebolas, finalizada com orégano e toque de azeite." 
                  valor="32,00" 
                />
                <Card 
                  img="https://placehold.co/225x200/cdcdcd/000?text=Calabresa+c/+Catupiry" 
                  title="Pizza de Calabresa c/ Catupiry" 
                  desc="Clássica e equilibrada. Calabresa grelhada sobre uma camada generosa de Catupiry, resultando em contraste perfeito entre o salgado e o suave." 
                  valor="34,00" 
                />
                <Card 
                  img="src/assets/temporaryPizzas/calabresacreamcheese.webp" 
                  title="Pizza de Calabresa c/ Cream Cheese" 
                  desc="-" 
                  valor="40,00" 
                />
                <Card 
                  img="src/assets/temporaryPizzas/calabresacheddar.webp" 
                  title="Pizza de Calabresa c/ Cheddar" 
                  desc="Sabor marcante e envolvente: calabresa dourada com cheddar cremoso, uma combinação intensa e deliciosa." 
                  valor="34,00" 
                />          
                <Card 
                  img="src/assets/temporaryPizzas/calabresabarbecue.webp" 
                  title="Pizza de Calabresa c/ Barbecue" 
                  desc="Pizza irresistível com calabresa grelhada, molho barbecue defumado e cebolas caramelizadas, oferecendo um toque adocicado e sofisticado." 
                  valor="34,00" 
                />
                <Card 
                  img="https://placehold.co/225x200/cdcdcd/000?text=Frango" 
                  title="Pizza de Frango" 
                  desc="Pizza de frango desfiado temperado com especiarias e coberto por mussarela derretida, resultando em uma pizza leve e saborosa." 
                  valor="44,99" 
                />
                <Card 
                  img="src/assets/temporaryPizzas/frangocatupiry.webp" 
                  title="Pizza de Frango c/ Catupiry" 
                  desc="Um dos sabores mais amados. Frango desfiado suculento sobre camada cremosa de Catupiry e molho artesanal de tomate. Textura e sabor na medida certa." 
                  valor="44,99" 
                />
                <Card 
                  img="src/assets/temporaryPizzas/frangocreamcheese.webp" 
                  title="Pizza de Frango c/ Cream Cheese" 
                  desc="-" 
                  valor="40,00" 
                />
                <Card 
                  img="https://placehold.co/250x250/cdcdcd/000?text=Frango+Imperial" 
                  title="Pizza de Frango Imperial" 
                  desc="-" 
                  valor="50,00" 
                  label="Nova"
                  bg_label="#c10007"
                  border_color="#c10007"
                />
                <Card 
                  img="src/assets/temporaryPizzas/frangoimperialcc.webp" 
                  title="Pizza de Frango Imperial c/ Cream Cheese" 
                  desc="-" 
                  valor="50,00" 
                  label="Nova"
                  bg_label="#c10007"
                  border_color="#c10007"
                />
                <Card 
                  img="src/assets/temporaryPizzas/frangocheddar.webp" 
                  title="Pizza de Frango c/ Cheddar" 
                  desc="Frango desfiado com cheddar cremoso e mussarela derretida, criando uma pizza de sabor intenso e irresistível." 
                  valor="34,00" 
                />
                <Card 
                  img="src/assets/temporaryPizzas/frangobacon.webp" 
                  title="Pizza de Frango c/ Bacon" 
                  desc="-" 
                  valor="40,00"            
                />
                <Card 
                  img="src/assets/temporaryPizzas/frangotropical.webp" 
                  title="Pizza de Frango Tropical" 
                  desc="Combinação agridoce perfeita: frango desfiado e pedaços de abacaxi, trazendo leveza e frescor a cada mordida." 
                  valor="34,00"            
                  label="Nova" 
                  bg_label="#c10007" 
                  border_color="#c10007"
                />
                <Card 
                  img="src/assets/temporaryPizzas/frangobarbecue.webp" 
                  title="Pizza de Frango c/ Barbecue" 
                  desc="Frango desfiado e suculento, coberto com molho barbecue e mussarela derretida, com toque defumado e levemente adocicado." 
                  valor="34,00" 
                />
                <Card 
                  img="https://placehold.co/225x200/cdcdcd/000?text=Bacon" 
                  title="Pizza de Bacon" 
                  desc="-" 
                  valor="40,00" 
                />
                <Card 
                  img="https://placehold.co/225x200/cdcdcd/000?text=Camarão" 
                  title="Pizza de Camarão" 
                  desc="-" 
                  valor="46,00" 
                />
                <Card 
                  img="https://placehold.co/225x200/cdcdcd/000?text=Camarão+c/+Catupiry" 
                  title="Pizza de Camarão c/ Catupiry" 
                  desc="-" 
                  valor="50,00" 
                />
                <Card 
                  img="https://placehold.co/225x200/cdcdcd/000?text=Camarão+c/+Cream+Cheese" 
                  title="Pizza de Camarão c/ Cream Cheese" 
                  desc="-" 
                  valor="54,00" 
                />
                <Card 
                  img="src/assets/temporaryPizzas/mista.webp" 
                  title="Pizza Mista" 
                  desc="O equilíbrio clássico entre presunto e mussarela derretida, sobre molho artesanal e massa fina, resultando em uma pizza simples, saborosa e nostálgica." 
                  valor="44,99"
                />
                <Card 
                  img="https://placehold.co/225x200/cdcdcd/000?text=Presunto" 
                  title="Pizza de Presunto" 
                  desc="Pizza tradicional com molho artesanal, presunto fatiado e mussarela dourada, finalizada com orégano fresco e azeite." 
                  valor="44,99" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  )

}