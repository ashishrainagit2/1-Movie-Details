import React, { Component } from 'react';
import './App.css';
import Toolbar from "./components/Toolbar/Toolbar";
import Movielist from "./containers/Movielist/Movielist";
import Tvshowlist from './containers/Tvshowlist/Tvshowlist';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="wrapper">
          <Toolbar className="ToolbarWrapper"/>
          <Switch>
            <Route path="/tv"  component={Tvshowlist} />
            <Route path="/movies"  component={Movielist} />
          </Switch>
        </div>
      </div>
    );
  }
}


export default App;
