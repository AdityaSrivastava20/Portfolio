import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="about" id="about">
    <h2 data-aos="fade-down">About Me</h2>
    <p data-aos="fade-up">
      Hi, I'm a motivated and enthusiastic Full Stack Python Developer with a strong foundation in 
      Django REST Framework, React, and modern web technologies. I enjoy learning new technologies 
      and building projects to improve my skills.
    </p>
  
    <div className="items">
      <div className="item" data-aos="flip-left">
        <h3>Frontend Skills</h3>
        <p>HTML, CSS, JavaScript, React</p>
      </div>

      <div className="item" data-aos="zoom-in">
        <h3>Design</h3>
        <p>Bootstrap, Taliwind Css</p>
      </div>
  
      <div className="item" data-aos="flip-right">
        <h3>Backend Skills</h3>
        <p>Python, Django REST Framework, SQL</p>
      </div>
  
      
    </div>
  </div>
  );
};

export default About;