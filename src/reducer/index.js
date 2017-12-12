import { combineReducers } from "redux";
import SELECTEDYEAR from "../reducer/selectedyear.reducer";
import SELECTEDMONTH from "../reducer/selectedmonth.reducer";
import CURRENTMONTHNUMBER from "../reducer/currentmonthnumber.reducer";

export default combineReducers({
  SELECTEDYEAR,
  SELECTEDMONTH,
  CURRENTMONTHNUMBER
});
