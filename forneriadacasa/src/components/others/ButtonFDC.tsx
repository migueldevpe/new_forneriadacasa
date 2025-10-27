import "./ButtonFDC.css";

import { Link } from "react-router-dom";

import type React from "react";
type ButtonType = "submit" | "reset" | "button";

interface ButtonFDCProps {
  go?: string,
  href?: string,
  typeBtn?: ButtonType,
  label: React.ReactNode,
  styleClass?: string,
  onClick?: (e: React.MouseEvent) => void,
  title?: string
};

export default function ButtonFDC({ go, href, typeBtn, label, styleClass, onClick, title }: ButtonFDCProps) {

  return (

    <>
      {go ? (
        <Link to={go} onClick={onClick ? (onClick) :
        (
          () => {
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
          }
        )
      } title={title} className={`btn-fdc flex items-center justify-center flex-row bg-[var(--button-color)] hover:bg-[var(--button-color-hover)] active:bg-[var(--button-color-hover)] text-white text-[.9rem] font-bold h-fit w-fit !py-2.5 !px-3 hover:shadow-[inset_0_-3px_0_var(--button-color)] active:shadow-[inset_0_-3px_0_var(--button-color)] rounded-md cursor-pointer ${styleClass ?? ""}`}>{label}</Link>
      ) : typeBtn ? (
        <button type={typeBtn || "button"} onClick={onClick} title={title} className={`btn-fdc flex items-center justify-center flex-row bg-[var(--button-color)] hover:bg-[var(--button-color-hover)] active:bg-[var(--button-color-hover)] text-white text-[.9rem] font-bold h-fit w-fit !py-2.5 !px-3 hover:shadow-[inset_0_-3px_0_var(--button-color)] active:shadow-[inset_0_-3px_0_var(--button-color)] rounded-md cursor-pointer ${styleClass ?? ""}`}>{label}</button>        
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} title={title} className={`btn-fdc flex items-center justify-center flex-row bg-[var(--button-color)] hover:bg-[var(--button-color-hover)] active:bg-[var(--button-color-hover)] text-white text-[.9rem] font-bold h-fit w-fit !py-2.5 !px-3 hover:shadow-[inset_0_-3px_0_var(--button-color)] active:shadow-[inset_0_-3px_0_var(--button-color)] rounded-md cursor-pointer ${styleClass ?? ""}`}>{label}</a>
      )}
    </>

  )

}