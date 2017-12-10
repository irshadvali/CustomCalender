//import liraries
import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/YearAndMonthStyles";
import PropTypes from "prop-types";
class DayHeaderItem extends Component {
  
  componentWillMount() {
   
  }
  onClick = () => {
    if (this.props.onPress) {
  itemvalue:PropTypes.object
  this.props.onPress(this.props.itemvalue);
    }
  };

  textStylefunction() {
    if (this.props.itemvalue.id == 0) {
      return <Text style={styles.yearTextRed}> {this.props.itemvalue.dayname}</Text>;
    } else {
      return <Text style={styles.yearText}> {this.props.itemvalue.dayname}</Text>;
    }
  }
  render() {
    return (
      <TouchableOpacity onPress={this.onClick}>
      <View style={styles.gridViewContainer}>
      {this.textStylefunction()}
      </View>
      </TouchableOpacity>
    );
  }
}

//make this component available to the app
export default DayHeaderItem;

DayHeaderItem.PropTypes = {
  onPress: PropTypes.func,
  itemvalue:PropTypes.object,
  monthnumber:PropTypes.number
};

DayHeaderItem.defaultProps = {
  itemvalue: [],
  currentflag: 0,
  monthnumber:1
};