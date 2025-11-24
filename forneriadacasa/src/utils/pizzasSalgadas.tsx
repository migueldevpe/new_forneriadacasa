import Card from "../components/pizzaCard/Card.tsx";

import Pepperoni from "../assets/temporaryPizzas/pepperoni.webp";
import Nordestina from "../assets/temporaryPizzas/nordestina.webp";
import Marguerita from "../assets/temporaryPizzas/marguerita.webp"
import Portuguesa from "../assets/temporaryPizzas/portuguesa.webp"
import TrêsQueijos from "../assets/temporaryPizzas/3queijos.webp";
import QuatroQueijos from "../assets/temporaryPizzas/4queijos.webp";
import Calabresa from "../assets/temporaryPizzas/calabresa.webp"
import CalabresaCatupiry from "../assets/temporaryPizzas/calabresacatupiry.webp"
import CalabresaCheddar from "../assets/temporaryPizzas/calabresacheddar.webp";
import CalabresaCreamCheese from "../assets/temporaryPizzas/calabresacreamcheese.webp";
import CalabresaBarbecue from "../assets/temporaryPizzas/calabresabarbecue.webp"
import Frango from "../assets/temporaryPizzas/frango.webp"
import FrangoCatupiry from "../assets/temporaryPizzas/frangocatupiry.webp"
import FrangoCheddar from "../assets/temporaryPizzas/frangocheddar.webp";
import FrangoCreamCheese from "../assets/temporaryPizzas/frangocreamcheese.webp";
import FrangoBarbecue from "../assets/temporaryPizzas/frangobarbecue.webp"
import FrangoImperial from "../assets/temporaryPizzas/frangoimperialIA.webp"
import FrangoImperialCC from "../assets/temporaryPizzas/frangoimperialcc.webp"
import FrangoTropical from "../assets/temporaryPizzas/frangotropical.webp";
import FrangoBacon from "../assets/temporaryPizzas/frangobacon.webp";
import Bacon from "../assets/temporaryPizzas/baconIA.webp"
import Camarão from "../assets/temporaryPizzas/camarao.webp"
import CamarãoCatupiry from "../assets/temporaryPizzas/camaraocatupiryIA.webp"
import CamarãoCreamCheese from "../assets/temporaryPizzas/camaraocreamcheese.webp"
import Mussarela from "../assets/temporaryPizzas/mussarela.webp"
import MussarelaCatupiry from "../assets/temporaryPizzas/mussarelacatupiryIA.webp"
import MussarelaCheddar from "../assets/temporaryPizzas/mussarelacheddar.webp"
import Presunto from "../assets/temporaryPizzas/presuntoIA.webp"
import Mista from "../assets/temporaryPizzas/mista.webp"
import ManjericãoTomateSeco from "../assets/temporaryPizzas/manjericaotomatesecoIA.webp"

