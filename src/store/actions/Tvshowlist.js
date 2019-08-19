import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const setMovieList = ( tvshowlist ) => {
    return {
        type: actionTypes.SET_TVSHOW_LIST,
        tvshowlist: tvshowlist
    };
};

export const fetchMovieListFailed = () => {
    return {
        type: actionTypes.FETCH_MOVIELIST_FAILED
    };
};

export const getMoreTvInfo = (id) => {
    return {
        type : actionTypes.GET_MORE_TVSHOW_INFO,
        id : id
    }
}

export const initTvShowList = (no) => {
    console.log("no is" , no);
    no++;
    return dispatch => {
        let url = `https://api.themoviedb.org/3/tv/popular?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&page=${no}`;
        axios.get( url)
            .then( response => {
               dispatch(setMovieList(response.data));
            } )
            .catch( error => {
                dispatch(fetchMovieListFailed());
            } );
    };
}