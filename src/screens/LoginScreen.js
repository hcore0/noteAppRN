import React, {Component} from 'react';
import {StyleSheet, Text, View, ToastAndroid, AsyncStorage} from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

export default class LoginScreen extends Component {
    constructor(props) {
      super(props);
    
      this._login = this._login.bind(this);

      this.state = {
        account: '',
        password: ''
      };
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.appName}>Note</Text>
                </View>
                <View style={styles.body}>
                    <Input placeholder='用户名' 
                      onChangeText={(account) => this.setState({account: account})}
                      value={this.state.account}/>
                    <Input placeholder='密码' secureTextEntry={true} onChangeText={(password) => this.setState({password: password})}
                      value={this.state.password}/>
                    <Button style={styles.submitBtn} onPress={this._login}>
                      <Text style={styles.submit}>登陆</Text>
                    </Button>
                </View>
            </View>
        )
    }

    _login () {
        fetch('http://192.168.0.123:3000/api/login', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            account: this.state.account,
            password: this.state.password,
          })
        })
        .then((response) => {
          if (response.status === 401) {
            throw new Error('没有该用户');
          }
          return response.json();
        })
        .then((data) => {

          AsyncStorage.setItem('@noteAppRN:token', data.token, (err) => {
            this.props.appNavigator.replace({id: 'App', name: 'index'});

          }
          );
        })
        .catch((err) => {
          ToastAndroid.show(err.message, ToastAndroid.LONG);
        });
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  head: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  appName: {
    fontSize: 30
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