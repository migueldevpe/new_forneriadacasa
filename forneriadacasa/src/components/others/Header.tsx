import "./Header.css";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";

//import Pizzas from "../../pages/Pizzas.tsx"
import OrderNow from "./OrderNow";

export default function Header() {
  const [hasPizza, setHasPizza] = useState(false);

  useEffect(() => {
    function toggleNumberCard() {
      const count = document.querySelectorAll(".cards-container")?.length;
      setHasPizza(count > 0);
    }

    toggleNumberCard()

    const interval = setInterval(toggleNumberCard, 100);

    return () => clearInterval(interval);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  // function handleSectionClick(e: React.MouseEvent) {
  //   e.preventDefault()

  //   // if (window.innerWidth <= 768) {

  //   // }

  //   if (location.pathname === "/") {
  //     window.scrollTo({ top: 0 })
  //   } else {
  //     navigate("/");
  //   }
  // }

  function handleSectionClick(local: string) {
    return (e: React.MouseEvent) => {
      e.preventDefault()

      // if (window.innerWidth <= 768) {

      // }

      if (location.pathname === '/') {
        if (local === "#home") {
          window.scrollTo({ top: 0 });
        } else {
          document.querySelector(local)?.scrollIntoView({ block: "start"});
        }
      } else if (location.pathname !== "/" && local === "#home") {
        const timeout = setTimeout(() => {
          window.scrollTo({ top: 0 })
        }, 100);

        navigate("/");

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          document.querySelector(local)?.scrollIntoView({ block: "start"});
        }, 100);

        navigate("/");
      
        return () => clearTimeout(timeout);
      }
    }
  }

  // ANOTAR diferença no return(e: React.MouseEvent) e function(e: React.MouseEvent), do setInterval/Timeout/Falar da Renderização condicional(X && {})

  /*{location.pathname === "/" ? "/#delivery" : "/"}*/

  return (
  
    <header className="flex items-center justify-center sticky top-0 bg-[#FED000] w-full border-b-1 border-[#266f32] drop-shadow-md z-10">
      <div className="flex items-center justify-between text-white h-[48px] w-full max-w-[1000px]">
        <Link to="/" onClick={handleSectionClick("#home")}>
          <picture className="flex shrink-0 h-[75px] w-[75px] !mt-[1.5rem] pointer-events-none drop-shadow-md">
            <img src="https://forneriadacasa.vercel.app/assets/icon-pizzaria-ifduOnsJ.webp" alt="Logo - Forneria da Casa" className="h-full w-full aspect-square" />
          </picture>        
        </Link>

        <nav className="flex items-center flex-row gap-4 h-full">
          <ul className="flex items-center flex-row gap-4 h-full text-[1.125rem] font-bold">
            <li className="nav-link flex items-center h-full">
              <button type="button" onClick={handleSectionClick("#home")} className="flex items-center h-full cursor-pointer">Início</button>
            </li>
            <li className="nav-link h-full">
              <a href="#" onClick={handleSectionClick("#delivery")} className="flex items-center h-full cursor-pointer">Delivery</a>
            </li>
            <li className="nav-link h-full">
              <a href="#" onClick={handleSectionClick("#local")} className="flex items-center h-full cursor-pointer">Local</a>
            </li>
            <li className="nav-link h-full">
              <a href="#" onClick={handleSectionClick("#about")} className="flex items-center h-full cursor-pointer">Sobre</a>
            </li>
            <li className="flex items-center h-full">
              <OrderNow />
            </li>
          </ul>
          <button type="button" className="card-button relative h-full !p-1.25 cursor-pointer">
            <MdShoppingCart size={24} />
            {hasPizza && <span className="flex items-center justify-center absolute top-[4px] right-[-4px] bg-red-500 h-[15px] w-[15px] rounded-[9999px] text-[.8rem] font-bold">1</span>}
            {/* <span className="flex items-center justify-center absolute top-[-4px] right-[-4px] bg-red-500 h-[15px] w-[15px] rounded-[9999px] text-[.8rem] font-bold">1</span> */}
          </button>
          <button type="button" className="hidden h-full cursor-pointer">
            <MdMenu size={20} />
          </button>
        </nav>
      </div>
    </header>
  
  )

}