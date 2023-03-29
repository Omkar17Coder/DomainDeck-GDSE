import React from "react";
import img1 from "../assets/images/about-dec-v3.png";
import Services from './Services.js';
function About() {
  return (
    <>
      <div id="about" class="about section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-6">
                  <div
                    class="about-left-image  wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src={img1} alt="" />
                  </div>
                </div>
                <div
                  class="col-lg-6 align-self-center  wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <div class="about-right-content">
                    <div class="section-heading">
                      <h6>About Us</h6>
                      <h4>
                        What is Domain<em>Deck</em>
                      </h4>
                      <div class="line-dec"></div>
                    </div>
                    <p>
                    Domain Deck provides you the best solution for all your queries. Be you are an Absolute Beginner or an Advanced Person we have something on our site for you. We delve ourselves deep onto researches to bring out the best for you. We strive on to make a Learners Community who further strive on to build our Community. Keep Learning Keep Growing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services/>
    </>
  );
}
export default About;
