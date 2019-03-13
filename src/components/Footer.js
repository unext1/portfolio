import React from 'react';

const Footer = () => {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="text-uppercase">Contact</h2>
            <hr className="hr-main " />
          </div>
        </div>

        <div>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71329.88645242243!2d12.661278479748752!3d56.034968114239575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46522d7a50a22925%3A0x4019078290e7a90!2sHelsingborgas!5e0!3m2!1slt!2sse!4v1552170447724"
            width="100%"
            height="450"
            frameBorder="0"
            style={{
              boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.75)',
              marginTop: '35px',
              backgroundColor: 'black',
              filter: 'grayscale(100%)'
            }}
            allowFullScreen
          />
        </div>


        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form name="sentMessage" id="contactForm">
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Name</label>
                    <input className="form-control" id="name" type="name" placeholder="Your Name" />
                    <p className="help-block text-danger" />
                  </div>
                </div>

                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Email Address</label>
                    <input className="form-control" id="email" type="email" placeholder="Email Address" />
                    <p className="help-block text-danger" />
                  </div>
                </div>

                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Message</label>
                    <textarea className="form-control textarea" id="message" rows="5" placeholder="Message" />
                    <p className="help-block text-danger" />
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="form-btn btn btn-dark btn-xl">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ height: '100px', marginTop: '80px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#snapchat">
                    <i className="fa fa-snapchat" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#facebook">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#twitter">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
              </ul>
              <span className="copyright">
                {' '}
                Copyright &copy; <b>L.V</b> 2019
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
