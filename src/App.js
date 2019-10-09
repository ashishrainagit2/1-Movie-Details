import React, { Component, Suspense } from 'react';
import './App.css';
import Toolbar from "./components/Toolbar/Toolbar";
//import Movielist from "./containers/Movielist/Movielist";
// import Tvshowlist from './containers/Tvshowlist/Tvshowlist';
import Homepage from './containers/Homepage/Homepage';
import Slider from './containers/Slider/Slider';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Contactus from './containers/Contactus/Contactus';
import Moviepage from './containers/Moviepage/Moviepage';

import asyncComponent from '../src/hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
    return import('../src/containers/Movielist/Movielist');
});

const Tvshowlist = React.lazy(() => import ('./containers/Tvshowlist/Tvshowlist'));

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="wrapper">
          <Toolbar className="ToolbarWrapper"/>
          <Switch>
            {/* <Route path="/tv" exact component={Tvshowlist} /> */}
            <Route 
              path="/tv" 
              exact 
              render={()=> (
                <Suspense fallback={<div>Loading...</div>}>
                  <Tvshowlist />
                </Suspense>
              )} 
            />
            <Route path="/tv/:id"   render={() => <h1>TV show Page</h1>} />
            <Route path="/movies"  exact component={AsyncNewPost} />
            <Route path="/movies/:id"   component ={Moviepage} />
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
