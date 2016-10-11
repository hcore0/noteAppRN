import React, {Component} from 'react';
import {ListView, Text, View, StyleSheet} from 'react-native';

export default class NoteViewScreen extends Component {

    render () {
        return (
            <View style={styles.container}>
                <Text>{JSON.stringify(this.props.note)}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});