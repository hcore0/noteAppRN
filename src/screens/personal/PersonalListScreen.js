import React, {Component} from 'react';
import {StyleSheet, Text, View, AsyncStorage} from 'react-native';

import Button from '../../components/Button';

export default class PersonalListScreen extends Component {
    constructor(props) {
      super(props);
    
      this._logout = this._logout.bind(this);
    }

    _logout () {
      AsyncStorage.removeItem('@noteAppRN:token')
      .then(() => {
        this.props.appNavigator.replace({id: 'LoginScreen', name: 'index'});
      });
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>PersonalListScreen</Text>
                <Button style={styles.logoutBtn} onPress={this._logout}>
                      <Text style={styles.logout}>退出</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoutBtn: {
    backgroundColor: 'red',
    marginTop: 50
  },
  logout: {
    textAlign: 'center',
    color: '#fff'
  }
});