const pizzasSalgadas = [

  { 
    img: Pepperoni,
    title: "Pizza de Pepperoni",
    desc: "Clássica e irresistível, preparada com molho de tomate artesanal, mussarela derretida e generosas fatias de pepperoni levemente picante, que liberam seu sabor característico quando assam. Finalizada com um toque de orégano fresco.",
    valor: "44,00" 
  },
  { 
    img: Nordestina,
    title: "Pizza Nordestina",
    desc: "Uma homenagem ao sabor regional: encorpada com charque desfiada, queijo coalho em cubos e cebola. Rica em sabor, com textura marcante e aquele toque regional delicioso.",
    valor: "48,00" 
  },
  {
    img: Marguerita, 
    title: "Pizza de Marguerita",
    desc: "Pizza tradicional, com mussarela derretida, molho de tomate, tomate fresco e manjericão, finalizada com orégano e azeitonas. Frescor clássico e aroma marcante.",
    valor: "34,00"
  },
  { 
    img: Portuguesa,
    title: "Pizza Portuguesa",
    desc: "Uma pizza super completa: ovos mexidos, presunto, ervilha, pimentão, tomate, cebola e mussarela. Colorida, suculenta e cheia de sabor tradicional.",
    valor: "44,00" 
  },
  { 
    img: TrêsQueijos,
    title: "Pizza de 3 Queijos",
    desc: "Cremosidade pura: mussarela derretida, Catupiry e cheddar formando uma camada rica e macia, finalizada com orégano e azeitonas para um aroma irresistível.", 
    valor: "34,00"
  },
  { 
    img: QuatroQueijos,
    title: "Pizza de 4 Queijos",
    desc: "Mussarela, gorgonzola, provolone e Catupiry sobre molho de tomate, finalizados com salame italiano, orégano e azeitonas. Uma pizza intensa e extremamente cremosa.",
    valor: "52,00",
    label: "Novidade",
    bg_label: "#c10007",
    border_color: "#c10007"
  },
  { 
    img: Calabresa,
    title: "Pizza de Calabresa",
    desc: "Aquela combinação imbatível: calabresa fatiada soltando sabor, cebola levemente caramelizada no forno, mussarela derretida e molho de tomate bem temperado. Uma pizza suculenta, tradicional e cheia de aroma.",
    valor: "34,00" 
  },
  { 
    img: CalabresaCatupiry,
    title: "Pizza de Calabresa c/ Catupiry",
    desc: "Mussarela e calabresa sobre molho de tomate, com cremosidade extra do Catupiry, acompanhadas de cebola, orégano e azeitonas.",
    valor: "36,00" 
  },
  { 
    img: CalabresaCheddar,
    title: "Pizza de Calabresa c/ Cheddar",
    desc: "Calabresa soltando sabor enquanto o cheddar derrete e deixa tudo mais cremoso. A cebola e o orégano trazem o aroma final que completa essa pizza com personalidade forte.",
    valor: "36,00" 
  },
  { 
    img: CalabresaCreamCheese,
    title: "Pizza de Calabresa c/ Cream Cheese",
    desc: "Calabresa fatiada sobre mussarela e molho de tomate, com cream cheese, cebola, orégano e azeitonas. Combinação entre o salgado marcante e a cremosidade.",
    valor: "42,00" 
  },          
  { 
    img: CalabresaBarbecue,
    title: "Pizza de Calabresa c/ Barbecue",
    desc: "Aqui o sabor defumado domina: calabresa fatiada, molho barbecue envolvendo tudo e mussarela completando a suculência. Cebola, orégano e azeitonas deixam ainda mais saborosa.", 
    valor: "36,00" 
  },
  { 
    img: Frango,
    title: "Pizza de Frango",
    desc: "Frango desfiado bem temperadinho, mussarela quentinha e cebola trazendo aquele gostinho extra. Com o molho de tomate e o toque de orégano, fica macia, leve e muito gostosa.",
    valor: "34,00" 
  },
  { 
    img: FrangoCatupiry,
    title: "Pizza de Frango c/ Catupiry",
    desc: "Frango desfiado macio, Catupiry original derretido por cima e mussarela completando a cremosidade. Leve, suave e muito saborosa.",
    valor: "36,00" 
  },
  { 
    img: FrangoCheddar,
    title: "Pizza de Frango c/ Cheddar",
    desc: "Frango temperado com cheddar cremoso derretido, deixando a pizza bem encorpada. A cebola dá o toque final e o orégano fecha com aroma irresistível.",
    valor: "36,00" 
  },
  { 
    img: FrangoCreamCheese,
    title: "Pizza de Frango c/ Cream Cheese", 
    desc: "Frango temperado com cream cheese derretendo por cima, dando uma cremosidade absurda. Junto da mussarela e cebola, fica uma pizza macia e muito gostosa.",
    valor: "42,00",
  },
  { 
    img: FrangoBarbecue,
    title: "Pizza de Frango c/ Barbecue",
    desc: "Frango desfiado coberto com molho barbecue, trazendo aquele sabor defumado que todo mundo ama. Com a mussarela e o orégano, fica uma combinação intensa e deliciosa.",
    valor: "36,00" 
  },
  { 
    img: FrangoImperial,
    img_ia: true,
    title: "Pizza de Frango Imperial",
    desc: "Mussarela e molho de tomate com frango desfiado, queijo do reino em cubos, cebola, orégano e azeitonas. Sabor encorpado e diferenciado.",
    valor: "48,00", 
    label: "Novidade",
    bg_label: "#c10007",
    border_color: "#c10007"
  },
  { 
    img: FrangoImperialCC, 
    title: "Pizza de Frango Imperial c/ Cream Cheese",
    desc: "Mussarela, frango desfiado, cream cheese e queijo do reino em cubos sobre molho de tomate, finalizados com cebola, orégano e azeitonas. Rica, cremosa e muito saborosa.",
    valor: "52,00", 
    label: "Novidade",
    bg_label: "#c10007",
    border_color: "#c10007"
  },
  { 
    img: FrangoTropical,
    title: "Pizza de Frango Tropical",
    desc: "Frango desfiado com abacaxi em cubos trazendo um frescor doce delicioso. Junto da mussarela derretida e do molho bem temperado, fica leve, suculenta e refrescante.",
    valor: "36,00",            
    label: "Novidade",
    bg_label: "#c10007", 
    border_color: "#c10007"
  },
  { 
    img: FrangoBacon,
    title: "Pizza de Frango c/ Bacon",
    desc: "Frango desfiado temperado, mussarela e bacon crocante, combinando cremosidade com o sabor defumado do bacon. Finalizada com orégano fresco.",
    valor: "42,00"            
  },
  { 
    img: Bacon,
    img_ia: true,
    title: "Pizza de Bacon", 
    desc: "Bacon crocante soltando sabor, mussarela bem derretida, cebola dourada e molho de tomate. Uma pizza forte, suculenta e extremamente saborosa.",
    valor: "40,00" 
  },
  { 
    img: Camarão,
    title: "Pizza de Camarão",
    desc: "Camarões suculentos com mussarela, cebola e orégano. Leve, saborosa e com aquele aroma de pizza especial.",
    valor: "48,00" 
  },
  { 
    img: CamarãoCatupiry,
    img_ia: true,
    title: "Pizza de Camarão c/ Catupiry", 
    desc: "Camarões com Catupiry original derretido, criando uma pizza cremosa, macia e cheia de sabor. Uma das mais pedidas — e com razão.", 
    valor: "52,00" 
  },
  { 
    img: CamarãoCreamCheese,
    title: "Pizza de Camarão c/ Cream Cheese", 
    desc: "Camarões com cream cheese criando um equilíbrio perfeito entre sabor suave e cremosidade. Uma pizza nobre e deliciosa.", 
    valor: "56,00" 
  },
  { 
    img: Mussarela,
    title: "Pizza de Mussarela",
    desc: "Clássico definitivo: mussarela derretida com tomate fresco sobre molho de tomate artesanal, finalizada com orégano e azeitonas. Simples, equilibrada e saborosa.",
    valor: "34,00",
    // label: "Promoção", 
    // bg_label: "#e2a222", 
    // border_color: "#e2a222" 
  },
  { 
    img: MussarelaCatupiry,
    img_ia: true,
    title: "Pizza de Mussarela c/ Catupiry",
    desc: "Clássica e cremosa na medida certa: mussarela derretida com tomate fresco por cima e aquele Catupiry original trazendo maciez e leveza a cada mordida. Fechando com orégano e azeitonas, fica equilibrada e deliciosa.",
    valor: "34,00" 
  },
  { 
    img: MussarelaCheddar,
    title: "Pizza de Mussarela c/ Cheddar",
    desc: "Mussarela e cheddar se encontram sobre molho de tomate e tomate fresco, criando um sabor encorpado e cremoso, finalizado com orégano e azeitonas.",
    valor: "34,00" 
  },
  { 
    img: Presunto,
    img_ia: true,
    title: "Pizza de Presunto",
    desc: "Presunto fatiado, mussarela derretida, cebola e molho de tomate. Uma pizza simples, mas super saborosa — aquele sabor de pizzaria tradicional que todo mundo adora.", 
    valor: "34,00" 
  },
  { 
    img: Mista, 
    title: "Pizza Mista", 
    desc: "Mussarela com presunto e calabresa sobre molho de tomate, acompanhados de cebola, orégano e azeitonas. Mistura perfeita de sabores tradicionais.",
    valor: "36,00"
  },
  { 
    img:  ManjericãoTomateSeco,
    img_ia: true,
    title: "Pizza de Manjericão Tomate Seco",
    desc: "Mussarela derretida sobre molho de tomate, combinada com tomate seco, manjericão fresco, orégano e azeitonas, criando um sabor aromático e equilibrado.", 
    valor: "34,00" 
  },

]

export default function PizzasSalgadasContent() {

  return (

    <>
      {pizzasSalgadas.map((pizzaSalgada) => {
        return (
          <Card
            key={pizzaSalgada.title}
            img={pizzaSalgada.img}
            img_ia={pizzaSalgada.img_ia}
            title={pizzaSalgada.title}
            desc={pizzaSalgada.desc}
            valor={pizzaSalgada.valor}
            label={pizzaSalgada.label}
            bg_label={pizzaSalgada.bg_label}
            border_color={pizzaSalgada.border_color}          
          />
        )
      })}
    </>

  )

}