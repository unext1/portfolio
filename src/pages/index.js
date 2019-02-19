import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Section from '../components/Section';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <SEO id="Main" title="Home" keywords={['gatsby', 'website', 'react', 'portfolio']} />
    <header className="text-center text-white d-flex animated fadeIn" style={{ flexDirection: 'column' }} id="main">
      <div className="container my-auto mt-5" style={{ position: 'relative' }}>
        <div className="mx-auto">
          <div className="header-title-card">
            <h1 className="text-uppercase mb-3">
              <strong className="display-4 header-title">Howdy, I'm <b className="index-text">Laurynas Valiulis</b></strong>
            </h1>
          </div>
        </div>
      </div>
      
      <a href="#mySection">
        <div className="arrow-down" />
      </a>
    </header>

    <Section />

    <Services />

    <Projects />

    <Footer />
    
  </Layout>
);

export default IndexPage;
