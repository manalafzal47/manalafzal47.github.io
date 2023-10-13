import React from "react";
import "../styles/globals.css";
import react from "../images/react.png";
import java from "../images/java.png";
import python from "../images/python.png";
import js from "../images/js.png";
import cplus from "../images/c++.png";
import html from "../images/html.png";
import css from "../images/css.png";

function Skills() {
    return (
        <div className = "skills-container">
            <div className = "title">Experience</div>
            <div className = "logos">
                <img className = "react-logo" src={react} alt="react"></img>
                <img className = "python-logo" src={java} alt="python"></img>
                <img className = "java-logo" src={python} alt="java"></img>
                <img className = "js-logo" src={js} alt="js"></img>
            </div>

            <div className = "logos-two">
                <img className = "cplus-logo" src={cplus} alt="cplus"></img>
                <img className = "html-logo" src={html} alt="html"></img>
                <img className = "css-logo" src={css} alt="css"></img>
            </div>
        </div>
    );
}

export default Skills;