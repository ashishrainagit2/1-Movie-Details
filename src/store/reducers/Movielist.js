import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    Movielist : [],
    page : null,
    ModalStatus : false,
    activeMovie : null,
    pageNumber : 0,
    totalPages : null,
    scrolling : false,
    ratingFilter : ['HIGHEST RATED' , 'LOWEST RATED' ]
}

const getMoreMovieInfo = (state , action) =>  {
    let newModalStatus = !(state.ModalStatus);
    return updateObject(
        state , {
            ModalStatus : newModalStatus,
            activeMovie : action.id
        }
    )
}

const addMovieList = (state , action) => {
    const newMovieList = [...state.Movielist , ...action.movielist.results]
    return updateObject( state, {
        Movielist: newMovieList,
        pageNumber: state.pageNumber + 1,
        page : action.movielist.page
    } );
}

const getMoreMovieCards = (state , action) => {
    return state;
}

const filterMovieData =  (state, action) => {
    console.log('filter movie data in reducer');
    return state;
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_MOVIE_LIST: return addMovieList( state, action );
        case actionTypes.GET_MORE_MOVIE_INFO : return getMoreMovieInfo(state , action);
        case actionTypes.GET_MORE_MOVIE_CARDS : return getMoreMovieCards(state , action);
        case actionTypes.FILTER_MOVIE_DATA : return filterMovieData(state , action);
        default: return state;
    }
};

export default reducer;