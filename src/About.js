import React from "react";
import "./AboutStyle.css";

import Navbar from "./Navbar";
import University from "./University";
import Whychoose from './Whychoose'
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutImage">
        <h1>About us</h1>
      </div>
      <div className="subNav-container">
        <div className="heading">
          <h2>About Us</h2>
        </div>
        <div className="contact-elements">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <i className="fa fa-greater-than"></i>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      <University />
      <Whychoose />
      <Footer />
    </div>
  );
};

export default About;
