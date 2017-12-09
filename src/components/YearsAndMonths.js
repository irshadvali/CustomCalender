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

// const equalWidth = width / 4;

class YearsAndMonths extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearList: [],
      monthList: MonthList.monthList,
      monthnumber:1,
      noOfDate:[]
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

    var year = currentYear;
    var month=parseInt(today.getMonth());
    var numberOfDay;
    var numberOfDayBeforeMonth;
    if(month==0 || month== 2 || month== 4 || month== 6 || month== 7 || month== 9 || month== 11)
    {
    numberOfDay=32;
    numberOfDayBeforeMonth=31
    }
    else if(month==1){
    numberOfDay=29
    }
    else{
    numberOfDay=31
    }
    
    var date = new Date(year,month,1);
    tempDay=date.getDay();
    daylist=[]
    for(var j=0; j<tempDay;j++ ){
    
    var olddate=numberOfDayBeforeMonth-(tempDay-j);
    
    daylist.push({day:j,monthdate:olddate})
    }
    for(var i=tempDay; i<= 42; i++){
    //var x=i;
    var y=7;
    var actDay =i%y;
    var tempdate=i-(tempDay-1);
    actDate=tempdate%numberOfDay
    
    daylist.push({day:actDay,monthdate:actDate})
    }
    console.log(daylist);
    this.setState({
      noOfDate:daylist
    });
  }

  dateItem(item) {
    Alert.alert(""+item.year);
  }
  monthItem(item) {
    Alert.alert(""+item.month);
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
        <View>
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
         </View>
         <View>
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
                    this.monthItem(item)
                  }}
                />
              </View>
            </View>
          )}
        />
        </View>
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
