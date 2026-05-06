import { useEffect } from "react";

/** Auto-applies `.is-visible` to any element with `.reveal` class as it enters viewport. */
const RevealOnScroll = () => {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => obs.observe(el));

    // Re-scan when DOM mutates (e.g., filters render new cards)
    const mo = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)").forEach((el) => obs.observe(el));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      obs.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
};

export default RevealOnScroll;
