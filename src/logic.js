import { сurrencyСonversion } from "./actions/convertRate";

export const convertСurrency = data => dispatch => {
  const result = data.amount * data.icomingDataRate / data.outputDataRate;
  const exchange_rate = result/data.amount
  dispatch(
    сurrencyСonversion({
      result: result.toFixed(5),
      initials: data.outputDataInitials,
      exchange_rate: exchange_rate.toFixed(5)
    })
  );
};
