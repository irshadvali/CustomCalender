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
    fontFamily: "Lato-Heavy",
    textAlign: "center"
  }
});

export default YearAndMonthStyles;
