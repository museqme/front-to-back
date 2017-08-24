import React, { Component } from 'react';

//******************* Return a list of all elements with a property of project & key/value of title and category. ***************************************
//************ When button is clicked fire
class ProjectItem extends Component {

deleteProject(id){
  this.props.onDelete(id);
}

  render() {
    return (
      <li className="Project">
      <strong>{this.props.project.title}</strong>: {this.props.project.category}
      <button onClick={this.deleteProject.bind(this, this.props.project.id)}>X</button>
      </li>
    );
  }
}
//**** onClick fires deleteProject()^ / binds with projects w/ id *****
//******** project.id represents className + "id" located in app.js **********
//****************************************************************************

export default ProjectItem;
