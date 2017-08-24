// ****** Replace class, className, and export default with 'Projects' *******
import React, { Component } from 'react';
import ProjectItem from './Projectitem';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
//******  Create Variable to hold list of Projects in Projectitem.js*******
    let projectItems;
//*************************************************************************

//**if statement that maps & returns projectItems Component in Projectitem.js*
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
        )
      });
    }
    //**** import ^^ ProjectItem.js ****
    //**** each project is is assigned to the ProjectItem variable^*****
//*****************************************************************************

//************Returns ^projectItems variable as a div element******************
    return (
      <div className="Projects">
      <h3>Lastest Project</h3>
      {projectItems}
      </div>
    );
//*****************************************************************************
  }
}

export default Projects;
