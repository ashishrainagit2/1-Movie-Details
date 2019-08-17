import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const setMovieList = ( movielist ) => {
    console.log("here");
    return {
        type: actionTypes.SET_MOVIE_LIST,
        movielist: movielist
    };
};

export const fetchMovieListFailed = () => {
    return {
        type: actionTypes.FETCH_MOVIELIST_FAILED
    };
};

export const initTvShowList = () => {
    return dispatch => {
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&page=1`;
        axios.get( url)
            .then( response => {
               dispatch(setMovieList(response.data));
            } )
            .catch( error => {
                dispatch(fetchMovieListFailed());
            } );
    };
}