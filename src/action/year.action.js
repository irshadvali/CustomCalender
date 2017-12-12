import {
  SELECT_YEAR,
  SELECT_MONTH,
  CURRENT_SELECT_MONTH
} from "../utils/Constant";

export const selectedYear = yearValue => {
  return {
    type: SELECT_YEAR,
    payload: yearValue
  };
};
export const selectedMonth = monthValue => {
  return {
    type: SELECT_MONTH,
    payload: monthValue
  };
};
export const currentSelectedMonth = currentMonthValue => {
  return {
    type: CURRENT_SELECT_MONTH,
    payload: currentMonthValue
  };
};
