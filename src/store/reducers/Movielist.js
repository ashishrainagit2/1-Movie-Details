import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    Movielist : null
}

const addMovieList = () => {
    console.log("reducer action");
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_MOVIE_LIST: return addMovieList( state, action );
        default: return state;
    }
};

export default reducer;