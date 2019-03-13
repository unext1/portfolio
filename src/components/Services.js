import React from 'react';

const Services = () => {
  return (
    <>
      <section id="services" className="">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">About</h2>
              <hr className="hr-main" style={{ marginBottom: '50px' }} />
            </div>
          </div>
          <div className="row text-center row-margin">
            <div className="col-md-4">
              <i className="fa-eff fa fa-home fa-5x" />
              <h4 className="service-heading mt-2">
                <b>Fast</b>
              </h4>
              <p className="text-muted">Fast load times and lag free interaction, my highest priority.</p>
            </div>
            <div className="col-md-4">
              <i className="fa-eff fa fa-heart fa-5x" />
              <h4 className="service-heading mt-2">
                <b>Made With Love</b>
              </h4>
              <p className="text-muted">Is it really open source if it's not made with love?</p>
            </div>
            <div className="col-md-4">
              <i className="fa-eff fa fa-mobile fa-5x" style={{ fontWeight: 'bold' }} />
              <h4 className="service-heading mt-2">
                <b>Responsive</b>
              </h4>
              <p className="text-muted">My layouts will work on any device, big or small.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="aboutme">
          <img
            alt="MyPhoto"
            className="aboutme-photo"
            src="https://scontent.fgse1-1.fna.fbcdn.net/v/t1.0-9/40610517_1933389366699853_5395276653821689856_n.jpg?_nc_cat=100&_nc_ht=scontent.fgse1-1.fna&oh=bf90d539702c166732c4a754c9997b79&oe=5D19F33B"
          />
        </div>
        <div className=" bg-light">
          <div className="my-section-div text-center">
            <h3 className="aboutme-header">Who's this guy ?</h3>
            <hr className="hr-about" />
            <p className="aboutme-discription">
              I am passionate about building excellent software that improves the lives of those around me. I specialize
              in creating software for clients ranging from individuals and small-businesses all the way to large
              enterprise corporations. All of my work is produced locally from Moscow, Idaho. What would you do if you
              had a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
