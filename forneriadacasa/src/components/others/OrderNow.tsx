import "./OrderNow.css";

import { Link } from "react-router-dom";

export default function OrderNow() {

  return (

    <Link to="order" onClick={() => {
      let behavior = "";

      if (location.pathname === "/") {
        behavior = "instant";
      } else {
        behavior = "smooth"
      }
      const timeout = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: behavior as ScrollBehavior });
      }, 150);
    
      return () => clearTimeout(timeout);
    }} className="btn-ordernow bg-[#06008A] hover:bg-[#2245e2] active:bg-[#2245e2] text-white text-[.9rem] font-bold h-fit w-fit !py-2.5 !px-3 hover:shadow-[inset_0_-2px_0_#06008A] active:shadow-[inset_0_-2px_0_#06008A] rounded-md">PEDIR AGORA</Link>

  )

}