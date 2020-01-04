import React from 'react';

const Services = () => {
  return (
    <>
      <section id="services" className="">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Its meee...</h2>
              <hr className="hr-main" style={{ marginBottom: '50px' }} />
            </div>
          </div>
          <div className="row text-center row-margin">
            <div className="col-md-6">
              <i className="fa-eff fa fa-home fa-5x" />
              <h4 className="service-heading mt-2">
                <b>Steam</b>
              </h4>
              <a className="text-muted" target="__blank" href="https://steamcommunity.com/id/yungandangry/">
                Press on me if you want to check out my steam profile.
              </a>
            </div>
            <div className="col-md-6">
              <i className="fa-eff fa fa-twitter fa-5x" />
              <h4 className="service-heading mt-2">
                <b>Twitter</b>
              </h4>
              <a className="text-muted" target="__blank" href="https://twitter.com/UneXT14">
                Press on me if you want to check out my twitter profile.
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="aboutme">
          <img
            alt="MyPhoto"
            className="aboutme-photo"
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/02/02eb3236b3d40b7683c23690c858de026261e5c5_full.jpg"
          />
        </div>
        <div className=" bg-light">
          <div className="my-section-div text-center">
            <h3 className="aboutme-header">Who's this guy ?</h3>
            <hr className="hr-about" />
            <p className="aboutme-discription">
              I'am just a random guy from an internet which sucks at art and the only thing he can kind of do is
              program. I am passionate about it and just wanted to give a shot to win this competition :)
              <hr />
              Idk what i'am doing here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
