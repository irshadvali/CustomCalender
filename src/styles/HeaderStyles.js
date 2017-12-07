import { StyleSheet } from "react-native";
import { Platform } from "react-native";
const HeaderStyles = StyleSheet.create({
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },

  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  headerContainer: {
    height: Platform.OS === "ios" ? 40 : 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    padding: 5
  }
});
export default HeaderStyles;
