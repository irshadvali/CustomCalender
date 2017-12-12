import { SELECT_YEAR, SELECT_MONTH } from "../utils/Constant";

export const selectedYear = yearValue => {
  return {
    type: SELECT_YEAR,
    payload: yearValue
  };
};
