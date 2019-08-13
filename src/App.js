import React, { Component } from 'react';
import './App.css';
import Toolbar from "./components/Toolbar/Toolbar";
import Movielist from "./containers/Movielist/Movielist";

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="wrapper">
          <Toolbar className="ToolbarWrapper"/>
            <Movielist />
        </div>
      </div>
    );
  }
}


export default App;
