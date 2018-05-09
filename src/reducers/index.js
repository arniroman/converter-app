
import { combineReducers } from "redux";
import fetchData from './fetchData'
import convertRate from './convertRate'

export const reducers = combineReducers({
  fetchData,
  convertRate
});
