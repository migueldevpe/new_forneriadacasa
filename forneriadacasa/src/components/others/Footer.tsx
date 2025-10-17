import "./Footer.css";

import { Link } from "react-router-dom";

import footerImg from "../../assets/images/footer.webp";

import { IoLogoFacebook } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { IoIosPin, IoLogoWhatsapp } from "react-icons/io";
import { useHandleSectionClick } from "../../hooks/useHandleSectionClick";

export default function Footer() {
  const handleSectionClick = useHandleSectionClick()

  return (

    <footer className="flex items-center justify-center border-t-1 border-[#266f32]">
      <div className="flex flex-col gap-4 w-full max-w-[1000px]">
        <div className="f-content flex justify-between flex-row">
          <div className="max-w-[200px]">
            <img src={footerImg} alt="#" loading="lazy" decoding="async" fetchPriority="low" className="aspect-square" />
          </div>
          <div className="f-columns flex flex-row gap-10">
            <div>
              <h1 className="text-[1.175rem] font-bold !mb-2">Acesso rápido</h1>
              <ul className="flex flex-col gap-1.5 font-bold">
                <li className="hover:underline active:underline cursor-pointer">
                  <a href="#" onClick={handleSectionClick("#home")}>Início</a>
                </li>
                <li className="hover:underline active:underline cursor-pointer">
                  <a href="#" onClick={handleSectionClick("#delivery")}>Delivery</a>
                </li>
                <li className="hover:underline active:underline cursor-pointer">
                  <a href="#" onClick={handleSectionClick("#local")}>Local</a>
                </li>
                <li className="hover:underline active:underline cursor-pointer">
                  <a href="#" onClick={handleSectionClick("#about")}>Sobre</a>
                </li>
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
                }} className="hover:underline active:underline cursor-pointer">Fazer pedido</Link>
              </ul>
            </div>
            <div>
              <h1 className="text-[1.175rem] font-bold !mb-2">Contatos</h1>
              <ul className="flex flex-col gap-1.5 font-bold">
                <li className="flex gap-1.5 hover:underline active:underline cursor-pointer">
                  <IoLogoWhatsapp />
                  <a href="" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </li>
                <li className="flex gap-1.5 hover:underline active:underline cursor-pointer">
                  <PiInstagramLogoFill />
                  <a href="" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
                <li className="flex gap-1.5 hover:underline active:underline cursor-pointer">
                  <IoLogoFacebook />
                  <a href="" target="_blank" rel="noopener noreferrer">Facebook</a>
                </li>
                <li className="flex gap-1.5 hover:underline active:underline cursor-pointer">
                  <MdPhoneInTalk />
                  <a href="tel:558183421723" target="_blank" rel="noopener noreferrer">(81) 9 8342-1723</a>
                </li>
                <li className="flex gap-1.5 hover:underline active:underline cursor-pointer">
                  <MdEmail />
                  <a href="mailto:forneriadacasa@gmail.com" target="_blank" rel="noopener noreferrer">forneriadacasa@gmail.com</a>
                </li>
                <li className="flex gap-1.5 max-w-[275px] hover:underline active:underline cursor-pointer">
                  <IoIosPin className="shrink-0" />
                  <a href="" target="_blank" rel="noopener noreferrer">R. José P de Oliveira, 21 - Ouro Preto, Olinda - PE, 53370-525</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="f-label flex justify-between flex-row">
          <p className="text-sm">
            Desenvolvido por: <a href="https://miguelsoares.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline active:underline font-bold">Miguel Soares</a>
          </p>
          <p className="text-sm">© Forneria da Casa, 2025 - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>

  )

}