import React ,{useState}from "react";
import logo from "../../assets/images/logo-final.png";
import Footer from "../../Components/Footer.js";
import { Link } from "react-router-dom";

import { collection, doc, addDoc } from "firebase/firestore";
import { db } from "../../FireBase/Firebase.js";


const Join = ({ inputs,inputs2, title }) => {
  const [data, setData] = useState({});
  const [domain, setDomain] = useState("");

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };
  console.log(data);

  const myStyle = {
    height: "50px",
    width: "200px",
  };


  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      // Add a new document in collection "cities"
      const res = await addDoc(collection(db, "User-Contributions"), {
            ...data
      });
      console.log(res);
      alert("Thanks for Contributing.")
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };
  const options = ['Cyber Security', 'Machine Learning', 'Android Development', 'Web Development', 'Data Structure & Algorithms','Artificial Intelligence',' Cloud Computing',' Internet Of Things','Computer Vision'];
  const onOptionChangeHandler = (event) => {
      setDomain(event.target.value);
      const id = event.target.id;
      const value = event.target.value;
  
      setData({ ...data, [id]: value });
      console.log("User Selected Value - ", event.target.value)
    }
    console.log(domain);
    
  return (
    <>
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link to="/" className="logo">
                  <img src={logo} style={myStyle} alt="" />
                </Link>

                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="/#top">Home</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/#about">About</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/#services">Services</a>
                  </li>
                  <li className="scroll-to-section">
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="scroll-to-section">
                    <div className="border-first-button">
                      <Link to="/join">Join our Community</Link>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* <div className="bar"></div> */}
      {/* form */}
      <div id="contact" className="contact-us section">
        <div className="container">
          <div className="col">
            <div className="col-lg-6 offset-lg-3">
              <div
                className="section-heading wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h6>Join us Here</h6>
                <h4>
                  Contrubute to our <em>Community</em> of <em>Learners</em>
                </h4>
                <div className="line-dec"></div>
              </div>
            </div>
            <div
              className="col-lg-12 wow fadeInUp"
              data-wow-duration="0.5s"
              data-wow-delay="0.25s"
            >
              {/* form */}
              <form id="contact" onSubmit={handleAdd}>
                <div className="column-join-form">
                  <div className="col-lg-7">
                    <div className="fill-form ">
                    <div className="col-lg-12">
                      <fieldset>
                      
                      <select name="domain" id="domain" className="gaap" onChange={onOptionChangeHandler}>
                          <option>Please choose one option</option>
                          {options.map((option, index) => {
                              return <option key={index} >
                                  {option}
                              </option>
                          })}
                        </select>
                        </fieldset>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                        {inputs.map((input) => (
                        <fieldset>
                            <label className="labell" htmlFor={input.for}>
                            {input.label}
                            </label>
                            <input
                              type={input.type}
                              name={input.name}
                              id={input.id}
                              placeholder={input.placeholder}
                              pattern={input.pattern}
                              className="form-control"
                              onChange={handleInput}
                            />
                          </fieldset>
                          ))}
                        </div>

                        <div className="col-lg-6">
                        {inputs2.map((input) => (
                          <fieldset>
                            <textarea
                              name={input.name}
                              type="text"
                              className="form-control"
                              id={input.id}
                              placeholder={input.placeholder}
                              onChange={handleInput}
                            ></textarea>
                          </fieldset>
                           ))}
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="main-button "
                            >
                              Submit
                            </button>
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
      <Footer />
    </>
  );
}
export default Join;
