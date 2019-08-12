import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    Movielist : null,
    page : null,
    ModalStatus : false
}


const getMoreMovieInfo = (state , action) =>  {
    let newModalState = !this.state.ModalStatus;
    return updateObject(
        state , {
            ModalStatus : newModalState
        }
    )
}

const addMovieList = (state , action) => {
    console.log("movie list in reduicer" , action.movielist);
    return updateObject( state, {
        Movielist: action.movielist.results,
        page : action.movielist.page

    } );
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_MOVIE_LIST: return addMovieList( state, action );
        case actionTypes.GET_MORE_MOVIE_INFO : return getMoreMovieInfo(state , action);
        default: return state;
    }
};

export default reducer;