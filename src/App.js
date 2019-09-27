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
            <Route path="/tv" exact component={Tvshowlist} />
            <Route path="/tv/:id"   render={() => <h1>TV show Page</h1>} />
            <Route path="/movies"  exact component={Movielist} />
            <Route path="/movies/:id"   render={() => <h1>Movie Page</h1>} />
            <Route path="/slidertest"  component={Slider} />
            <Route path="/register"  component={Contactus} />
            <Route path="/error-boundary"  component={ErrorPage} />
            <Route path="/actors"  render={() => <h1>Actors Page Under Construction</h1>} />
            <Route path="/actor/:id"  render={() => <h1>Actor no : 11234</h1>} />
            <Route path="/"  exact component={Homepage} />
            <Route path="/home"   component={Homepage} />
            <Route render={() => <h1>OOPS...Page Not found</h1>}/>
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}


export default App;
