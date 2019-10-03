import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import movieListReducer from './store/reducers/Movielist';
import tvShowListReducer from './store/reducers/Tvshowlist';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    movieList: movieListReducer,
    tvShowList : tvShowListReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        {/* <BrowserRouter basename='/my-app'> */}
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
