import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
//********************Return a list of all elements with a property of project and key of title and category. ***********************************************
    return (
      <li className="Project">
      <strong>{this.props.project.title}</strong>:  {this.props.project.category}
      </li>
    );
  }
//****************************************************************************
}

export default ProjectItem;
