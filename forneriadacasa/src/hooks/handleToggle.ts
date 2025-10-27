let currentTimeout: number | undefined;

const ANIMATION_DURATION = 300;

export function handleToggle(elementoAberto: 'menu' | 'carrinho') {
  return () => {
    const menu = document.querySelector(".menu") as HTMLElement;
    const menuOverlay = document.querySelector(".overlay") as HTMLElement;
    const btnMenu = document.getElementById("mobile-menu") as HTMLElement;
    const shippingCart = document.querySelector(".cart") as HTMLElement;
    
    if (currentTimeout) {
      clearTimeout(currentTimeout);
      currentTimeout = undefined;
    }

    currentTimeout = setTimeout(() => {
      const isCarrinhoAtivo = shippingCart.classList.contains("active");
      
      if (elementoAberto === 'carrinho') {
          
        if (isCarrinhoAtivo) {
          shippingCart.classList.remove("active");
        } else {
          shippingCart.classList.add("active");
            
          if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            menuOverlay.classList.remove("active");
            btnMenu.classList.remove("active");
            btnMenu.classList.add("closing");
          }
        }
      } 
        
      else if (window.innerWidth <= 768) {
        
        if (elementoAberto === 'menu') {
          const isMenuAtivo = menu.classList.contains("active");

          if (isMenuAtivo) {
            menu.classList.remove("active");
            menuOverlay.classList.remove("active");
            btnMenu.classList.remove("active");
            btnMenu.classList.add("closing");
          } else {
            menu.classList.add("active");
            menuOverlay.classList.add("active");
            btnMenu.classList.remove("closing");
            btnMenu.classList.add("active");

            if (isCarrinhoAtivo) {
              shippingCart.classList.remove("active");
            }
          }
        }
      }

      currentTimeout = undefined; 

    }, ANIMATION_DURATION);
  }
}