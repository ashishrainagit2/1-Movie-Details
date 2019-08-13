import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    Movielist : [],
    page : null,
    ModalStatus : false,
    activeMovie : null,
    pageNumber : 1
}


const getMoreMovieInfo = (state , action) =>  {
    console.log("action reduder" , action.id);
    let newModalStatus = !(state.ModalStatus);
    return updateObject(
        state , {
            ModalStatus : newModalStatus,
            activeMovie : action.id
        }
    )
}

const addMovieList = (state , action) => {
    return updateObject( state, {
        Movielist: [...state.Movielist , ...action.movielist.results],
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