import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

/**
 * 输入框
 */
export default class Input extends Component {
    render () {
        return (
            <View style={styles.inputWrapper}>
              <TextInput onChangeText={this.props.onChangeText} style={styles.textInput} placeholder={this.props.placeholder} {...this.props}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  inputWrapper: {
    height: 60
  },
  textInput: {
    fontSize: 16
  }
});