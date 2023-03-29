import React from "react";
import "./App.css";
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-digimedia-v3.css";
import "./assets/css/animated.css";
import "./assets/css/owl.css";
import "./vendor/bootstrap/css/bootstrap.min.css";

import Preheader from "./Components/Preheader.js";
// import Navbar from './Components/Navbar.js';
// import Home from './Components/Home.js';
// import About from './Components/About.js';
// import Services from './Components/Services.js';
// import Footer from './Components/Footer.js';
import Go from "./Components/Go.js";
import Join from "./Components/Community/Join.js";
import Contact from "./Components/Contact/Contact.js";

import { userInputs, userInputs2 } from "./Components/Community/FormSource.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Preheader />} />
          <Route path="/go" element={<Go />} />
          <Route path="/join" element={<Join inputs={userInputs} inputs2={userInputs2} title="Join" />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
