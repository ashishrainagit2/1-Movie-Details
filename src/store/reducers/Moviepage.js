import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

  const initialState = {
        activeMovie : null,
        moviedetails : null,
        activeTrailer : null
    }

    const setMovieDetails = (state , action) => {
        return updateObject(
            state , {
                activeMovie : action.no,
                moviedetails : action.moviedetails
            }
        )
    }

    const setMovieTrailer = (state, action) => {
        return updateObject(
            state, {
                activeTrailer : action.trailerid
            }
        )
    }

    const closeMovieTrailer = (state , action) => {
        return updateObject (
            state , {
                activeTrailer : null
            }
        )
    }

    const reducer = (state = initialState , action) => {
        switch(action.type){
            case actionTypes.SET_MOVIE: return setMovieDetails(state , action);
            case actionTypes.SET_TRAILER: return setMovieTrailer(state , action);
            case actionTypes.CLOSE_TRAILER: return closeMovieTrailer(state , action);
            default : return state;
        }
    }


export default reducer;