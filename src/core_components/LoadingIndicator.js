import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, ActivityIndicator } from "react-native";

class LoadingIndicator extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    style: PropTypes.any,
    color: PropTypes.string
  };

  render() {
    return (
      <View style={this.props.style}>
        <ActivityIndicator
          color={this.props.color}
          animating={this.props.loading}
        />
      </View>
    );
  }
}

export default LoadingIndicator;
