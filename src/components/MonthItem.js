//import liraries
import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/YearAndMonthStyles";
import PropTypes from "prop-types";
class MonthItem extends Component {
  componentWillMount() {}
  onPress = () => {
    if (this.props.onPress) {
      itemvalue: PropTypes.object;
      this.props.onPress(this.props.itemvalue);
    }
  };

  textStylefunction() {
    if (this.props.itemvalue.id == this.props.monthnumber) {
      return (
        <Text style={styles.yearTextRed}> {this.props.itemvalue.month}</Text>
      );
    } else {
      return <Text style={styles.yearText}> {this.props.itemvalue.month}</Text>;
    }
  }
  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.gridViewContainer}>{this.textStylefunction()}</View>
      </TouchableOpacity>
    );
  }
}

//make this component available to the app
export default MonthItem;

MonthItem.PropTypes = {
  onPress: PropTypes.func,
  itemvalue: PropTypes.object,
  monthnumber: PropTypes.number
};

MonthItem.defaultProps = {
  itemvalue: [],
  currentflag: 0,
  monthnumber: 1
};
