import React from 'react';
import './FooterStyles.css';
import { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FiPrinter } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";


const Footer = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail("");
    };
    const year = new Date();
    return (
        <div className='Footer-Container'>
            <div className='Footer-Section'>
                <div className='Footer-top'>
                    <div className='mail-input'>
                        <form action="" onSubmit={handleSubmit} className='form-mail'>
                            <input type="email" name='email' value={email} required
                                onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' />
                            <button className='emailbtn' type='submit'><FaMailBulk /></button>
                        </form>
                        <p>To Recieve Our Updates Via E-mail</p>
                    </div>
                </div>

                <div className='detail-section'>
                    <div className='detail'>
                        <div className='about'>
                            <h3>ABOUT US</h3>
                            <p className='abt-p'>
                                Committed to inculcate the values of discipline, honesty and integrity among students, faculty and staff and to bring out the significance of the close interaction, Industries and the Society for the Cultural, Social and Economic advancements of our Nation.
                            </p>
                            <span className='socio-img'>
                                <a href="https://twitter.com/?logout=1708754468090" ><FaXTwitter /></a>
                                <a href="https://www.facebook.com/groups/151869358260625/" ><FaFacebook /></a>
                                <a href="https://velalarengg.ac.in/" ><FaGoogle /></a>
                                <a href="https://www.linkedin.com/school/velalar-college-of-engineering-and-technology/" ><FaLinkedinIn /></a>
                            </span>
                        </div>
                    </div>

                    <div className='detail'>
                        <div className='post'>
                            <h3>LATEST POSTS</h3>
                            <ul className="latest_post">
                                <li>
                                    <img src="https://source.unsplash.com/random/60x60?sig=incrementingIdentifier" alt="" />
                                    <div className="latest_post_txt">
                                        <h4><a href="#">On your mark get set and go now</a></h4>
                                        <p>April 12, 2024</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://source.unsplash.com/random/60x60?sig=incrementingIdentifier" alt="" />
                                    <div className="latest_post_txt">
                                        <h4><a href="#">The ship set ground on the shore of this</a></h4>
                                        <p>May 09, 2024</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://source.unsplash.com/random/60x60?sig=incrementingIdentifier" alt="" />
                                    <div className="latest_post_txt">
                                        <h4><a href="#">This time there's no stopping us from away</a></h4>
                                        <p>June 01, 2024</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="detail">
                        <div className='others'>
                            <h3>OTHERS</h3>
                            <ul className="info-list">
                                <li> <a href="https://nptel.ac.in/">NPTEL</a> </li>
                                <li> <a href="https://swayam.gov.in/">Swayam</a> </li>
                                <li> <a href="https://vidyamitra.inflibnet.ac.in/">Vidya-Mitra</a> </li>
                                <li> <a href="https://epgp.inflibnet.ac.ac">Gateway to All PG Courses</a> </li>
                                <li> <a href="https://www.education.gov.in/technology-enabled-learning-1">Sakshat(Innovative E-Content)</a> </li>
                                <li> <a href="https://www.youth4work.com/onlinetalenttest">Skill Tests for students</a> </li>
                                <li> <a href="https://voters.eci.gov.in/">NV Services Portal</a> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="detail">
                        <div className='contact'>
                            <h3>CONTACT</h3>
                            <ul className='footer_contact'>
                                <FaLocationDot />
                                <li>Maruthi Nagar, Thindal, Erode, Tamil Nadu 638012</li>
                                <FaPhone />
                                <li>0424-2244201 /02</li>
                                <FiPrinter />
                                <li>+01 123 456 78</li>
                                <IoIosMail />
                                <li>vcetece@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-cr'>
                    <p>&copy; {year.getFullYear()} VCET Campus. All rights reserved</p>
                </div> 
                <div className='footer-nav'>
                    <ul>
                        <li> <a href="#">HOME |</a></li>
                        <li> <a href="#">ABOUT |</a></li>
                        <li> <a href="#">COURSES |</a></li>
                        <li> <a href="#">EVENTS |</a></li>
                        <li> <a href="#">TERMS & CONDITIONS</a></li>
                    </ul>
                </div>               
            </div>
        </div>
    )
}

export default Footer