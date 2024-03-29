import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';


export const setMovieList = ( movielist ) => {
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

export const getMoreMovieInfo = (props) => {
    return  {
        type : actionTypes.GET_MORE_MOVIE_INFO,
        id : props
    }
}

export const getMoreMovies = () => {
    return {
        type: actionTypes.GET_MORE_MOVIE_CARDS,
    }
}

export const initMovielist = (no) => {
    no = no + 1;
    return dispatch => {
        axios.get("popular?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&page=" + no)
            .then( response => {
               dispatch(setMovieList(response.data));
            })
            .catch( error => {
                dispatch(fetchMovieListFailed());
            });
    };
};

export const filterMovies = (event) => {
    return {
        type : actionTypes.FILTER_MOVIE_DATA,
        filterType: event.target.value
    }
}

export const trailerClickedHandler = (id) => {
    return {
        type : actionTypes.GET_TRAILER,
        trailerId: id
    }
}

export const trailerClicked = (id) => {
    return dispatch => {
        axios.get("https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US")
        .then( response => {
            dispatch(trailerClickedHandler(response.data.results[0].key));
        })
        .catch( error => {
           console.log("error in youtube")
        });
    }
}