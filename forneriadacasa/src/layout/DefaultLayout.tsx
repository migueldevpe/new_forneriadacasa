import About from "../pages/About";
import Delivery from "../pages/Delivery";
import Home from "../pages/Home";
import Local from "../pages/Local";
import "./DefaultLayout.css";

export default function DefaultLayout() {
  // const n1 = Number(window.prompt('N1') ?? 0)
  // const n2 = Number(window.prompt('N2') ?? 0)
  // const s = n1 + n2
  // window.alert(`Resultado: ${s}`)

  return (

    <main className="flex flex-col items-center justify-center">
      <Home />
      <Delivery />
      <Local />
      <About />
    </main>

  )

}