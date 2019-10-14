import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';



export const actorDetailsHandler = (id) => {
    return {
        type : actionTypes.SET_ACTOR_DETAILS,
        actorid: id
    }
}

export const getActorDetails = (id) => {
    return dispatch => {
        axios.get("https://api.themoviedb.org/3/person/" + id + "?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US")
        .then( response => {
            dispatch(actorDetailsHandler(response.data));
        })
        .catch( error => {
           console.log("error in youtube")
        });
    }
}