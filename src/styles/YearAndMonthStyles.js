import { StyleSheet, Platform } from "react-native";
import colors from "../config/Colors";

const YearAndMonthStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.darkBackground
  },

  gridViewContainer: {
    padding: 10,
    backgroundColor: colors.optionBackground
  },
  yearText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center"
  },
  yearTextRed: {
    color: "#d00000",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold"
  },
  otherMonthDayContainer:{
    padding: 10,
    backgroundColor:"#e6e6e6"
  },
  unseenTextRed: {
    color: "#f9937f",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold"
  },
  currentDateText: {
    color: "#01579B",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold"
  },
});

export default YearAndMonthStyles;
