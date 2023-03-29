import React, { Component } from "react";
import { Link } from "react-router-dom";
import img1 from '../assets/images/img1.jpg'
import Go from './Go.js';
import About from './About.js';

function Home() {
  return (
    <>
    <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <div className="row">
                  <div className="col-lg-12">
                    <h6>Domain Deck</h6>
                    <h2>We Help you Reach your Goals!</h2>
                    <p>A one point contact for all enthusiasts and learners all around the corner of the world.
“We learn together. We build together We grow together” </p>
                  </div>
                  <div className="col-lg-12">
                    <div className="border-first-button scroll-to-section">
                      <Link to="/go">Get Started</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src={img1} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <About/>
    </>
  );
}
export default Home;
