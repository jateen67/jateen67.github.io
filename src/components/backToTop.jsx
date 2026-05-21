import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`back-to-top${visible ? " visible" : ""}`}
      onClick={scrollToTop}
      aria-label={t.misc.backToTop}
      title={t.misc.backToTop}
      tabIndex={visible ? 0 : -1}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 15l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
