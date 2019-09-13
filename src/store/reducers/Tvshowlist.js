import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

  const initialState = {
        pageNumber : 0,
        totalPages : 0,
        tvShows : [],
        activeMovie : null,
        modalStatus : false,
        loadingState : true,
    }

   const addTvShowList = (state , action) => {
       state = {
           ...state,
           pageNumber : state.pageNumber + 1,
           tvShows : [...state.tvShows , ...action.tvshowlist.results],
           loadingState : !state.loadingState
       }
        return state;
    }

    const changeLoadingState = (state , action) => {
        state = {
            ...state,
            loadingState : false
        }
        return state ;
    }

    const getMoreTvShowInfo = (state , action) => {
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
            case actionTypes.CHANGE_LOADING_STATE: return changeLoadingState(state , action);
            default : return state;
        }
    }


export default reducer;