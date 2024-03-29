import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    Movielist : [],
    initialMovieList : [],
    page : null,
    ModalStatus : false,
    activeMovie : null,
    pageNumber : 0,
    totalPages : null,
    scrolling : false,
    ratingFilter : ['RATED', 'HIGHEST RATED' , 'LOWEST RATED' ],
    selectedFilter : "RATED",
    trailerId : null
}

const getMoreMovieInfo = (state , action) =>  {
    let newModalStatus = !(state.ModalStatus);
    return updateObject(
        state , {
            ModalStatus : newModalStatus,
            activeMovie : action.id,
            trailerId : null
        }
    )
}

const addMovieList = (state , action) => {
    const newMovieList = [...state.Movielist , ...action.movielist.results];
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
    let newMovieList = [...state.Movielist];
    
    if(action.filterType === "LOWEST RATED"){
        newMovieList.sort(function(a , b){
            return (a.popularity - b.popularity)
        })
    } else if (action.filterType === "HIGHEST RATED"){
        newMovieList.sort(function(a , b){
            return (b.popularity - a.popularity)
        })
    } else {
        newMovieList = [...state.initialMovieList]
    }
    
    return updateObject( state, {
        Movielist: newMovieList,
        selectedFilter : action.filterType
    } );
}

const getTrailerData = (state, action ) => {
    return updateObject( state, {
        trailerId : action.trailerId
    } );
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_MOVIE_LIST: return addMovieList( state, action );
        case actionTypes.GET_MORE_MOVIE_INFO : return getMoreMovieInfo(state , action);
        case actionTypes.GET_MORE_MOVIE_CARDS : return getMoreMovieCards(state , action);
        case actionTypes.FILTER_MOVIE_DATA : return filterMovieData(state , action);
        case actionTypes.GET_TRAILER : return getTrailerData(state , action);
        default: return state;
    }
};

export default reducer;