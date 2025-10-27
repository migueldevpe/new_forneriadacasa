import "./Footer.css";

import { Link } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { IoIosPin, IoLogoWhatsapp } from "react-icons/io";
import { useHandleSectionClick } from "../../hooks/useHandleSectionClick.ts";

import footerImg from "../../assets/images/footer.webp";

export default function Footer() {
  const handleSectionClick = useHandleSectionClick()

  return (

    <footer className="flex items-center justify-center border-t-1 border-[var(--border-logo)]">
      <div className="flex flex-col gap-4 w-full max-w-[1000px]">
        <div className="f-content flex justify-between flex-row">
          <div className="shrink-0">
            <img src={footerImg} alt="#" loading="lazy" decoding="async" fetchPriority="low" className="h-[190px] w-[190px] aspect-square pointer-events-none" />
          </div>
          <div className="f-columns flex flex-row gap-10">
            <div>
              <h1 className="text-[1.175rem] font-bold !mb-2">Acesso rápido</h1>
              <ul className="flex flex-col gap-1.5 font-bold">
                <li className="flex hover:underline active:underline cursor-pointer">
                  <a href="" onClick={handleSectionClick("#home")} className="w-full !leading-[1.2em]">Início</a>
                </li>
                <li className="flex hover:underline active:underline cursor-pointer">
                  <a href="" onClick={handleSectionClick("#delivery")} className="w-full !leading-[1.2em]">Delivery</a>
                </li>
                <li className="flex hover:underline active:underline cursor-pointer">
                  <a href="" onClick={handleSectionClick("#local")} className="w-full !leading-[1.2em]">Local</a>
                </li>
                <li className="flex hover:underline active:underline cursor-pointer">
                  <a href="" onClick={handleSectionClick("#about")} className="w-full !leading-[1.2em]">Sobre</a>
                </li>
                <li className="flex hover:underline active:underline cursor-pointer">
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
                  }} title="Ir para página de pizzas." className="w-full !leading-[1.2em]">Fazer pedido</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[1.175rem] font-bold !mb-2">Contatos</h1>
              <ul className="flex flex-col gap-1.5 font-bold">
                <li className="flex items-center gap-1.5 hover:underline active:underline cursor-pointer">
                  <IoLogoWhatsapp />
                  <a href={`https://wa.me/5581983421723?text=${encodeURIComponent(`Olá! Gostaria de ser atendido.`)}`} target="_blank" rel="noopener noreferrer" className="w-full !leading-[1.2em]">WhatsApp</a>
                </li>
                <li className="flex items-center gap-1.5 hover:underline active:underline cursor-pointer">
                  <PiInstagramLogoFill />
                  <a href="https://www.instagram.com/forneriadacasa/" target="_blank" rel="noopener noreferrer" className="w-full !leading-[1.2em]">Instagram</a>
                </li>
                <li className="flex items-center gap-1.5 hover:underline active:underline cursor-pointer">
                  <IoLogoFacebook />
                  <a href="https://www.facebook.com/forneriadacasa/" target="_blank" rel="noopener noreferrer" className="w-full !leading-[1.2em]">Facebook</a>
                </li>
                <li className="flex items-center gap-1.5 hover:underline active:underline cursor-pointer">
                  <MdPhoneInTalk />
                  <a href="tel:558183421723" target="_blank" rel="noopener noreferrer" className="w-full !leading-[1.2em]">(81) 9 8342-1723</a>
                </li>
                <li className="flex items-center gap-1.5 hover:underline active:underline cursor-pointer">
                  <MdEmail />
                  <a href="mailto:forneriadacasa@gmail.com" target="_blank" rel="noopener noreferrer" className="w-full !leading-[1.2em]">forneriadacasa@gmail.com</a>
                </li>
                <li className="flex items-center gap-1.5 max-w-[275px] hover:underline active:underline cursor-pointer">
                  <IoIosPin className="shrink-0" />
                  <a href="https://maps.app.goo.gl/MzadT13VmtobfQ6G7" target="_blank" rel="noopener noreferrer" className="w-full !leading-[1.2em]">R. José P de Oliveira, 21 - Ouro Preto, Olinda - PE, 53370-525</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="f-label flex justify-between flex-row">
          <p className="text-sm">
            Desenvolvido por <a href="https://miguelsoares.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline active:underline font-bold">Miguel Soares</a>
          </p>
          <p className="text-sm">© Forneria da Casa, 2025 - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>

  )

}