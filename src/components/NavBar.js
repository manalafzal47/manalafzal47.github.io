import "../styles/globals.css";
import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className = "nav-container">
      <div className = "navigation">
        
        <div className="home">
          <h1>Home</h1>
          <Link to="/"></Link>
        </div>

        <div className="about_me">
          <Link to="/AboutMe">About Me</Link>
        </div>

        <div className="experience">
          <h1>Experiences</h1>
        <Link to="/Experience"> Experiences </Link>
        
        </div>

        <div className = "contact"> 
          <Link to="/Contact">Contact Me</Link>
        </div>

      </div>
        <div className = "title-container">
        <h1 className = "first-title">I'm a</h1>
        <h1 className = "second-title">Full Stack Web Developer</h1>
        <button className = "pastprojects-btn">Past Projects</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
