import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="header-container">
      <div className="header-left-side">
        <div className="header-big-text">
          <h1 className="im-jatin" data-aos="fade-up">
            Hi, my name is Jatin Kalsi
          </h1>
          <div className="header-small-text">
            <p className="top-para" data-aos="fade-up" data-aos-delay="500">
              I'm a university computer science student based in Canada. My aim
              is to learn more about the world of software engineering and
              development.
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
