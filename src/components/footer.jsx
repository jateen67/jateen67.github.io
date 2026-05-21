import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const EMAIL = "kalsijatin67@icloud.com";

export default function Footer() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

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
          <div className="email-row">
            <a
              className="link"
              target="_blank"
              href={`mailto:${EMAIL}`}
            >
              {t.footer.email}
            </a>
            <button
              type="button"
              className="copy-email-btn"
              onClick={copyEmail}
              aria-label={t.footer.copyEmail}
              title={t.footer.copyEmail}
            >
              {copied ? (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12l5 5L20 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="9" y="9" width="11" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M5 15V5a2 2 0 0 1 2-2h10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
            {copied && (
              <span className="copied-toast" role="status">
                {t.footer.copied}
              </span>
            )}
          </div>
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
