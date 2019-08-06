import React, { Component } from 'react';
import './App.css';
import Toolbar from "./components/Toolbar/Toolbar";

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="wrapper">
          <Toolbar className="ToolbarWrapper"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => { }

const mapDispatchToProps = dispatch => { }

export default App;
