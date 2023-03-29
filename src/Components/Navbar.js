import React, { Component } from "react";
import Home from './Home.js';
import logo from '../assets/images/logo-final.png'
import { Link } from "react-router-dom";

function Navbar() {
  const myStyle={
    height:'50px',
    width:'200px'
  }
  return (
    <>
    <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
      
          <Link to="/" className='logo'>
              <img src={logo} style={myStyle}  alt=""/>
              </Link>

            <ul className="nav">
              <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
              <li className="scroll-to-section"><a href="#about">About</a></li>
              <li className="scroll-to-section"><a href="#services">Services</a></li>
              <li className="scroll-to-section"><Link to="/contact">Contact</Link></li>
              <li className="scroll-to-section"><div className="border-first-button"><Link to="/join">Join our Community</Link></div></li>
            </ul>        
            <a className='menu-trigger'>
                <span>Menu</span>
            </a>
           
          </nav>
        </div>
      </div>
    </div>
    </header>
    <Home/>
    </>
  );
}
export default Navbar;
