import React, {Component} from 'react';
import {ListView, Text, View, StyleSheet, AsyncStorage, ToastAndroid} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {noteAction} from './action';
import NoteStore from './store';

export default class NoteEditScreen extends Component {
    constructor(props) {
      super(props);
    
      this.state = {};

      this._submit = this._submit.bind(this);
    }

    _submit () {
      AsyncStorage.getItem('@noteAppRN:token')
      .then((token) => {
        return fetch('http://192.168.0.123:3000/api/note', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify({
            title: this.state.title,
            content: this.state.content,
          })
        })
      })
      .then((response) => {
          return response.json();
        })
        .then((data) => {
          noteAction.addNote(data);
          ToastAndroid.show('保存成功', ToastAndroid.SHORT);
          this.props.tabNavigator.pop();
        })
        .catch((err) => {
          ToastAndroid.show(err.message, ToastAndroid.LONG);
        });
        
      
    }
    render () {
        return (
            <View style={styles.container}>
                <Input placeholder='标题' 
                  onChangeText={(title) => this.setState({title: title})}
                  value={this.state.title}/>
                <Input placeholder='内容' onChangeText={(content) => this.setState({content: content})}
                  value={this.state.content}/>
                <Button style={styles.submitBtn} onPress={this._submit}>
                  <Text style={styles.submit}>提交</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  body: {
    flex: 3,
    paddingTop: 20,
    paddingLeft: 50,
    paddingRight: 50
  },
  submitBtn: {
    backgroundColor: 'green',
    marginTop: 50
  },
  submit: {
    textAlign: 'center',
    color: '#fff'
  }
});