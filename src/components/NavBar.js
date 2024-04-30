import "../styles/globals.css";
import React from "react";

function NavBar() {
  return (
    <div className = "nav-container">
    <div className = "navigation">
      <div className="home"><h1>Home</h1></div>
      <div className="about_me"><h1>About Me</h1></div>
      <div className="portfolio"><h1>Portfolio</h1></div>
      <div className="experience"><h1>Experiences</h1></div>
      <div className = "contact"> 
        <h1>Contact Me</h1>
      </div>
    </div>
    <div className = "title">
      <div className = "title-container">
      <h1 className = "first-title">I'm a</h1>
      <h1 className = "second-title">Full Stack Web Developer</h1>
      </div>
      <button className = "pastprojects-btn">Past Projects</button>
    </div>
    </div>
  );
}

export default NavBar;
