import "./Local.css";

import ButtonFDC from "../components/others/ButtonFDC";
import localQRCode from "../assets/images/localqrcode.webp"

export default function Local() {

  return (

    <section id="local" className="flex items-center justify-center w-full bg-linear-to-b from-[var(--bg-yellow-2)] to-[var(--bg-yellow-1)] scroll-mt-[48px]">
      <div className="flex justify-between flex-row gap-10 w-full max-w-[1000px]">
        <div className="local-text-content self-center text-white w-6/12">
          <div>
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl !font-['DancingScript'] font-semibold">Onde nos encontrar?</h1>
              <h2 className="text-[var(--title-red-1)] [font-size:var(--h2-local)] font-bold tracking-tight !leading-[.8em]">Sua pizza te espera no balcão!</h2>
              <p className="text-justify hyphens-auto !leading-[1.2em]">Quer retirar sua pizza direto no balcão? De quarta a domingo, das 18h às 22h, a gente te espera com atendimento ágil, forno a todo vapor e o cheirinho que dá água na boca!</p>
            </div>
            <aside className="local-aside-content flex !mt-3">
              <ButtonFDC href="https://maps.app.goo.gl/MzadT13VmtobfQ6G7" label={
                <>
                  <span>VER LOCALIZAÇÃO</span>
                </>
              } title="Ver no Maps." />
            </aside>
          </div>
        </div>
        <div className="local-map-container relative w-6/12 border-[var(--title-red-1)] border-2 rounded-lg shadow-lg overflow-hidden">
          <iframe title="Mapa — Forneria da Casa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.082662604642!2d-34.860760899999995!3d-7.990400200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab3d4b45d4cffb%3A0x20dfb242c66eee85!2sForneria%20da%20Casa!5e0!3m2!1spt-BR!2sbr!4v1750015821532!5m2!1spt-BR!2sbr" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full w-full aspect-square">
          </iframe>
          <img src={localQRCode} alt="#" className="absolute block top-2.5 right-2.5 h-[20%] w-[20%] aspect-square drop-shadow-md pointer-events-none" loading="lazy" decoding="async" fetchPriority="low" />
        </div>
      </div>
    </section>

  )

}