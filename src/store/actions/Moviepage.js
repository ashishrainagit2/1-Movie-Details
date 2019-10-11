import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const setMovie = (movieinfo, no) => {
    return {
        type: actionTypes.SET_MOVIE,
        moviedetails: movieinfo  
    }
}

export const getMovieDetails = (no) => {
    console.log(no);
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

export const trailerhander  = (id) => {
    console.log(id)
    return {
        type: actionTypes.SET_TRAILER,
        trailerid : id
    }
}

export const closeTrailer = () => {
    return {
        type : actionTypes.CLOSE_TRAILER,
    }
}

export const getMovieTrailer = (no) => {
    return dispatch => {
        axios.get("https://api.themoviedb.org/3/movie/" + no + "/videos?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US")
        .then(response => {
            dispatch(trailerhander(response.data.results[0].key));
        })
        .catch( error => {
            console.log("2");
        })
    }
}

