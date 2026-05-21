import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToExperience = () => {
    const el = document.getElementById("experience");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="header-container">
      <div className="header-left-side">
        <div className="header-big-text">
          <h1 className="im-jatin" data-aos="fade-up">
            {t.header.title}
          </h1>
          <div className="header-small-text">
            <p className="top-para" data-aos="fade-up" data-aos-delay="500">
              {t.header.description}
            </p>
            <p className="header-now" data-aos="fade-up" data-aos-delay="700">
              <span className="header-now-dot" aria-hidden="true" />
              {t.header.currently}
            </p>
          </div>
        </div>
        {/* <div className="header-button-area">
          <a
            className="cta cta2"
            target="_blank"
            href="https://drive.google.com/file/d/1wqKa06entq4IyPQCKKSBfA8VyrjfaduT/view?usp=share_link"
          >
            <span>VIEW MY R&Eacute;SUM&Eacute;</span>
          </a>
        </div> */}
      </div>
      <div className="header-right-side">
        <img
          data-aos="fade-up"
          data-aos-delay="1000"
          className="montreal"
          src="montreal.jpg"
          alt={t.header.imageAlt}
        />
      </div>
      <button
        type="button"
        className={`scroll-indicator${scrolled ? " hidden" : ""}`}
        onClick={scrollToExperience}
        aria-label={t.header.scrollHint}
        title={t.header.scrollHint}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
