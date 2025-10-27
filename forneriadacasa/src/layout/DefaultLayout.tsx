import "./DefaultLayout.css";

import About from "../pages/About";
import Delivery from "../pages/Delivery";
import Home from "../pages/Home";
import Local from "../pages/Local";

export default function DefaultLayout() {

  return (

    <main className="flex flex-col items-center justify-center relative">
      <Home />
      <Delivery />
      <Local />
      <About />
    </main>

  )

}