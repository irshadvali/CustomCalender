//import liraries
import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/YearAndMonthStyles";
import PropTypes from "prop-types";
class YearItem extends Component {
  
  componentWillMount() {
    console.log(this.props.itemvalue.currentflag);
  }
  onClick = () => {
    if (this.props.onPress) {
  itemvalue:PropTypes.object
  this.props.onPress(this.props.itemvalue);
    }
  };
  textStylefunction() {
    if (this.props.itemvalue.currentflag == 1) {
      return <Text style={styles.yearTextRed}> {this.props.itemvalue.year}</Text>;
    } else {
      return <Text style={styles.yearText}> {this.props.itemvalue.year}</Text>;
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
export default YearItem;

YearItem.PropTypes = {
  onPress: PropTypes.func,
  itemvalue:PropTypes.object
};

YearItem.defaultProps = {
  itemvalue: [],
  currentflag: 0
};
