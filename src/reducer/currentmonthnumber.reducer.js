import {
  SELECT_YEAR,
  SELECT_MONTH,
  CURRENT_SELECT_MONTH
} from "../utils/Constant";

const currentmonthnumber = (
  state = {
    monthNumberValue: ""
  },
  action
) => {
  switch (action.type) {
    case CURRENT_SELECT_MONTH:
      return { ...state, monthNumberValue: action.payload };
    default:
      return state;
  }
};
export default currentmonthnumber;
