import "./WhatsApp.css";

import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsApp() {

  return (

    <div className="fixed bottom-5 right-5 z-2">
      <a href={`https://wa.me/5581983421723?text=${encodeURIComponent(`Olá! Gostaria de ser atendido.`)}`} target="_blank" rel="noopener noreferrer" title="Ir ao WhatsApp." className="fdc-whatsapp flex items-center justify-center relative bg-[#25d366] hover:bg-[#29ba5e] active:bg-[#29ba5e] transition-colors ease-in-out duration-300 !p-2.25 rounded-full">
        <span className="w-noti flex items-center justify-center absolute top-[-6px] right-[-4px] bg-red-700 h-[20px] w-[20px] text-white text-[.825rem] font-bold rounded-full border-1 border-white">1</span>
        <FaWhatsapp size={42} color="white" />
      </a>
    </div>

  )

}