import { SELECT_YEAR, SELECT_MONTH } from "../utils/Constant";

const selectedYear = (
  state = {
    selectedYearValue: ""
  },
  action
) => {
  switch (action.type) {
    case SELECT_YEAR:
      return { ...state, selectedYearValue: action.payload };
    default:
      return state;
  }
};
export default selectedYear;
