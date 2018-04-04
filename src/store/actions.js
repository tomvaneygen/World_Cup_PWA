import * as actionTypes from './actionTypes';
import axios from '../utils/axios';

export function setData(json) {
  return {type: actionTypes.SET_DATA, data: json.data};
}

export function fetchData() {
  return dispatch => {
    return axios.get()
    .then(json => dispatch(setData(json)));
  };
}

