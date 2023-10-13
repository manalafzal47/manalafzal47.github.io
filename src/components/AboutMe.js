import "../styles/globals.css";
import Headshot from "../images/Headshot.png";
import React from "react";

function AboutMe() {
  return (
    <div className = "aboutme">
        <img className = "photo" src={Headshot} alt="Headshot"></img>
        <div className = "description-content">
          <p className = "first-line">Hi! My name is Manal Afzal</p>
          <p className="second-line"> I'm a second year computer science student
          interested in cybersecurity, web development 
          </p>
          <p className = "second-line"> and AI. I'm an eager learner who is always looking to expand her skills</p>
          <p className = "second-line"> by attending networking events, getting certificates, and brushing up my skills</p>
          <p className = "second-line"> by working on new projects.</p>
          
          <button className = "Resume-btn">Resume</button>

        </div>
    </div>
  );
}

export default AboutMe;
