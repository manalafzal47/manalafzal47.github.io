import Navbar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar> 
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
}

export default App;
