import React from 'react';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

  const initialState = {
        pageNumber : 0,
        totalPages : 0,
        tvShows : null
    }

   const addTvShowList = (state , action) => {
        console.log("tvshow reducer active");
    }

    const reducer = (state = initialState , action) => {
        switch(action.type){
            case actionTypes.SET_TVSHOW_LIST: return addTvShowList(state , action);
            default : return state;
        }
    }


export default reducer;