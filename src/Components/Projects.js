import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.projects = props.projects;
  }
}
