import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

/**
 * 输入框
 */
export default class Button extends Component {
    render () {
        return (
            <TouchableOpacity style={[styles.container, this.props.style]} onPress={this.props.onPress}>
              {this.props.children}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
});