import React, { Component } from "react";
import Sidebar from "./Components/Sidebar";
import Landing from "./Components/Landing";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import profileData from "./profileData.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData: profileData.landing,
      experience: profileData.experience,
      education: profileData.education,
      skills: profileData.skills,
      aboutMe: profileData.aboutMe,
      projects: profileData.projects,
    };
  }
  render() {
    return (
      <div className="App">
        <Sidebar sidebarData={this.state.landingData} />
        <div className="container-fluid p-0">
          <Landing landingData={this.state.landingData} />
          <hr className="m-0" />
          <Experience experience={this.state.experience} />
          <hr className="m-0" />
          <Education education={this.state.education} />
          <hr className="m-0" />
          <Skills skills={this.state.skills} />
          <hr className="m-0" />
          <AboutMe aboutMe={this.state.aboutMe} />
          <hr className="m-0" />
          <Projects projects={this.state.projects} />
        </div>
      </div>
    );
  }
}

export default App;
