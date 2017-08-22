import React, { Component } from 'react';

//******************* Return a list of all elements with a property of project and key of title and category. ***********************************************
class ProjectItem extends Component {
  render() {
    return (
      <li className="Project">

      <strong>{this.props.project.title}</strong>:  {this.props.project.category}
      </li>
    );
  }
}
//****************************************************************************

export default ProjectItem;
