import {
  FETCH_EXCHANGE_RATE_START,
  FETCH_EXCHANGE_RATE_SUCCESS,
  FETCH_EXCHANGE_RATE_FAILURE
} from "../consts/actionTypes.js";

const initialState = {
  fetching: false,
  fetched: false,
  data: [],
  error: null
};

export default function fetchData(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_EXCHANGE_RATE_START:
      return { ...state, fetching: true };
      break;
    case FETCH_EXCHANGE_RATE_SUCCESS:
      return { ...state, fetching: false, fetched: true, error: payload };
      break;
    case FETCH_EXCHANGE_RATE_FAILURE:
      return { ...state, fetching: false, error: payload };
      break;
    default:
      return state;
  }
}
