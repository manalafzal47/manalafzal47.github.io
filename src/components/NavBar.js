import "../styles/globals.css";
import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className = "nav-container">
      <div className = "navigation">
        
        <div>
          <Link to="/">
            <h1 className="home">Home</h1>
          </Link>
        </div>

        <div>
          <Link to="/AboutMe">
            <h1 className="about_me">About Me</h1>
          </Link>
        </div>

        <div>
          <Link to="/Experience"> 
            <h1 className="experience">Experiences</h1>
          </Link>
        
        </div>

        <div>  
          <Link to="/Contact">
            <h1 className = "contact">Contact Me</h1>
          </Link>
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
