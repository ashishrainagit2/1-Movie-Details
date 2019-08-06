import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';


export const setMovieList = ( ingredients ) => {
    return {
        type: actionTypes.SET_MOVIE_LIST,
        ingredients: ingredients
    };
};

export const fetchMovieListFailed = () => {
    return {
        type: actionTypes.FETCH_MOVIELIST_FAILED
    };
};


export const initIngredients = () => {
    return dispatch => {
        axios.get( 'https://api.themoviedb.org/3/movie/popular?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&page=1')
            .then( response => {
               console.log("data ==>" , response.data);
               dispatch(setMovieList(response.data));
            } )
            .catch( error => {
                dispatch(fetchMovieListFailed());
            } );
    };
};