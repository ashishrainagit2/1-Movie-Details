import React, { Component } from 'react';
import './App.css';
import Toolbar from "./components/Toolbar/Toolbar";
import Movielist from "./containers/Movielist/Movielist";
import Tvshowlist from './containers/Tvshowlist/Tvshowlist';
import Homepage from './containers/Homepage/Homepage';
import Slider from './containers/Slider/Slider';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Contactus from './containers/Contactus/Contactus';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="wrapper">
          <Toolbar className="ToolbarWrapper"/>
          <Switch>
            <Route path="/tv"  component={Tvshowlist} />
            <Route path="/movies"  component={Movielist} />
            <Route path="/slidertest"  component={Slider} />
            <Route path="/register"  component={Contactus} />
            <Route path="/error-boundary"  component={ErrorPage} />
            <Route path="/" exact component={Homepage} />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}


export default App;
