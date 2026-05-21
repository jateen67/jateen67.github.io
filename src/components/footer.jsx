export default function Footer() {
  return (
    <div className="footer-container">
      <div className="blue-block" data-aos="slide-right">
        <h1 className="interested" data-aos="fade" data-aos-delay="1000">
          Interested in connecting?<br></br>Find my information below!
        </h1>
      </div>
      <div className="temp"></div>
      <div className="actual-footer">
        <div className="contact-links">
          <p>Links</p>
          <a
            className="link"
            target="_blank"
            href="https://github.com/jateen67"
          >
            GitHub
          </a>
          <a
            className="link"
            target="_blank"
            href="https://www.linkedin.com/in/jatin-kalsi/"
          >
            LinkedIn
          </a>
          <a
            className="link"
            target="_blank"
            href="mailto:kalsijatin67@icloud.com"
          >
            Email
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
