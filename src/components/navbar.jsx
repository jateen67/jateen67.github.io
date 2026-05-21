import { useEffect, useRef, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

const SECTION_IDS = ["experience", "tools", "projects", "contact"];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    function handleEscape(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const handleSectionClick = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  const linkProps = (id) => ({
    type: "button",
    className: `nav-link${activeSection === id ? " active" : ""}`,
    onClick: () => handleSectionClick(id),
    "aria-current": activeSection === id ? "true" : undefined,
  });

  return (
    <header>
      <div className="navbar-container">
        <button type="button" className="home" onClick={scrollToTop}>
          Jatin Kalsi
        </button>

        <button
          type="button"
          className="hamburger"
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`hamburger-bar${menuOpen ? " open" : ""}`} />
          <span className={`hamburger-bar${menuOpen ? " open" : ""}`} />
          <span className={`hamburger-bar${menuOpen ? " open" : ""}`} />
        </button>

        <nav
          id="primary-nav"
          ref={menuRef}
          className={`primary-nav${menuOpen ? " open" : ""}`}
        >
          <ul>
            <li><button {...linkProps("experience")}>{t.nav.experience}</button></li>
            <li><button {...linkProps("tools")}>{t.nav.tools}</button></li>
            <li><button {...linkProps("projects")}>{t.nav.projects}</button></li>
            <li><button {...linkProps("contact")}>{t.nav.contact}</button></li>
            <li className="nav-controls">
              <button
                type="button"
                className="nav-icon-btn"
                onClick={toggleTheme}
                aria-label={t.nav.toggleTheme}
                title={t.nav.toggleTheme}
              >
                {theme === "dark" ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.66-5.66l1.41-1.41M4.93 19.07l1.41-1.41m0-11.32L4.93 4.93m14.14 14.14l-1.41-1.41M12 7a5 5 0 100 10 5 5 0 000-10z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor" />
                  </svg>
                )}
              </button>
              <button
                type="button"
                className="nav-icon-btn"
                onClick={toggleLanguage}
                aria-label={t.nav.toggleLanguage}
                title={t.nav.toggleLanguage}
              >
                {language.toUpperCase()}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
