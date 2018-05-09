import { EXHANGE_RATE_CONVERTION } from "../consts/actionTypes";

export const сurrencyСonversion = data => {
  return {
    type: EXHANGE_RATE_CONVERTION,
    payload: data
  };
};
