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
import DayHeaderItem from "../components/DayHeaderItem";
import Header from "../core_components/Header";
import Button from "../core_components/Button";
import buttonStyle from "../styles/ButtonStyles";
import MonthList from "../utils/MonthList";
import DayHeader from "../utils/DayHeader";
import DayItem from "../components/DayItem";
import { connect } from "react-redux";
import { selectedYear } from "../action/year.action";
import { selectedMonth } from "../action/year.action";
import { currentSelectedMonth } from "../action/year.action";
const { width, height } = Dimensions.get("window");

// const equalWidth = width / 4;

class YearsAndMonths extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearList: [],
      monthList: MonthList.monthList,
      monthnumber: 1,
      noOfDate: [],
      dayHeaderList: DayHeader.dayHeaderList
    };
    //  this._listYear = this._listYearMonth.bind();
  }
  componentWillMount() {
    var today = new Date();
    var currentYr = parseInt(today.getFullYear());
    var currentMn = parseInt(today.getMonth());
    this._listYearMonth(currentYr, currentMn);
  }

  _listYearMonth = (selectedYearCustom, selectedMonthCustom) => {
    // this.props.currentSelectedMonth(selectedMonthCustom + 1);
    var ffff = this.props.currentmonthnumber;
    console.log("current month" + ffff);
    var today = new Date();

    var currentday = today.getDate();
    var listY = [];
    var currentYrLoop = parseInt(today.getFullYear());
    var selectedYear = selectedYearCustom;
    console.log(selectedYear);
    for (var i = currentYrLoop - 5; i <= currentYrLoop + 6; i++) {
      listY.push({ year: i, currentflag: selectedYear == i ? 1 : 0 });
      //listY.push({ year: i });
    }
    this.setState({
      yearList: listY
    });
    this.setState({
      monthnumber: selectedMonthCustom + 1
    });
    console.log(listY);

    var year = selectedYear;
    var month = selectedMonthCustom;
    var numberOfDay;
    var numberOfDayBeforeMonth;
    if (
      month == 0 ||
      month == 2 ||
      month == 4 ||
      month == 6 ||
      month == 7 ||
      month == 9 ||
      month == 11
    ) {
      numberOfDay = 32;
    } else if (month == 1) {
      if (year % 4 == 0) {
        numberOfDay = 30;
      } else {
        numberOfDay = 29;
      }
    } else {
      numberOfDay = 31;
    }
    if (
      month == 0 ||
      month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10
    ) {
      numberOfDayBeforeMonth = 32;
    } else if (month == 2) {
      if (year % 4 == 0) {
        numberOfDayBeforeMonth = 30;
      } else {
        numberOfDayBeforeMonth = 29;
      }
    } else {
      numberOfDayBeforeMonth = 31;
    }
    /*
in this   var date = new Date(year, month, 1);
i am passing current year and month, 
if i will change year and function,
then i have to pass that year and month.
*/
    var date = new Date(year, month, 1);
    tempDay = date.getDay();
    daylist = [];
    var currentMonthFlag;
    for (var j = 0; j < tempDay; j++) {
      var olddate = numberOfDayBeforeMonth - (tempDay - j);
      currentMonthFlag = 0;
      daylist.push({
        day: j,
        monthdate: olddate,
        currentMonth: currentMonthFlag,
        currentdayFlag: 0,
        currentYearflag: year == selectedYear ? 1 : 0
      });
    }
    for (var i = tempDay; i <= 41; i++) {
      //var x=i;
      var y = 7;
      var actDay = i % y;
      var tempdate = i - (tempDay - 1);
      var actDate;

      if (tempdate > numberOfDay - 1) {
        acttwoDate = tempdate % numberOfDay;
        actDate = acttwoDate + 1;
        currentMonthFlag = 0;
      } else {
        actDate = tempdate % numberOfDay;
        currentMonthFlag = 1;
      }
      daylist.push({
        day: actDay,
        monthdate: actDate,
        currentMonth: currentMonthFlag,
        currentdayFlag: currentday == actDate ? 1 : 0,
        currentYearflag: year == selectedYear ? 1 : 0
      });
    }
    console.log(daylist);
    this.setState({
      noOfDate: daylist
    });
  };

  yearItem(item) {
    this.props.selectedYear(item.year);
    this._listYearMonth(item.year, this.props.selectedMonthValue);
  }
  monthItem(item) {
    this.props.selectedMonth(item.id - 1);
    this._listYearMonth(this.props.selectedYearValue, item.id - 1);
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
                      this.yearItem(item);
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
            extraData={this.state}
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
                      this.monthItem(item);
                    }}
                  />
                </View>
              </View>
            )}
          />
        </View>
        <View>
          <FlatList
            data={this.state.dayHeaderList}
            numColumns={7}
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
                  <DayHeaderItem itemvalue={item} />
                </View>
              </View>
            )}
          />
        </View>
        <View>
          <FlatList
            data={this.state.noOfDate}
            numColumns={7}
            extraData={this.state}
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
                  <DayItem itemvalue={item} />
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

const mapStateToProps = state => {
  return {
    selectedYearValue: state.SELECTEDYEAR.selectedYearValue,
    selectedMonthValue: state.SELECTEDMONTH.selectedMonthValue,
    monthNumberValue: state.CURRENTMONTHNUMBER.monthNumberValue
  };
};

export default connect(mapStateToProps, {
  selectedYear,
  selectedMonth,
  currentSelectedMonth
})(YearsAndMonths);
