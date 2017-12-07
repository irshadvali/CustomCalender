import { StyleSheet } from "react-native";

const LoadingIndicatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  LoadingIndicator: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#dddddd",
    justifyContent: "center"
  },
  buttonLoader: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    height: 50,
    width: "80%",
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    backgroundColor: "#182d4c",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default LoadingIndicatorStyles;
