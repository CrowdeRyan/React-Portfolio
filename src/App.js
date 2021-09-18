import React, { Component } from "react";
import Sidebar from "./Components/Sidebar";
import Landing from "./Components/Landing";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import profileData from "./profileData.json";
import ReactGA from "react-ga";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
