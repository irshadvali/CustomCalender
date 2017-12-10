//import liraries
import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/YearAndMonthStyles";
import PropTypes from "prop-types";
class DayItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
     containerStructure:{}
    };
  }

  componentWillMount(){
    if(this.props.itemvalue.currentMonth==0){
      this.setState({
        containerStructure:styles.otherMonthDayContainer,
      })
    }
    else{
  this.setState({
    containerStructure:styles.gridViewContainer,
  })
    }
  }
  
  onClick = () => {
    if (this.props.onPress) {
  itemvalue:PropTypes.object
  this.props.onPress(this.props.itemvalue);
    }
  };

  textStylefunction() {
    if (this.props.itemvalue.day == 0) {
      if(this.props.itemvalue.currentMonth==0){
        return <Text style={styles.unseenTextRed}> {this.props.itemvalue.monthdate}</Text>;
      }
      else{
        return <Text style={styles.yearTextRed}> {this.props.itemvalue.monthdate}</Text>;
      }
      return <Text style={styles.yearTextRed}> {this.props.itemvalue.monthdate}</Text>;
    } else {
      return <Text style={styles.yearText}> {this.props.itemvalue.monthdate}</Text>;
    }
  }
  render() {
    return (
      <TouchableOpacity onPress={this.onClick}>
      <View style={this.state.containerStructure}>
      {this.textStylefunction()}
      </View>
      </TouchableOpacity>
    );
  }
}

//make this component available to the app
export default DayItem;

DayItem.PropTypes = {
  onPress: PropTypes.func,
  itemvalue:PropTypes.object,
  monthnumber:PropTypes.number,
  currentMonthFlags:PropTypes.number
};

DayItem.defaultProps = {
  itemvalue: [],
  currentflag: 0,
  monthnumber:1,
  currentMonthFlags:0
};