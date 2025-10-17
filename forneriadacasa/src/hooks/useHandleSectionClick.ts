import { useLocation, useNavigate } from "react-router-dom";

export function useHandleSectionClick() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (section: string) => (e: React.MouseEvent) => {
    e.preventDefault()

    // if (window.innerWidth <= 768) {

    // }

    if (location.pathname === "/") {
      if (section === "#home") {
        window.scrollTo({ top: 0 });
      } else {
        document.querySelector(section)?.scrollIntoView({ block: "start"});
      }
    } else if (location.pathname !== "/" && section === "#home") {
      const timeout = setTimeout(() => {
        window.scrollTo({ top: 0 })
      }, 300);

      navigate("/");

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        document.querySelector(section)?.scrollIntoView({ block: "start" });
      }, 300);

      navigate("/");
    
      return () => clearTimeout(timeout);
    }
  };
  
  return handleSectionClick;
}

