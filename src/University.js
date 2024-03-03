import React from 'react'
import './UniversituStyle.css'
import masterimg from './Images/masterimg.png'
import bachelorimg from './Images/bachelorimg.png'
import associateimg from './Images/associateimg.png'

const University = () => {
  return (
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
  )
}

export default University
