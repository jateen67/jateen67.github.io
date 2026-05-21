import { useLanguage } from "../contexts/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects.items;

  return (
    <div className="projects-container" id="projects">
      <h1 className="my-projects" data-aos="fade-up">
        {t.projects.heading}
      </h1>
      <div className="actual-projects">
        <div className="project" data-aos="slide-left">
          <div className="project-contents">
            <div
              className="project-pic"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <img
                className="actual-project-image"
                src="opencourse.png"
                alt="open course pic"
              />
            </div>
            <div className="project-description project-description-blue">
              <h2
                className="project-title"
                data-aos="fade-left"
                data-aos-delay="600"
              >
                {p.classAvailability.title}
              </h2>
              <div
                className="project-text"
                data-aos="fade-left"
                data-aos-delay="700"
              >
                {p.classAvailability.description}
              </div>
              <div className="project-buttons">
                {/* <a
                  className="cta"
                  href="https://open-course.ca"
                  target="_blank"
                >
                  <span>{t.projects.site}</span>
                </a> */}
                <a
                  className="cta cta2"
                  href="https://github.com/jateen67/open-course"
                  target="_blank"
                >
                  <span>{t.projects.code}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-2" data-aos="slide-right">
          <div className="project-contents">
            <div className="project-description">
              <h2
                className="project-title"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                {p.goodNews.title}
              </h2>
              <div
                className="project-text"
                data-aos="fade-right"
                data-aos-delay="700"
              >
                {p.goodNews.description}
              </div>
              <div className="project-buttons">
                <a
                  className="cta cta2"
                  href="https://github.com/jateen67/news"
                  target="_blank"
                >
                  <span>{t.projects.code}</span>
                </a>
              </div>
            </div>
            <div
              className="project-pic"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <img
                className="actual-project-image-2"
                src="neuralnetwork.png"
                alt="neural network pic"
              />
            </div>
          </div>
        </div>
        <div className="project" data-aos="slide-left">
          <div className="project-contents">
            <div
              className="project-pic"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <img
                className="actual-project-image"
                src="microservice.png"
                alt="microservice pic"
              />
            </div>
            <div className="project-description project-description-blue">
              <h2
                className="project-title"
                data-aos="fade-left"
                data-aos-delay="600"
              >
                {p.distributed.title}
              </h2>
              <div
                className="project-text"
                data-aos="fade-left"
                data-aos-delay="700"
              >
                {p.distributed.description}
              </div>
              <div className="project-buttons">
                <a
                  className="cta cta2"
                  href="https://github.com/jateen67/microservice"
                  target="_blank"
                >
                  <span>{t.projects.code}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-2" data-aos="slide-right">
          <div className="project-contents">
            <div className="project-description">
              <h2
                className="project-title"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                {p.tsp.title}
              </h2>
              <div
                className="project-text"
                data-aos="fade-right"
                data-aos-delay="700"
              >
                {p.tsp.description}
              </div>
              <div className="project-buttons">
                <a
                  className="cta"
                  href="https://tsp-visualizer.web.app"
                  target="_blank"
                >
                  <span>{t.projects.site}</span>
                </a>
                <a
                  className="cta cta2"
                  href="https://github.com/jateen67/tsp"
                  target="_blank"
                >
                  <span>{t.projects.code}</span>
                </a>
              </div>
            </div>
            <div
              className="project-pic"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <img
                className="actual-project-image-2"
                src="tspgif.gif"
                alt="tsp visualizer pic"
              />
            </div>
          </div>
        </div>
        <div className="project" data-aos="slide-left">
          <div className="project-contents">
            <div
              className="project-pic"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <img
                className="sim-gif"
                src="physics.gif"
                alt="physics sim pic"
              />
            </div>
            <div className="project-description project-description-blue">
              <h2
                className="project-title"
                data-aos="fade-left"
                data-aos-delay="600"
              >
                {p.physics.title}
              </h2>
              <div
                className="project-text"
                data-aos="fade-left"
                data-aos-delay="700"
              >
                {p.physics.description}
              </div>
              <div className="project-buttons">
                <a
                  className="cta cta2"
                  href="https://github.com/jateen67/vanierintegrativeproject"
                  target="_blank"
                >
                  <span>{t.projects.code}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="coming-soon">{t.projects.comingSoon}</h1>
    </div>
  );
}
