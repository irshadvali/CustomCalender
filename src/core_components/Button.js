import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import LoadingIndicator from "../core_components/LoadingIndicator";
import LoadingIndicatorStyles from "../styles/LoadingIndicatorStyles";
import PropTypes from "prop-types";
class Button extends Component {
  static navigationOptions = {
    header: null
  };

  onPress = () => {
    if (this.props.onPress) {
      this.props.onPress();
    }
  };

  render() {
    if (this.props.loading) {
      return (
        <View style={this.props.container}>
          <LoadingIndicator
            loading={this.props.loading}
            color={"white"}
            style={LoadingIndicatorStyles.buttonLoader}
          />
        </View>
      );
    } else {
      return (
        <View style={this.props.container}>
          <TouchableOpacity
            style={this.props.buttonContainer}
            onPress={this.onPress}
          >
            <Image style={this.props.imageStyle} source={this.props.image} />
            <Text style={this.props.textStyle}>{this.props.title}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}
export default Button;

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  loading: PropTypes.bool,
  container: PropTypes.object,
  buttonContainer: PropTypes.any,
  textStyle: PropTypes.any,
  image: PropTypes.any,
  imageStyle: PropTypes.any
};

Button.defaultProps = {
  text: "Submit",
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: null,
  textStyle: {
    color: "white",
    fontSize: 16,
    padding: 15
  },
  image: null,
  imageStyle: {
    width: 20,
    height: 20
  }
};
