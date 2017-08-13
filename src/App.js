 //Main React render, placeholder for all
import React, { Component } from 'react';
import  Projects from './Components/Projects';
import './App.css';

class App extends Component {
  //***************** New State(page) with Data ***************************
  constructor() {
    super();
    this.state = {
      projects:[
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
        },
      ]
    }
    //************************************************************************
  }
   //****************** Passing ^projects State into a projects property******
  render() {
    return (
      <div className="App">
      My App
      <Projects projects={this.state.projects}/>
      </div>
    );
  }
  //**************************************************************************
}

export default App;
