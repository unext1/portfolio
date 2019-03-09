// import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import { Link, navigate } from 'gatsby';

export default class Navbar extends React.Component {
  state = {
    navbarOpen: false
  };

  navbar = React.createRef();

  componentDidMount = () => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  };

  burgerToggle = () => {
    let collapseNav = document.querySelector('.navbar-collapse');
    if (Array.from(collapseNav.classList).includes('show')) {
      collapseNav.classList.remove('show');
    } else {
      collapseNav.classList.add('show');
    }
  };

  // addActive = currentTarget => {
  //   const foundActive = document.querySelector('.nav-link.active');
  //   if (foundActive) {
  //     foundActive.classList.remove('active');
  //   }
  //   currentTarget.classList.add('active');
  // };

  scrollTo = e => {
    e.preventDefault();
    const { section } = e.currentTarget.dataset;
    if (section) {
      let element = document.getElementById(section);
      if (!element) {
        return navigate('/');
      }
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
    // this.addActive(e.currentTarget);
  };

  render() {

    return (
      <nav
        ref={this.navbar}
        className={
          this.state.scrolled
            ? 'animated fadeIn navbar navbar-expand-lg navbar-dark fixed-top scrolled'
            : 'animated fadeIn navbar navbar-expand-lg navbar-light fixed-top'
        }
        id="mainNav"
      >
        <div className="container">
          <Link to="/" className="navbar-brand navbar-brand-ncollapsed" style={{ fontSize: '23px' }}>
            Laurynas Valiulis
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navToggler"
            aria-controls="navToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{color: "white"}}
            onClick={this.burgerToggle}
          >
            <span className="navbar-toggler-text">Menu</span> <i className="navbar-toggler-icon" />
          </button>
          <div className=" animated fadeInLeft faster collapse navbar-collapse " id="navToggler">
            <ul className="nav navbar-nav text-uppercase ">
              <li className="nav-item pt-1">
                <a onClick={this.scrollTo} className="nav-link" href="#mySection" data-section="mySection">
                  About
                </a>
              </li>
              <li className="nav-item pt-1">
                <a onClick={this.scrollTo} className="nav-link" href="#sarvices" data-section="services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <Link to="/" className="navbar-brand navbar-brand-collapsed" style={{ fontSize: '23px' }}>
                  Laurynas Valiulis
                </Link>
              </li>
              <li className="nav-item pt-1">
                <a onClick={this.scrollTo} className="nav-link" href="#projects" data-section="projects">
                  Portfolio
                </a>
              </li>
              <li className="nav-item pt-1">
                <a onClick={this.scrollTo} className="nav-link" href="#contact" data-section="contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  siteTitle: PropTypes.string
};

Navbar.defaultProps = {
  siteTitle: ``
};
