import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Alert
} from "react-native";

import YearItem from "../components/YearItem";
import MonthItem from "../components/MonthItem";
import Header from "../core_components/Header";
import Button from "../core_components/Button";
import buttonStyle from "../styles/ButtonStyles";
import MonthList from "../utils/MonthList"
const { width, height } = Dimensions.get("window");

const equalWidth = width / 4;

class YearsAndMonths extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearList: [],
      monthList: MonthList.monthList,
      monthnumber:1
    };
  }
  componentWillMount() {
    var today = new Date();
    // Alert.alert(
    //   today.getDate() +
    //     "/" +
    //     parseInt(today.getMonth() + 1) +
    //     "/" +
    //     today.getFullYear()
    // );
    var listY = [];
    var currentYear = parseInt(today.getFullYear());
    for (var i = currentYear - 5; i <= currentYear + 6; i++) {
      listY.push({ year: i, currentflag: currentYear == i ? 1 : 0 });
      //listY.push({ year: i });
    }
    this.setState({
      yearList: listY
    });
    this.setState({
      monthnumber:parseInt(today.getMonth() + 1)
    });
    console.log(listY);
  }

  dateItem(item) {
    Alert.alert(""+item.year);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header backgroundColor={"#e6e6e6"}>
          <Header.LeftHeaderElem>
            <Image
              style={buttonStyle.imageStructure}
              source={require("../images/circleChecked.png")}
            />
            <Text style={{ color: "#fff" }}> Irshad </Text>
          </Header.LeftHeaderElem>
        </Header>
        <FlatList
          data={this.state.yearList}
          numColumns={4}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                margin: 1
              }}
            >
              <View>
                <YearItem
                  itemvalue={item}
                  onPress={item => {
                    this.dateItem(item)
                  }}
                />
              </View>
            </View>
          )}
        />
             <FlatList
          data={this.state.monthList}
          numColumns={4}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                margin: 1
              }}
            >
              <View>
                <MonthItem
                  itemvalue={item}
                  monthnumber={this.state.monthnumber}
                  onPress={item => {
                    this.dateItem(item)
                  }}
                />
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    flexDirection: "column"
  }
});

export default YearsAndMonths;
