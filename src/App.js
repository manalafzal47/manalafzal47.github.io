import Navbar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar> 
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Experience></Experience>
    </div>
  );
}

export default App;
