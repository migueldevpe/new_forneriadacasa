import "./PizzasContent.css";

import Card from "../components/pizzaCard/Card";

export default function Pizzas() {

  return (

    <div className="cards-container grid gap-4 h-fit w-full">
      <Card title="Pizza de Calabresa c/ Charque" desc="Pizza tradicional, salgada, com recheio: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit." valor="41,99" label="Nova" bg_label="#c10007" border_color="#c10007"/>
      <Card title="Pizza B" desc="Pizza tradicional, doce, com recheio: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit." valor="44,99" />
      <Card title="Pizza C" desc="Pizza tradicional, salgada, com recheio: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit." valor="39,99" />
      <Card title="Pizza D" desc="Pizza tradicional, salgada, com recheio: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit." valor="44,99" />
      <Card title="Pizza de Calabresa c/ Catupiry e taltaltaltaltal" desc="Pizza tradicional, salgada, com recheio: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit." valor="41,99"/>
      <Card title="Pizza B" desc="Pizza tradicional, doce, com recheio: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit." valor="44,99" />
      <Card title="Pizza C" desc="Pizza tradicional, salgada, com recheio: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit." valor="39,99" />
      <Card title="Pizza D" desc="Pizza tradicional, salgada, com recheio: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit." valor="44,99" label="Promoção" bg_label="#e2a222" border_color="#e2a222" />
    </div>

  )

}