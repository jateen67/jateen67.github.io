import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header>
      <div className="navbar-container">
        <a
          className="home"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Jatin Kalsi
        </a>
        <nav>
          <ul>
            <li>
              <a className="nav-link" onClick={() => scrollToSection("experience")}>
                {t.nav.experience}
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection("tools")}>
                {t.nav.tools}
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection("projects")}>
                {t.nav.projects}
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection("contact")}>
                {t.nav.contact}
              </a>
            </li>
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
