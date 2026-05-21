import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
  const { t } = useLanguage();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

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
          alt="montreal"
        />
      </div>
    </div>
  );
}
