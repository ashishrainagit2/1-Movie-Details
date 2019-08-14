import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    Movielist : [],
    page : null,
    ModalStatus : false,
    activeMovie : null,
    pageNumber : 0,
    totalPages : null,
    scrolling : false
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

const getMoreMovieCards = (state , action) => {
    console.log('reducer get more movie cards');
    return state;
}

const getMoreMovieCardsOnScroll = (state , action) => {
    console.log("more movie on scroll : reducer");
    return state;
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_MOVIE_LIST: return addMovieList( state, action );
        case actionTypes.GET_MORE_MOVIE_INFO : return getMoreMovieInfo(state , action);
        case actionTypes.GET_MORE_MOVIE_CARDS : return getMoreMovieCards(state , action);
        case actionTypes.GET_MORE_MOVIE_CARDS_ON_SCROLL : return getMoreMovieCardsOnScroll(state , action);
        default: return state;
    }
};

export default reducer;