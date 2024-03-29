import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
import { bios } from "../../../Data";
import portfolio from "../../../assets/portfolio.png";
import CV from "../../../assets/CV.pdf"

const About = () => {
  return (
    <div className="container" id="about">
      <div className="title">
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </div>
      <div className="about_container">
        <div className="about_left">
          <img src={portfolio} alt="img-portfolio" />
        </div>
        <div className="about_right">
          <p>
          I am excited about the opportunity to contribute to real-world projects and apply the skills I’ve acquired through 
self-learning. What I lack is experience, I make up for in my dedication to continuous learning and adaptability. I 
have a solid foundation in HTML, CSS, JavaScript and React and I am commited to expanding my knowledge to 
stay current with the latest technologies. 
          </p>
          {bios.map((bio) => (
            <div className="bio" key={bio.id}>
              <span className="biokey">
                {bio.icon}
                {bio.key}
              </span>
              <span className="bioValue">{bio.value}</span>
            </div>
          ))}
          <motion.a 
          href={CV} 
          download="CV"
          target='_blank'
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default About;
