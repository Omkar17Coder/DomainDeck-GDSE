import React from "react";
import logo from "../assets/images/logo-final.png";
import Footer from "../Components/Footer.js";

import { Link } from "react-router-dom";

import { useState } from "react";
import { db } from "../FireBase/Firebase.js";
import { doc, getDoc } from "firebase/firestore";
// import { collection, getDocs } from "firebase/firestore";

function Go() {
  const myStyle = {
    height: "50px",
    width: "200px",
  };
  const myStyle3 = {
    backgroundColor: "#4da6e7",
  };
  const myStyle2 = {
    width: "70vw",
  };
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});
  const [service, setService] = useState("");

  const options1 = [
    "Cyber Security",
    "Machine Learning",
    "Android Development",
    "Web Development",
    "Data Structure & Algorithms",
  ];
  const options2 = [
    "Artificial Intelligence",
    " Cloud Computing",
    " Internet Of Things",
    "Computer Vision",
    "AI & Robotics",
  ];

  const fetchSingle1 = async () => {
    const docRef = doc(db, "Web Development", "Video-Link");
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setData(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
    const docRef1 = doc(db, "Web Development", "Website-Links");
    try {
      const docSnap = await getDoc(docRef1);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setData2(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
    const docRef2 = doc(db, "Web Development", "Project-Links");
    try {
      const docSnap = await getDoc(docRef2);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setData3(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSingle2 = async () => {
    const docRef = doc(db, "Android Development", "Video Link");
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setData(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
    const docRef1 = doc(db, "Android Development", "Website Link");
    try {
      const docSnap = await getDoc(docRef1);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setData2(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
    const docRef2 = doc(db, "Android Development", "Project Link");
    try {
      const docSnap = await getDoc(docRef2);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setData3(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                    <a href="/">Home</a>
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
      <div className="bar"></div>
      <div className="domain-navbar">
        <h1 className="heading-domain-navbar">Explore your Domain (^!^) </h1>
      </div>
      {/* buttons */}
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="col-lg-12">
          <div className="naccs">
            <div className="grid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="menus-go">
                    {/* <div className="first-thumb active"> */}
                    <div className="btn-group">
                      <button className="buttoonss">Cyber Security</button>
                      <button className="buttoonss">Machine Learning</button>
                      <button className="buttoonss">UI/UX Design</button>
                      <button className="buttoonss">Graphic Design</button>
                      <button className="buttoonss" onClick={fetchSingle2}>Android Development</button>
                      <button className="buttoonss" onClick={fetchSingle1}>
                        Web Development
                      </button>
                    </div>
                    <div className="btn-group">
                      <button className="buttoonss">
                        Data Structure & Algorithms
                      </button>
                      <button className="buttoonss">
                        Artificial Intelligence
                      </button>
                      <button className="buttoonss">Cloud Computing</button>
                      <button className="buttoonss">Internet Of Things</button>
                      <button className="buttoonss">Database</button>
                      <button className="buttoonss">Computer Vision</button>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <ul className="nacc">
                      {
                        <li class="active">
                          <div className="links">
                            <div class="card" style={myStyle2}>
                              <div class="card-header" style={myStyle3}>
                                Video Links
                              </div>
                              <ul class="list-group list-group-flush">
                                {Object.values(data).map((element) => {
                                  return (
                                    <li class="list-group-item">
                                      <a href={element} className="link-link">
                                        {element}
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                            <div className="s-bar"></div>
                            <div className="s-bar"></div>
                            <div class="card" style={myStyle2}>
                              <div class="card-header" style={myStyle3}>
                                Website Links
                              </div>
                              <ul class="list-group list-group-flush">
                                {Object.values(data2).map((element) => {
                                  return (
                                    <li class="list-group-item">
                                      <a href={element} className="link-link">
                                        {element}
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                            <div className="s-bar"></div>
                            <div className="s-bar"></div>
                            <div class="card" style={myStyle2}>
                              <div class="card-header" style={myStyle3}>
                                Project Links
                              </div>
                              <ul class="list-group list-group-flush">
                                {Object.values(data3).map((element) => {
                                  return (
                                    <li class="list-group-item">
                                      <a href={element} className="link-link">
                                        {element}
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="bar"></div>
      <div className="bar"></div>

      {/* <Footer /> */}
    </>
  );
}

export default Go;
