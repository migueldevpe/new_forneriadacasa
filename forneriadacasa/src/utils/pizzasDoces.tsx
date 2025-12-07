import Card from "../components/pizzaCard/Card.tsx";

import ChocolateMM from "../assets/temporaryPizzas/chocolatem&m.webp"
import Cartola from "../assets/temporaryPizzas/cartola.webp"
import RomeueJulieta from "../assets/temporaryPizzas/romeu&julieta.webp"
import DoceLeite from "../assets/temporaryPizzas/docedeleiteIA.webp"

const pizzasDoces = [

  {
    img: ChocolateMM,
    title: "Pizza de Chocolate c/ M&M",
    desc: "Pizza doce com farta camada de chocolate derretido e confeitos M&M crocantes, trazendo o contraste ideal entre o sabor intenso do chocolate e o toque divertido do confeito.",
    valor: "34,00", 
    label: "Novidade",
    bg_label: "#c10007",
    border_color: "#c10007"
  },
  {
    img: RomeueJulieta,
    title: "Pizza Romeu e Julieta",
    desc: "A união perfeita entre doce e salgado: mussarela derretida sobre molho de tomate, coberta com goiabada cremosa que traz aquela doçura marcante e tradicional.",
    valor: "34,00"
  },
  {
    img: Cartola,
    title: "Pizza de Cartola",
    desc: "Uma combinação regional irresistível: mussarela derretida sobre molho de tomate, acompanhada de banana madura, canela aromática e um toque generoso de caramelo cremoso. Uma experiência doce e acolhedora no formato redondo.",
    valor: "34,00"
  },
  {
    img: DoceLeite,
    img_ia: true,
    title: "Pizza de Doce de Leite",
    desc: "Mussarela derretida sobre molho de tomate, coberta com doce de leite cremoso que traz textura macia e sabor adocicado perfeito para quem ama sobremesas.",
    valor: "34,00"
  }
  
];

export default function PizzasDocesContent() {

  return (

    <>
      {pizzasDoces.map((pizzaDoce) => {
        return (
          <Card
            key={pizzaDoce.title}
            img={pizzaDoce.img}
            img_ia={pizzaDoce.img_ia}
            title={pizzaDoce.title}
            desc={pizzaDoce.desc}
            valor={pizzaDoce.valor}
            label={pizzaDoce.label}
            bg_label={pizzaDoce.bg_label}
            border_color={pizzaDoce.border_color}
          />
        )
      })}
    </>

  )

}