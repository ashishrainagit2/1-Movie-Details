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
import Actorpage from './containers/Actorpage/Actorpage';
import Tvshow from './containers/Tvshow/Tvshow';
import Auth from './containers/Auth/Auth';
import { connect } from 'react-redux';
import Logout  from './containers/Auth/Logout';

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
          <Toolbar isAuth={this.props.isAuth} className="ToolbarWrapper"/>
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
            
            <Route path="/movies"  exact component={AsyncNewPost} />
            <Route path="/movies/:id"   component ={Moviepage} />
            <Route path="/slidertest"  component={Slider} />
            <Route path="/register"  component={Contactus} />
            <Route path="/error-boundary"  component={ErrorPage} />
            <Route path="/actors"  render={() => <h1>Actors Page Under Construction</h1>} />
            <Route path="/actor/:id"  component={Actorpage} />
            <Route path="/"  exact component={Homepage} />
            <Route path="/home"   component={Homepage} />
            <Route path="/tvshow/:id"  exact component={Tvshow} />
            <Route path="/auth"  exact component={Auth} />
            <Route path="/logout"  exact component={Logout} />
            <Route render={() => <h1>OOPS...Page Not found</h1>}/>
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
      isAuth: state.auth.token !== null
  };
};

export default connect( mapStateToProps, null )(App);
