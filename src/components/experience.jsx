import { useLanguage } from "../contexts/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <div className="experience-container" id="experience">
      <h1 className="my-experience" data-aos="fade-up">
        {t.experience.heading}
      </h1>
      <div className="experience-list">
        {t.experience.items.map((item, i) => {
          const logoSrc = `company${t.experience.items.length - i}.png`;
          return (
            <div
              key={`${item.company}-${i}`}
              className={`experience-item${i % 2 === 1 ? " alt" : ""}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="experience-header">
                <div className="experience-header-main">
                  <img
                    className="experience-logo"
                    src={logoSrc}
                    alt={`${item.company} logo`}
                  />
                  <h2 className="experience-role">
                    {item.role} <span className="experience-company">@ {item.company}</span>
                  </h2>
                </div>
                <span className="experience-dates">{item.dates}</span>
              </div>
              <ul className="experience-bullets">
                {item.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              {item.tech && item.tech.length > 0 && (
                <div className="experience-tech" aria-label="Tech stack">
                  {item.tech.map((techName) => (
                    <span key={techName} className="tech-chip">
                      {techName}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
