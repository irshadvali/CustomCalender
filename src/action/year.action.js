import { SELECT_YEAR, SELECT_MONTH } from "../utils/Constant";

export const selectedYear = yearValue => {
  return {
    type: CONFERENCE_SELECTED_ROOM,
    payload: yearValue
  };
}