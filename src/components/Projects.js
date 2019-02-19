import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row">
          <div className="mb-5 col-lg-12 text-center">
            <h2 className="text-uppercase">My Projects</h2>
          </div>
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6 photo-effect">
            <img
              className="img-fluid"
              id="project1"
              src="https://headlight.eu/wp-content/uploads/2017/11/berlin-k-star-black-500x700-1-700x500.jpg"
              alt="My-Project1"
            />
            <div className="overlay" />
            <div className="photo-button">
              <a href="#project1"> Project </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">My Project1</h4>
                  <hr className="hr-project1" />
                  <p className="mb-0 text-white-50">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo
                    inventore harum ex magni, dicta impedit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6 photo-effect">
            <img
              className="img-fluid"
              id="project2"
              src="https://hauteliving.com/wp-content/uploads/2016/03/Hublot-Big-Bang-Unico-Sapphire-All-Black-3-1024x682.jpg"
              alt="My-Project1"
            />
            <div className="overlay" />
            <div className="photo-button">
              <a href="#project2"> Project </a>
            </div>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">My Project2</h4>
                  <hr className="hr-project2" />
                  <p className="mb-0 text-white-50">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo
                    inventore harum ex magni, dicta impedit.
                  </p>
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
