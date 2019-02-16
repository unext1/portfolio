import React from 'react';

const Services = () => {
  return (
    <section id="services" className="">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <i className="fa fa-home fa-5x" />
            <h4 className="service-heading mt-2">
              <b>Something cool</b>
            </h4>
            <p className="text-muted ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore
              harum ex magni, dicta impedit.
            </p>
          </div>
          <div className="col-md-4">
            <i className="fa fa-heart fa-5x" />
            <h4 className="service-heading mt-2">
              <b>Made With Love</b>
            </h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore
              harum ex magni, dicta impedit.
            </p>
          </div>
          <div className="col-md-4">
            <i className="fa fa-code fa-5x" style={{ fontWeight: 'bold' }} />
            <h4 className="service-heading mt-2">
              <b>Up To Date</b>
            </h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore
              harum ex magni, dicta impedit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
