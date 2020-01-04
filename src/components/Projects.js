import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="row">
          <div className="mb-5 col-lg-12 text-center">
            <h2 className="text-uppercase">DOPE ARTS</h2>
            <hr className="hr-main" />
            <p className="aboutme-discription mt-5 mb-5">
              I just added few people who i think deserve to win this competition ( This is based by my own opinion, you
              are allowed to disagree.)
              <hr />Good luck to all competitors.
            </p>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6 photo-effect">
            <img className="img-fluid" id="project1" src="https://i.imgur.com/Hw7DS5K.jpg" alt="My-Project1" />
            <div className="overlay" />
            <div className="photo-button">
              <a href="https://twitter.com/Rivalryofgamers/status/1213275730915790849" target="blank">
                Wiew Tweet <i className="fa fa-arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">@Rivalryofgamers</h4>
                  <hr className="hr-project1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6 photo-effect">
            <img className="img-fluid" id="project2" src="https://i.imgur.com/eEJmaZd.jpg" alt="My-Project1" />
            <div className="overlay" />
            <div className="photo-button">
              <a href="https://twitter.com/KyT3FYFKNVd5RWj/status/1213496508701646848" target="blank">
                Wiew Tweet <i className="fa fa-arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">@KyT3FYFKNVd5RWj</h4>
                  <hr className="hr-project2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
