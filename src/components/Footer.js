import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" style={{ height: '150px' }}>
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
  );
};

export default Footer;
