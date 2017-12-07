import { StyleSheet } from "react-native";

const ButtonStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
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
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    padding: 15
  },
  rectangleContainer: {
    flexDirection: "row",
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
  },
  imageStructure: {
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  }
});
export default ButtonStyle;
