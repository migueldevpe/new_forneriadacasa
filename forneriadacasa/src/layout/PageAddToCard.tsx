import "./PageAddToCard.css";

import Pizzas from "../pages/Pizzas.tsx"

import { useEffect } from "react";

export default function PageAddToCard() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta)
    }
  }, [])

  return (

    <main className="flex items-center justify-center flex-col">
      <Pizzas/>
    </main>

  )

}