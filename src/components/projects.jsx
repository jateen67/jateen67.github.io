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
                src="src/assets/social media.png"
                alt="social media site"
              />
            </div>
            <div className="project-description">
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
                Social media platform inspired by Reddit and Twitter<br></br>
                Built using Ruby on Rails, PostgreSQL, Bootstrap
              </div>
              <div className="project-buttons">
                <a
                  className="cta"
                  href="https://jatins-social-media.herokuapp.com/"
                  target="_blank"
                >
                  <span>DEMO</span>
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
                Music Album Database
              </h2>
              <div
                className="project-text"
                data-aos="fade-right"
                data-aos-delay="700"
              >
                Website used for storing, viewing, and editing music albums
                <br></br>
                Built using React.js, Express.js, .NET Core, SQL Server,
                Bootstrap
              </div>
              <div className="project-buttons">
                <a
                  className="cta"
                  href="https://albumdatabasefrontend.azurewebsites.net/"
                  target="_blank"
                >
                  <span>DEMO</span>
                </a>
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
                src="src/assets/album.png"
                alt="music album pic"
                data-aos="fade-right"
                data-aos-delay="500"
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
                src="src/assets/physics.gif"
                alt="physics sim pic"
              />
            </div>
            <div className="project-description">
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
                <br></br>
                Built using JavaFX
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
                Video Game Deals Finder
              </h2>
              <div
                className="project-text"
                data-aos="fade-right"
                data-aos-delay="700"
              >
                Website used for finding the cheapest online deals in PC gaming
                <br></br>
                Built using React.js, TypeScript
              </div>
              <div className="project-buttons">
                <a
                  className="cta"
                  href="https://gamedealsapi.web.app/"
                  target="_blank"
                >
                  <span>DEMO</span>
                </a>
                <a
                  className="cta cta2"
                  href="https://github.com/jateen67/gameapi"
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
                src="src/assets/game.gif"
                alt="video game deals pic"
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="coming-soon">More projects coming soon...</h1>
    </div>
  );
}
