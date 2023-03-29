import React from "react";
import Navbar from './Navbar.js';
import logo from "../assets/images/logo-v3.png";

function Preheader() {
  return (
    <>
      <div className="pre-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-8 col-7">
              <ul className="info">
                <li>
                  <a href="#">
                    <i className="fa fa-envelope"></i>dhananjaysingh.chauhan2021@vitstudent.ac.in
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-phone"></i>7018332852
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-sm-4 col-5">
              <ul className="social-media">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-slack"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Navbar/>
    </>
  );
}
export default Preheader;
