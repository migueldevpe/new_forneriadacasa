import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollHighlight(navSelector: string = ".nav-link") {
  const location = useLocation();

  useEffect(() => {
    const navItems = document.querySelectorAll<HTMLElement>(navSelector);

    if (location.pathname !== "/") {
      navItems.forEach((item) => item.classList.remove("active"));
      return;
    }

    let currentVisibleId: string | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(
          (e) => e.isIntersecting && e.target instanceof HTMLElement
        );
        if (visibleEntries.length === 0) return;

        const mostVisible = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        )[0];

        const visibleId =
          (mostVisible?.target as HTMLElement).dataset.nav ||
          (mostVisible?.target as HTMLElement).id;

        if (visibleId && visibleId !== currentVisibleId) {
          currentVisibleId = visibleId;

          navItems.forEach((item) => {
            const itemId = item.id.replace("#", "");
            item.classList.toggle("active", itemId === visibleId);
          });
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    const sections = document.querySelectorAll<HTMLElement>(
      "section[id]"
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navSelector, location.pathname]);
}