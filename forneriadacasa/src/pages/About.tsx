import OrderNow from "../components/others/OrderNow";
import "./About.css";

export default function About() {

  return (
    
    <section id="about" className="flex items-center justify-center flex-col gap-16 w-full bg-linear-to-b from-[#d7d7d7] to-[#f5f5f5] !py-16">
      <div className="about-container flex flex-row-reverse gap-10 justify-between w-full max-w-[1000px]">
        <div className="self-center w-6/12">
          <div className="about-text-content {max-w-[475px] !ml-auto}">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl !font-['DancingScript'] font-semibold">Isso não é apenas uma Pizzaria</h1>
              <h2 className="text-[#ce9009] [font-size:var(--h2-1-about)] uppercase tracking-tight font-bold !leading-[.8em] hover:transform-[scale(1.01)] active:transform-[scale(1.01)] transition-transform duration-300">Forneria da Casa</h2>
              <p className="text-justify hyphens-auto !leading-[1.2em]">Em meio às ruas de Ouro Preto, Olinda, existe uma promessa de conforto e sabor. Esta é a Forneria da Casa — mais do que uma pizzaria, um verdadeiro refúgio de delícias artesanais entregues à sua porta. Funcionando exclusivamente via delivery, a Forneria da Casa vai além da conveniência: é uma experiência gastronômica pensada para transformar cada refeição em um momento especial.</p>
            </div>
            <aside className="flex w-full max-w-[475px] !mt-3 !ml-auto">
              <div className="flex items-center justify-between w-full">
                <OrderNow />
                <a href="#" target="_blank" rel="noopener noreferrer" className="insta-flavio text-[1.25rem] !font-['DancingScript'] font-semibold">Flávio Bione</a>
              </div>
            </aside>
          </div>
        </div>
        <picture className="w-6/12">
          <img src="https://forneriadacasa.vercel.app/assets/flaviobione-Bq3IZOUp.webp" alt="#" className="h-full w-full object-contain aspect-[650/731] pointer-events-none"/>
        </picture>
      </div>
      <div className="feedbacks-container flex flex-row gap-10 justify-between w-full max-w-[1000px]">
        <div className="self-center w-6/12">
          <div className="feedback-text-content {max-w-[475px] !mr-auto}">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl !font-['DancingScript'] font-semibold">Feedbacks deliciosos</h1>
              <h2 className="[font-size:var(--h2-2-about)] font-bold !leading-[.8em]">O que falam sobre a gente?</h2>
              <p className="text-justify hyphens-auto !leading-[1.2em]">Descubra por que tantos clientes saem daqui com um sorriso no rosto (e com a pizza quentinha!). A gente separou algumas avaliações reais do Google pra você ver o que estão achando da Forneria da Casa. &#x1F355;&#x2728;</p>
            </div>
          </div>
        </div>
        <div className="w-6/12">
          <script src="https://static.elfsight.com/platform/platform.js" defer async></script>
          <div className="elfsight-app-4438d660-afd7-485a-9d24-ef61b7765cfb aspect-[488/428]" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  
  )

}