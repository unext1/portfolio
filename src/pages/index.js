import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Services from '../components/Services';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
// import Backscroll from '../components/Backscroll';

const IndexPage = () => (
  <Layout>
    <SEO id="Main" title="Home" keywords={['gatsby', 'website', 'react', 'portfolio']} />
    <header className="text-center text-white d-flex animated fadeIn" style={{ flexDirection: 'column' }} id="main">
      <div className="container my-auto mt-5" style={{ position: 'relative' }}>
        <div className="mx-auto">
          <div className="header-title-card">
            <h1 className="mb-3">
              <strong className="display-5 header-title">Hello, I'm Laurynas Valiulis</strong>
            </h1>
          </div>
        </div>
      </div>
      <a href="#services">
        <div className="arrow-down" />
      </a>
    </header>

    {/* <Backscroll /> */}

    <Services />

    <Projects />

    <Footer />
  </Layout>
);

export default IndexPage;
