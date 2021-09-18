import React, { Component } from "react";

class AboutMe extends Component {
  constructor(props) {
    super(props);

    this.interests = props.interests;
  }

  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="aboutMe"
      >
        <div className="w-100">
          <h2 className="mb-5">About Me</h2>
          <p>{this.aboutMe.paragraphOne}</p>
        </div>
      </section>
    );
  }
}

export default AboutMe;
