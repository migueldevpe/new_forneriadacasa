import "./About.css";

import { useEffect } from "react";

import ButtonFDC from "../components/others/ButtonFDC.tsx";
import bossImg from "../assets/images/flaviobione.webp";

export default function About() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.tagembed.com/embed.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  document.getElementsByClassName("tb_rv_head_log_img")[0].setAttribute("alt", "Google - Logo");

  function fixAccessibility() {
    // remove aria-roledescription
    document
      .querySelectorAll('[aria-roledescription="slide"]')
      .forEach((el) => el.removeAttribute("aria-roledescription"));

    // remove tabindex e role de elementos focáveis dentro de aria-hidden
    document.querySelectorAll('[aria-hidden="true"] [tabindex]').forEach((el) => {
      el.removeAttribute("tabindex");
      el.removeAttribute("role");
    });
  }

  function observeAndFix() {
    fixAccessibility(); // primeira limpeza

    // Observa alterações no DOM e aplica correção sempre
    const observer = new MutationObserver(() => {
      fixAccessibility();
    });

    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  }

  // Executa quando carregar
  window.addEventListener("DOMContentLoaded", observeAndFix);

  return (
    
    <section id="about" className="flex items-center justify-center flex-col w-full bg-linear-to-b from-[var(--bg-white-2)] to-[var(--bg-white-1)] scroll-mt-[48px]">
      <div className="about-container flex flex-row-reverse gap-10 justify-between w-full max-w-[1000px]">
        <div className="about-text-content self-center w-6/12">
          <div>
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl !font-['DancingScript'] font-semibold">Isso não é apenas uma Pizzaria</h1>
              <h2 className="text-[var(--title-red-2)] [font-size:var(--h2-1-about)] uppercase tracking-tight font-bold !leading-[.8em] hover:transform-[scale(1.01)] active:transform-[scale(1.01)] transition-transform ease-in-out duration-300">Forneria da Casa</h2>
              <p className="text-justify hyphens-auto !leading-[1.2em]">Em meio às ruas de Ouro Preto, Olinda, existe uma promessa de conforto e sabor. Esta é a Forneria da Casa — mais do que uma pizzaria, um verdadeiro refúgio de delícias artesanais entregues à sua porta. Funcionando exclusivamente via delivery, a Forneria da Casa vai além da conveniência: é uma experiência gastronômica pensada para transformar cada refeição em um momento especial.</p>
            </div>
            <aside className="about-aside-content flex w-full max-w-[475px] !mt-3 {!ml-auto}">
              <div className="flex items-center justify-between w-full">
                <ButtonFDC go="order" label={
                  <>
                    <span>PEDIR AGORA</span>
                  </>
                } title="Ir para página de pizzas." />
                <a href="https://www.instagram.com/chefflaviobione/" target="_blank" rel="noopener noreferrer" className="insta-flavio text-[1.25rem] !font-['DancingScript'] font-semibold">Flávio Bione</a>
              </div>
            </aside>
          </div>
        </div>
        <picture className="about-img-container w-6/12">
          <img src={bossImg} alt="#" className="h-full w-full object-contain aspect-[650/731] pointer-events-none" loading="lazy" decoding="async" fetchPriority="low" />
        </picture>
      </div>
      <div className="feedbacks-container flex flex-row gap-10 justify-between w-full max-w-[1000px]">
        <div className="feedbacks-text-content self-center w-6/12">
          <div>
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl !font-['DancingScript'] font-semibold">Feedbacks deliciosos</h1>
              <h2 className="[font-size:var(--h2-2-about)] font-bold !leading-[.8em]">O que falam sobre a gente?</h2>
              <p className="text-justify hyphens-auto !leading-[1.2em]">Descubra por que tantos clientes saem daqui com um sorriso no rosto (e com a pizza quentinha!). A gente separou algumas avaliações reais do Google pra você ver o que estão achando da Forneria da Casa. &#x1F355;&#x2728;</p>
            </div>
          </div>
        </div>
        <div className="feedbacks-card-container w-6/12">
          <div
            className="tagembed-widget"
            style={{ width: "auto", height: "auto" }}
            data-widget-id="285745"
            data-website="1"
          ></div>
        </div>
      </div>
    </section>
  
  )

}