// * Main React render, placeholder for all other components inside of render *
import React, { Component } from 'react';
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
  this.setState({projects: [
      {
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]
  });
}

//****************** Passing ^projects State into a projects property*******
//****** class attribute not allowed in JSX (className or for 'html')*******
  render() {
    return (
      <div className="App">
        <AddProject />
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}
//***************** HOW DOES CLASSNAME="APP" INTERACT WITH CLASS APP^ ?*****
//**************************************************************************

export default App;
