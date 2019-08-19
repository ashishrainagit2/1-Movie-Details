import React from 'react';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

  const initialState = {
        pageNumber : 0,
        totalPages : 0,
        tvShows : [],
        activeMovie : null,
        modalStatus : false
    }

   const addTvShowList = (state , action) => {
       state = {
           ...state,
           pageNumber : state.pageNumber + 1,
           tvShows : [...state.tvShows , ...action.tvshowlist.results]
       }
        return state;
    }

    const getMoreTvShowInfo = (state , action) => {
        console.log("action id in reducer" , action.id)
        let newModalStatus = !(state.ModalStatus);
        return updateObject(
            state , {
                ModalStatus : newModalStatus,
                activeMovie : action.id
            }
        )
    }

    const reducer = (state = initialState , action) => {
        switch(action.type){
            case actionTypes.SET_TVSHOW_LIST: return addTvShowList(state , action);
            case actionTypes.GET_MORE_TVSHOW_INFO: return getMoreTvShowInfo(state , action);
            default : return state;
        }
    }


export default reducer;