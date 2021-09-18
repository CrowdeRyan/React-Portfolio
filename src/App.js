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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData: profileData.landing,
      experience: profileData.experience,
      education: profileData.education,
      skills: profileData.skills,
      interests: profileData.interests,
      awards: profileData.awards,
    };

    ReactGA.initialize("UA-158818625-1");
    ReactGA.pageview(window.location.pathname);
  }
}

export default App;
