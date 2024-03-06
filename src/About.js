import React from "react";

import "./AboutStyle.css";

import Navbar from "./Navbar";
import Whychoose from './Whychoose'
import Footer from "./Footer";

import masterimg from './Images/masterimg.png'
import bachelorimg from './Images/bachelorimg.png'
import associateimg from './Images/associateimg.png'

import profit from './Images/profit.png'
import structure from './Images/structure.png'
import test from './Images/test.png'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutImage">
        <h1>About us</h1>
      </div>
      <div className="subNav-containers">
        <div className="headings">
          <h2>About Us</h2>
        </div>
        <div className="contact-element">
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

      <div className='container'>
      <div className="university-container">
        <div className="welcome-uni">
          <div className="uni-text">
            <h1>Welcome To Our University</h1>
            <p>when the odds are against him and their dangers work to do. You bet your life Speed Racer he will see it through. Well we're movin' on up to the east side. To a deluxe apartment in the sky. So this is the tale of our castaways</p>
          </div>
        </div>
        
        <div className="degree">
          <div className="degree-content">
              <div class="deg">
                <img src={masterimg} alt="" class="img" />
                <div class="text">
                  <h4>ASSOCIATE’S DEGREE</h4>
                  <p>You would see the biggest gift would be from me and the card attached would say thank you for being a friend.</p>
                </div>
              </div>

              <div class="deg">
                <img src={bachelorimg} alt="" class="img" />
                <div class="text">
                  <h4>BACHELOR’S DEGREE</h4>
                  <p>On your mark get set and go now. Got a dream and we just know now we're gonna make our dream come true.</p>
                </div>
              </div>

              <div class="deg">
                <img src={associateimg} alt="" class="img" />
                <div class="text">
                  <h4>MASTER’S DEGREE</h4>
                  <p>Just sit right back and you'll hear a tale a tale of a fateful trip that started from this tropic port aboard this tiny ship.</p>
                </div>
              </div>
          </div>

        </div>
      </div>
    </div>
      <Whychoose />
      <div className="principle-container">
        <div className="principle-title">
          <h1>Our Principles & Practices</h1>
          <p>Why we are unique from others</p>
        </div>

        <div className="principle-image">
          <div className="profit">
            <img src={profit} alt="" />
            <h3>Not For Profit</h3>
          </div>

          <div className="profit">
            <img src={structure} alt="" />
            <h3>Course Structure</h3>
          </div>

          <div className="profit">
            <img src={test} alt="" />
            <h3>Test Preparation</h3>
          </div>
        </div>
      </div>

      <div className="applycontainer">
        <div className="applymain">
            <div className="applytext">
              <h3>Do You Want To Join With US !</h3>
              <p>Makin their way the only way they know how. That's just a little bit more than the law will allow.</p>
            </div>
            <div className="applybtn">
              <a href="#">APPLY NOW</a>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
