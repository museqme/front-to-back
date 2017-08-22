//Renders App.js to index.html in the <div id="root"> ****
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// *************** 'root' is located in the index.html div *******************
ReactDOM.render(
  <App />,
  document.getElementById('root'));
registerServiceWorker();
