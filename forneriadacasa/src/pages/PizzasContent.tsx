import "./PizzasContent.css";

import Card from "../components/pizzaCard/Card";

export default function Pizzas() {

  return (

    <div className="flex items-center justify-center flex-col gap-8">
      <div id="salgadas" className="scroll-mt-[88px] w-full">
        <h1 className="text-[var(--text-salgado-doce)] text-3xl font-semibold !font-['DancingScript'] !mb-4">Salgadas</h1>
        {/* <h2 className="text-black font-bold">SISTEMA EM DESENVOLVIMENTO, PEÇA NO <a href={`https://wa.me/5581983421723?text=${encodeURIComponent(`Olá! Gostaria de ser atendido.`)}`} target="_blank" rel="noopener noreferrer" title="Ir ao WhatsApp." className="text-[#25d366] hover:underline active:underline">WHATSAPP</a>.</h2> */}
        <div className="cards-container grid gap-4 h-fit w-full">
          <Card 
            img="src/assets/temporaryPizzas/marguerita.webp" 
            title="Pizza de Marguerita" 
            desc="Pizza tradicional, com molho artesanal de tomate, mussarela derretida, rodelas de tomate fresco e manjericão, trazendo o autêntico sabor italiano em cada fatia." 
            valor="41,99"
          />
          <Card 
            img="src/assets/temporaryPizzas/mussarela.webp" 
            title="Pizza de Mussarela" 
            desc="Simples e irresistível. Massa fina e crocante, coberta com molho artesanal de tomate e generosa camada de mussarela dourada, finalizada com orégano e azeite." 
            valor="44,99" 
            label="Promoção" 
            bg_label="#e2a222" 
            border_color="#e2a222" 
          />
          <Card 
            img="src/assets/temporaryPizzas/mussarelacheddar.webp" 
            title="Pizza de Mussarela c/ Cheddar" 
            desc="Pizza cremosa e saborosa, coberta com mussarela e cheddar derretido, que juntos criam uma harmonia perfeita entre o leve e o marcante." 
            valor="44,99" 
          />
          <Card 
            img="src/assets/temporaryPizzas/nordestina.webp" 
            title="Pizza Nordestina" 
            desc="-" 
            valor="39,99" 
          />
          <Card 
            img="src/assets/temporaryPizzas/pepperoni.webp" 
            title="Pizza de Pepperoni" 
            desc="-" 
            valor="44,99" 
          />
          <Card 
            img="src/assets/temporaryPizzas/portuguesa.webp" 
            title="Pizza Portuguesa" 
            desc="-" 
            valor="39,99" 
          />
          <Card 
            img="src/assets/temporaryPizzas/4queijos.webp" 
            title="Pizza de 3 Queijos" 
            desc="Combinação irresistível de mussarela, parmesão e gorgonzola, criando uma pizza cremosa e intensa, perfeita para os amantes de queijo." 
            valor="41,99"
          />
          <Card 
            img="src/assets/temporaryPizzas/calabresa.webp" 
            title="Pizza de Calabresa" 
            desc="Tradicional e cheia de sabor. Coberta com molho artesanal, rodelas de calabresa levemente grelhadas e cebolas, finalizada com orégano e toque de azeite." 
            valor="44,99" 
          />
          <Card 
            img="https://placehold.co/225x200/cdcdcd/000?text=Calabresa+c/+Catupiry" 
            title="Pizza de Calabresa c/ Catupiry" 
            desc="Clássica e equilibrada. Calabresa grelhada sobre uma camada generosa de Catupiry, resultando em contraste perfeito entre o salgado e o suave." 
            valor="44,99" 
          />
          <Card 
            img="src/assets/temporaryPizzas/calabresacreamcheese.webp" 
            title="Pizza de Calabresa c/ Cream Cheese" 
            desc="-" 
            valor="44,99" 
          />
          <Card 
            img="https://placehold.co/225x200/cdcdcd/000?text=Calabresa+c/+Cheddar" 
            title="Pizza de Calabresa c/ Cheddar" 
            desc="Sabor marcante e envolvente: calabresa dourada com cheddar cremoso, uma combinação intensa e deliciosa." 
            valor="39,99" 
          />          
          <Card 
            img="src/assets/temporaryPizzas/calabresabarbecue.webp" 
            title="Pizza de Calabresa c/ Barbecue" 
            desc="Pizza irresistível com calabresa grelhada, molho barbecue defumado e cebolas caramelizadas, oferecendo um toque adocicado e sofisticado." 
            valor="44,99" 
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
            valor="44,99" 
          />
          <Card 
            img="src/assets/temporaryPizzas/frangocheddar.webp" 
            title="Pizza de Frango c/ Cheddar" 
            desc="Frango desfiado com cheddar cremoso e mussarela derretida, criando uma pizza de sabor intenso e irresistível." 
            valor="44,99" 
          />
          <Card 
            img="src/assets/temporaryPizzas/frangobacon.webp" 
            title="Pizza de Frango c/ Bacon" 
            desc="-" 
            valor="44,99"            
            label="Nova" 
            bg_label="#c10007" 
            border_color="#c10007"
          />
          <Card 
            img="src/assets/temporaryPizzas/frangotropical.webp" 
            title="Pizza de Frango Tropical" 
            desc="Combinação agridoce perfeita: frango desfiado e pedaços de abacaxi, trazendo leveza e frescor a cada mordida." 
            valor="44,99"            
            label="Nova" 
            bg_label="#c10007" 
            border_color="#c10007"
          />
          <Card 
            img="src/assets/temporaryPizzas/frangobarbecue.webp" 
            title="Pizza de Frango c/ Barbecue" 
            desc="Frango desfiado e suculento, coberto com molho barbecue e mussarela derretida, com toque defumado e levemente adocicado." 
            valor="44,99" 
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
      <div id="doces" className="scroll-mt-[88px] w-full">
        <h1 className="text-[var(--text-salgado-doce)] text-3xl font-semibold !font-['DancingScript'] !mb-4">Doces</h1>
        <div className="cards-container grid gap-4 h-fit w-full">
          <Card 
            img="https://placehold.co/225x200/cdcdcd/c10007?text=Cartola" 
            title="Pizza de Cartola" 
            desc="Pizza doce tradicional inspirada na sobremesa nordestina, coberta com banana fatiada, queijo derretido, açúcar e canela, formando uma combinação perfeita entre cremosidade e aroma." 
            valor="41,99" 
            label="Nova" 
            bg_label="#c10007" 
            border_color="#c10007"
          />
          <Card 
            img="src/assets/temporaryPizzas/chocolatem&m.webp" 
            title="Pizza de Chocolate c/ M&M" 
            desc="Pizza doce com farta camada de chocolate derretido e confeitos M&M crocantes, trazendo o contraste ideal entre o sabor intenso do chocolate e o toque divertido do confeito." 
            valor="44,99" 
          />
          <Card 
            img="src/assets/temporaryPizzas/romeu&julieta.webp" 
            title="Pizza de Romeu e Julieta" 
            desc="Clássica pizza doce com goiabada cremosa e queijo derretido, equilibrando perfeitamente o doce e o salgado em uma explosão de sabor." 
            valor="39,99" 
          />
          <Card 
            img="https://placehold.co/225x200/cdcdcd/000?text=Doce+de+Leite" 
            title="Pizza de Doce de Leite" 
            desc="Pizza doce coberta com doce de leite cremoso e finalizada com um toque de canela, proporcionando um sabor suave e irresistível." 
            valor="44,99"
          />
        </div>
      </div>
    </div>

  )

}