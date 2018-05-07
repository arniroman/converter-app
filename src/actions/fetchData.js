import {
  FETCH_EXCHANGE_RATE_START,
  FETCH_EXCHANGE_RATE_SUCCESS,
  FETCH_EXCHANGE_RATE_FAILURE
} from "../consts/actionTypes";

import { fetchDataApi } from "../api/index";

export const fetchData = () => async dispatch => {
  dispatch({ type: FETCH_EXCHANGE_RATE_START });
  try {
    const data = await fetchDataApi();
    dispatch({
      type: FETCH_EXCHANGE_RATE_SUCCESS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: FETCH_EXCHANGE_RATE_FAILURE,
      payload: err
    });
  }
};
