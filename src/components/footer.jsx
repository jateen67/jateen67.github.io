import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <div className="footer-container" id="contact">
      <div className="blue-block" data-aos="slide-right">
        <h1 className="interested" data-aos="fade" data-aos-delay="1000">
          {t.footer.interested}<br></br>{t.footer.findInfo}
        </h1>
      </div>
      <div className="temp"></div>
      <div className="actual-footer">
        <div className="contact-links">
          <p>{t.footer.links}</p>
          <a
            className="link"
            target="_blank"
            href="https://github.com/jateen67"
          >
            {t.footer.github}
          </a>
          <a
            className="link"
            target="_blank"
            href="https://www.linkedin.com/in/jatin-kalsi/"
          >
            {t.footer.linkedin}
          </a>
          <a
            className="link"
            target="_blank"
            href="mailto:kalsijatin67@icloud.com"
          >
            {t.footer.email}
          </a>
          {/* <a
            className="link"
            target="_blank"
            href="https://drive.google.com/file/d/1wqKa06entq4IyPQCKKSBfA8VyrjfaduT/view?usp=share_link"
          >
            R&eacute;sum&eacute;
          </a> */}
        </div>
        <div className="copy">
          <p>&copy; Jatin Kalsi {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}
