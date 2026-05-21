import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="experience-container" id="experience">
      <h1 className="my-experience" data-aos="fade-up">
        {t.experience.heading}
      </h1>
      <div className="experience-list">
        {t.experience.items.map((item, i) => (
          <div
            key={`${item.company}-${i}`}
            className={`experience-item${i % 2 === 1 ? " alt" : ""}`}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="experience-header">
              <h2 className="experience-role">
                {item.role} <span className="experience-company">@ {item.company}</span>
              </h2>
              <span className="experience-dates">{item.dates}</span>
            </div>
            <ul className="experience-bullets">
              {item.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
