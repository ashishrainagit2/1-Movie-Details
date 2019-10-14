import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    actorid: null
}

const setactor = (state, action) => {
    return updateObject( state, {
        actorid : action.actorid
    } );
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_ACTOR_DETAILS: return setactor( state, action );
        default: return state;
    }
};

export default reducer;