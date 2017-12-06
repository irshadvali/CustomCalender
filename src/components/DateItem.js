//import liraries
import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "../styles/YearAndMonthStyles";
import PropTypes from "prop-types";
class DateItem extends Component {
  render() {
    return (
      <View style={styles.gridViewContainer}>
        <Text style={styles.yearText}> {this.props.yearValue}</Text>
      </View>
    );
  }
}

//make this component available to the app
export default DateItem;

DateItem.protoType = {
  yearValue: PropTypes.object,
  currentflag: PropTypes.number
};

DateItem.defaultProps = {
  yearValue: [],
  currentflag: 0
};
