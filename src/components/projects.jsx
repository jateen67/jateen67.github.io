export default function Projects() {
  return (
    <div className="projects-container">
      <h1 className="my-projects" data-aos="fade-up">
        Projects
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
                Distributed System
              </h2>
              <div
                className="project-text"
                data-aos="fade-left"
                data-aos-delay="700"
              >
                Scalable app built with microservice architecture
              </div>
              <div className="project-buttons">
                <a
                  className="cta cta2"
                  href="https://github.com/jateen67/microservice"
                  target="_blank"
                >
                  <span>CODE</span>
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
                Good News Finder Neural Network
              </h2>
              <div
                className="project-text"
                data-aos="fade-right"
                data-aos-delay="700"
              >
                AI model that aggregates good news online
              </div>
              <div className="project-buttons">
                <a
                  className="cta cta2"
                  href="https://github.com/jateen67/news"
                  target="_blank"
                >
                  <span>CODE</span>
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
                src="social media.png"
                alt="social media site"
              />
            </div>
            <div className="project-description project-description-blue">
              <h2
                className="project-title"
                data-aos="fade-left"
                data-aos-delay="600"
              >
                Social Media Site
              </h2>
              <div
                className="project-text"
                data-aos="fade-left"
                data-aos-delay="700"
              >
                Join communities and share posts with others
              </div>
              <div className="project-buttons">
                <a
                  className="cta"
                  href="https://jatins-social-media.herokuapp.com/"
                  target="_blank"
                >
                  <span>SITE</span>
                </a>
                <a
                  className="cta cta2"
                  href="https://github.com/jateen67/socialmediasite"
                  target="_blank"
                >
                  <span>CODE</span>
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
                Travelling Salesman Problem Visualizer
              </h2>
              <div
                className="project-text"
                data-aos="fade-right"
                data-aos-delay="700"
              >
                Visualize and learn about this infamous problem
              </div>
              <div className="project-buttons">
                <a
                  className="cta"
                  href="https://tsp-visualizer.web.app/"
                  target="_blank"
                >
                  <span>SITE</span>
                </a>
                <a
                  className="cta cta2"
                  href="https://github.com/jateen67/tsp"
                  target="_blank"
                >
                  <span>CODE</span>
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
                Physics Simulations
              </h2>
              <div
                className="project-text"
                data-aos="fade-left"
                data-aos-delay="700"
              >
                Desktop application consisting of two physics simulations
              </div>
              <div className="project-buttons">
                <a
                  className="cta cta2"
                  href="https://github.com/jateen67/vanierintegrativeproject"
                  target="_blank"
                >
                  <span>CODE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="last-project" data-aos="slide-right">
          <div className="project-contents">
            <div className="project-description">
              <h2
                className="project-title"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                Music Album Database
              </h2>
              <div
                className="project-text"
                data-aos="fade-right"
                data-aos-delay="700"
              >
                Store and view all your favourite music albums
              </div>
              <div className="project-buttons">
                <a
                  className="cta cta2"
                  href="https://github.com/jateen67/albumdbcsharp"
                  target="_blank"
                >
                  <span>CODE</span>
                </a>
              </div>
            </div>
            <div className="project-pic">
              <img
                className="actual-project-image-2"
                src="album.png"
                alt="music album pic"
                data-aos="fade-right"
                data-aos-delay="500"
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="coming-soon">More coming soon...</h1>
    </div>
  );
}
