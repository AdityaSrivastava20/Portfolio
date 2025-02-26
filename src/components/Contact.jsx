import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <>
    <div className="container contact" id="contact">
      <h2 
          data-aos="fade-down"
          data-aos-duration="1000">Contact Me</h2>
      <div
        className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <a href="https://www.instagram.com/_.adityasrivastava?igsh=ZjA4ZXA5d2Fhd3J3" target="_blank" className="items">
          <FaInstagram className="icons" />
        </a>
        
        <a href="https://www.linkedin.com/in/aditya-srivastava-7544a4233/" target="_blank" className="items">
          <CiLinkedin className="icons" />
        </a>
       
        <a href="https://github.com/AdityaSrivastava20" target="_blank" className="items">
          <FaGithubSquare className="icons" />
        </a> 
        <a
          href="mailto:adityasri277@gmail.com"
          target="_blank"
          className="items"
        >
          <SiGmail className="icons" />
        </a>
      </div>
    </div>
  </>
  )
}

export default Contact
