import React, { useState } from "react";
import img1 from "../assets/images/services-image.jpg";
import img2 from "../assets/images/services-image-02.jpg";
import img3 from "../assets/images/services-image-03.jpg";
import img4 from "../assets/images/services-image-04.jpg";
import img5 from "../assets/images/img2.jpg";
import Footer from './Footer.js';
function Services() {
  const menu = ["Roadmap", "Guided Video Links", "Open Source Projects", "Community"];
  const [service, setService] = useState("");
  // const handleEvent = (event) =>{
  //   console.log("buttn clicked");
  //   let e= event.target.value;
  //   setService(e);
  //   console.log(e);
  // }

  return (
    <>
      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-heading  wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h6>Our Services</h6>
                <h4>
                  What Our <em>Community </em>Provides
                </h4>
                <div className="line-dec"></div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="grid">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="menus">
                        {/* <div className="first-thumb active"> */}
                        <div className="btn-group">
                          {/* <span className="icon"><img src="assets/images/service-icon-01.png" alt="INMH"/></span> */}

                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic example"
                          >
                            {menu.map((serve) => (
                              <button
                                type="button"
                                className="buttnss"
                                key={serve}
                                class={" buttnss "}
                                onClick={() => setService(serve)}
                              >
                                {serve}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <ul className="nacc">
                          {service === "" && <ServiceTag/>}
                          {service === "Roadmap" && <ServiceTag0 />}
                          {service === "Guided Video Links" && <ServiceTag1 />}
                          {service === "Open Source Projects" && <ServiceTag2 />}
                          {service === "Community" && <ServiceTag3 />}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
const myStyle ={
  height:'40vh',
  width:'40vw',
  borderRadius:'30px',
  marginTop:'-6vh'
};
const ServiceTag = () =>{
  return(
    <>
    {/* <div className="bar"></div> */}
    <div className="servImg">
      <img src={img5} style={myStyle} alt="hehe" />

    </div>
    </>
  );
};
const ServiceTag0 = () => {
  return (
    <>
      <li class="active">
        <div>
          <div className="thumb">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="left-text">
                  <h4>Roadmap</h4>
                  <p>
                  We at Domain Deck’s ensure that our Roadmap leads you to glory. We make sure to provide our community members the finest result of their interested domain.
                  </p>
                  <div className="ticks-list">
                    <span>
                      <i className="fa fa-check"></i> Verified Links
                    </span>{" "}
                    <span>
                      <i className="fa fa-check"></i> Resourced GitHub Ids
                    </span>{" "}
                    <span>
                      <i className="fa fa-check"></i> E-sites
                    </span>
                    <span>
                      <i className="fa fa-check"></i> Enriched Playlists
                    </span>{" "}
                  </div>
                  <p>
                  Daily Analysis is done on our site to cope up with the latest trends and knowledge of the market.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="bar"></div>
                <div className="right-image">
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
const ServiceTag1 = () => {
  return (
    <>
      <li class="active">
        <div>
          <div className="thumb">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="left-text">
                  <h4>Video Links</h4>
                  <p>
                  Video Links of Domain deck ensure you guaranteed success in your domain. We make sure to provide playlists which enriches knowledge in your respective domain.
                  </p>
                  <div className="ticks-list">
                    <span>
                      <i className="fa fa-check"></i> Quality Video
                    </span>{" "}
                    <span>
                      <i className="fa fa-check"></i> Free Videos
                    </span>{" "}
                    <span>
                      <i className="fa fa-check"></i> Self-Paced 
                    </span>
                    <span>
                      <i className="fa fa-check"></i> Dynamic Learning
                    </span>{" "}
                  </div>
                  <p>
                  We provide everything from scratch and make sure you shine in your domain and come out with flying colors.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="right-image">
                  <img src={img2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
const ServiceTag2 = () => {
  return (
    <>
      <li class="active">
        <div>
          <div className="thumb">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="left-text">
                  <h4>Open-Source Projects</h4>
                  <p>
                  A boon for the learners of our community where they can apply their knowledge and create wonders for the entire community.
                  </p>
                  <div className="ticks-list">
                    <span>
                      <i className="fa fa-check"></i> Data-Driven
                    </span>{" "}
                    <span>
                      <i className="fa fa-check"></i> Precise
                    </span>{" "}
                    <span>
                      <i className="fa fa-check"></i> Visionary
                    </span>
                    <span>
                      <i className="fa fa-check"></i> Proficient
                    </span>{" "}
                  </div>
                  <p>
                  We ensure that you get a chance to work with your peers and get hands on experience on various on-going projects in the world.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="right-image">
                  <img src={img3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
const ServiceTag3 = () => {
  return (
    <>
      <li class="active">
        <div>
          <div className="thumb">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="left-text">
                  <h4>Community</h4>
                  <p>
                  What better than a Community of learners be? At domain deck you learn from others parallelly others learn from you.
                  </p>
                  <div className="ticks-list">
                    <span>
                      <i className="fa fa-check"></i> Engaging 
                    </span>{" "}
                    <span>
                      <i className="fa fa-check"></i> Vibrant
                    </span>{" "}
                    <span>
                      <i className="fa fa-check"></i> Optimistic
                    </span>
                    <span>
                      <i className="fa fa-check"></i> Goal Oriented
                    </span>{" "}
                  </div>
                  <p>
                  You never feel left out in our community as we always ensure to make you learn new trends of the market. So what are you waiting for? Join our Community to learn together 
                  </p>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="right-image">
                  <img src={img4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export default Services;
