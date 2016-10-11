import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

/**
 * 上方导航栏标题
 */
export default class NavBarTitle extends Component {
    render () {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.text}>{this.props.children}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 50
  },
  text: {
    width: 200, 
    textAlign: 'center'
  }
});