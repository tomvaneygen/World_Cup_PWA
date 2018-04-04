import * as actionTypes from './actionTypes';

const initialState = {
  data: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.SET_DATA:
    return {
      ...state, data: action.data
    }
    default: 
      return state;
  }
};

export default reducer;