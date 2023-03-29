import React from "react";
import logo from '../../assets/images/logo-final.png'
import img1 from '../../assets/images/phone-icon.png'
import img2 from '../../assets/images/email-icon.png'
import img3 from '../../assets/images/location-icon.png'
import Footer from '../../Components/Footer.js';
// import img4 from '../../assets/images/logo-v3.png'
import { Link } from "react-router-dom";
function Join() {

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
                <li className="scroll-to-section"><Link to="/" >Home</Link></li>
              <li className="scroll-to-section"><a href="/#about">About</a></li>
              <li className="scroll-to-section"><a href="/#services">Services</a></li>
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
    {/* <div className="bar"></div> */}
    {/* form */}
    <div id="contact" class="contact-us section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="section-heading wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
            <h6>Contact Us</h6>
            <h4>Get In Touch With Us <em>Now</em></h4>
            <div class="line-dec"></div>
          </div>
        </div>
        <div class="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
          <form id="contact" action="" method="post">
            <div class="row">
              <div class="col-lg-12">
                <div class="contact-dec">
                  <img src="assets/images/contact-dec-v3.png" alt=""/>
                </div>
              </div>
              <div class="col-lg-5">
                <div id="map">
                  <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="636px" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="fill-form">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="info-post">
                        <div class="icon">
                          <img src={img1} alt=""/>
                          <a href="#">010-020-0340</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="info-post">
                        <div class="icon">
                          <img src={img2} alt=""/>
                          <a href="#">our@email.com</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="info-post">
                        <div class="icon">
                          <img src={img3} alt=""/>
                          <a href="#">123 Rio de Janeiro</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <fieldset>
                        <input type="name" name="name" class="form-control" id="name" placeholder="Name" autocomplete="on" required/>
                      </fieldset>
                      <fieldset>
                        <input type="text" name="email" id="email" class="form-control" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required=""/>
                      </fieldset>
                      <fieldset>
                        <input type="subject" name="subject" class="form-control"  id="subject" placeholder="Subject" autocomplete="on"/>
                      </fieldset>
                    </div>
                    <div class="col-lg-6">
                      <fieldset>
                        <textarea name="message" type="text" class="form-control" id="message" placeholder="Message" required=""></textarea>  
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" class="main-button ">Send Message Now</button>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
    </>
  );
}
export default Join;


