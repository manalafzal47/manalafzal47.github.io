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
                <div className = "logo">
                    <img className = "react-logo" src={react} alt="react"></img>
                    <h2>React JS</h2>
                </div>
                <div className = "logo">
                    <img className = "python-logo" src={java} alt="python"></img>
                    <h2>Python</h2>
                </div>
                <div className = "logo">
                    <img className = "java-logo" src={python} alt="java"></img>
                    <h2>CSS</h2>
                </div>
                <div className = "logo">
                    <img className = "js-logo" src={js} alt="js"></img>
                    <h2>Javascript</h2>
                </div>
            </div>

            <div className = "logos-two">
                <div className = "logo">
                    <img className = "cplus-logo" src={cplus} alt="cplus"></img>
                    <h2>C++</h2>
                </div>

                <div className = "logo">
                    <img className = "html-logo" src={html} alt="html"></img>
                    <h2>HTML</h2>
                </div>

                <div className = "logo">
                    <img className = "css-logo" src={css} alt="css"></img>
                    <h2>CSS</h2>
                </div>

            </div>
        </div>
    );
}

export default Skills;