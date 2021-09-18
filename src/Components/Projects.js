import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.projects = props.projects;
  }

  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Projects &amp; Git Repositories</h2>
          <ul className="fa-ul mb-0">
            {this.projects.map((data, index) => (
              <li key={index}>
          <a href= {data.projectsRepo}><img src= {data.projectsImage} alt="Project" width="250"></a>
          <p><a href= {data.projectsLive}> {data.projectsName} </a></p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Projects;
