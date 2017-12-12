import { SELECT_YEAR, SELECT_MONTH } from "../utils/Constant";

const selectedmonth = (
  state = {
    selectedMonthValue: ""
  },
  action
) => {
  switch (action.type) {
    case SELECT_MONTH:
      return { ...state, selectedMonthValue: action.payload };
    default:
      return state;
  }
};
export default selectedmonth;
