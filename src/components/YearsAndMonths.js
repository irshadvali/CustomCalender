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

import DateItem from "../components/DateItem";

const { width, height } = Dimensions.get("window");

const equalWidth = width / 4;

class YearsAndMonths extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearList: []
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
    console.log(listY);
  }
  render() {
    return (
      <View style={styles.container}>
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
                <DateItem 
                yearValue={item.year}
                currentflag={item.currentflag}

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
