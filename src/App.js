// * Main React render, placeholder for all other components inside of render *
import React, { Component } from 'react';
import uuid from 'uuid';
import  Projects from './Components/Projects';
import  AddProject from './Components/AddProject';
import './App.css';

//***************** New State(page) with Data ***************************
class App extends Component {
  constructor() { // *** holds like values + key value pairs ** //
    super(); // *** Why super()? *** it's just syntex. *****
    this.state = {
      projects:[]
    }
  }
//**************************************************************************

//******** LifeCycle Method - Fires everytime component is rerendered ******
componentWillMount() {
  this.setState(
      {projects:
        [
      {
        id:uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id:uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id:uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]
  });
}

handleAddProject(project){
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects:projects})
}
handleDeleteProject(id){
  let projects = this.state.projects;
  let index = projects.findIndex(x => x.id === id);
  projects.splice(index, 1);
  this.setState({projects:projects});
}
//******* let index = looks through all the ids and matches it with current id being passed in ************************************************************

//****************** Passing ^projects State into a projects property*******

//****** class attribute not allowed in JSX (className or for 'html')*******
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>

      </div>
    );
  }
}
//***************** HOW DOES CLASSNAME="APP" INTERACT WITH CLASS APP^ ?*****
//**************************************************************************

export default App;
