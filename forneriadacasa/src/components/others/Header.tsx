import "./Header.css";

import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { useCartStore } from "../../hooks/cartStore.ts";
import { useHandleSectionClick } from "../../hooks/useHandleSectionClick.ts";
import { useScrollHighlight } from "../../hooks/useScrollHighlight.ts";
import { handleToggle } from "../../hooks/handleToggle.ts";

import ButtonFDC from "./ButtonFDC.tsx";
import Logo from "/logo.webp"

export default function Header() {
  const cart = useCartStore((state) => state.cart);
  useScrollHighlight();

  const handleSectionClick = useHandleSectionClick();

  // ANOTAR diferença no return (e: React.MouseEvent) => {} e function(e: React.MouseEvent), do setInterval/Timeout/Falar da Renderização condicional {X && ()}

  return (
  
    <header id="header" className="sticky top-0 w-full z-10">
      <div className="flex items-center justify-center bg-[var(--bg-yellow-1)] h-full w-full border-b-1 border-[var(--border-logo)] shadow-md">
        <div className="flex items-center justify-between text-white h-[48px] w-full max-w-[1000px]">
          <Link to="/" onClick={handleSectionClick("#home")}>
            <picture className="flex shrink-0 h-[85px] w-[85px] !mt-[2rem] pointer-events-none drop-shadow-md">
              <img src={Logo} alt="Logo - Forneria da Casa" className="h-full w-full aspect-square" loading="eager" decoding="sync" fetchPriority="high" />
            </picture>        
          </Link>
          <nav className="nav-container flex items-center flex-row gap-3 h-full">
            <ul className="menu flex items-center flex-row gap-3 h-full text-[1.125rem] font-bold">
              <li id="#home" onClick={handleSectionClick("#home")} className="nav-link flex items-center h-full">
                <button type="button" className="flex items-center h-full cursor-pointer">Início</button>
              </li>
              <li id="#delivery" className="nav-link h-full">
                <a href="" onClick={handleSectionClick("#delivery")} className="flex items-center h-full cursor-pointer">Delivery</a>
              </li>
              <li id="#local" className="nav-link h-full">
                <a href="" onClick={handleSectionClick("#local")} className="flex items-center h-full cursor-pointer">Local</a>
              </li>
              <li id="#about" className="nav-link h-full">
                <a href="" onClick={handleSectionClick("#about")} className="flex items-center h-full cursor-pointer">Sobre</a>
              </li>
              {/* <li className="flex items-center h-full">
                <OrderNow />
              </li> */}
            </ul>
            <ButtonFDC go="order" label={
              <>
                <span>PEDIR AGORA</span>
              </>
            } title="Ir para página de pizzas." />
            <button type="button" className="card-button relative h-full !p-1.25 cursor-pointer" title="Acessar carrinho." onClick={handleToggle('carrinho')}>
              <MdShoppingCart size={24} />
              {cart.length > 0 && <span className="flex items-center justify-center absolute top-[4px] right-[-4px] bg-[var(--cart-contain-icon-bg)] h-[15px] w-[15px] rounded-[9999px] text-[.8rem] font-bold">1</span>}
              {/* <span className="flex items-center justify-center absolute top-[-4px] right-[-4px] bg-red-500 h-[15px] w-[15px] rounded-[9999px] text-[.8rem] font-bold">1</span> */}
            </button>
            <button title="Menu" id="mobile-menu" onClick={handleToggle('menu')} className="flex items-center justify-center flex-col !p-1.25" >
              <div className="line-top"></div>
              <div className="line-middle"></div>
              <div className="line-bottom"></div>
            </button>
          </nav>
        </div>
      </div>
    </header>
  
  )

}