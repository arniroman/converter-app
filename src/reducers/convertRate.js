import { EXHANGE_RATE_CONVERTION } from "../consts/actionTypes";

const initialState = {
  convert_result: {},
};

export default function conversionCurrency(state = initialState,{ type, payload }) {
  switch (type) {
    case EXHANGE_RATE_CONVERTION:
      return { ...state, convert_result: payload };
      break;
    default:
      return state;
  }
}
