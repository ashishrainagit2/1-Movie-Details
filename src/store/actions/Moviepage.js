import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const setMovie = (movieid) => {
    return {
        type: actionTypes.SET_MOVIE,
        movie: movieid
    }
}

export const getMovieDetails = (no) => {
    return dispatch => {
        axios.get("https://api.themoviedb.org/3/movie/"+ no + "?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US")
            .then( response => {
               dispatch(setMovie(response.data));
            })
            .catch( error => {
                console.log("error")
            });
    };
}

