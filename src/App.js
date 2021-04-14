import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Navigator, Home, Introduce, Project } from './Pages';
import './App.css';

class App extends Component {
  render() {
    return(
      <div id="Wrapper">
        <div className="menu">
          <Navigator/>
        </div>
       
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route exact path="/introduce" component={Introduce}/>
          <Route exact path="/Project" component={Project}/>
        </div>
      </div>
    );
  }
}

export default App;
