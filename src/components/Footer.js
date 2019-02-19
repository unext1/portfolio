import React from 'react';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <span className="copyright">
              {' '}
              &copy; <b>L.V</b> 2019
            </span>
          </div>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
