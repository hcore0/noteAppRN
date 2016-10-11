import React, { Component } from 'react';
import {
  Navigator,
  View,
  Text,
  AsyncStorage
} from 'react-native';

import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import App from './App';

export default class Route extends Component {
  constructor(props) {
    super(props);
  
    this.renderScene = this.renderScene.bind(this);
  }

  render () {
    return (
      <Navigator
        initialRoute={{id: 'SplashScreen', name: 'index'}}
        renderScene={this.renderScene} />
    );
  }

  _onEnd (navigator) {
    AsyncStorage.getItem('@noteAppRN:token', (err, token) => {
      if (!!token) {
        navigator.replace({id: 'App', name: 'index'})
      } else {
        navigator.replace({id: 'LoginScreen', name: 'index'})
      }
    });
  }

  renderScene (route, navigator) {
    switch (route.id) {
      case 'App': 
        return <App appNavigator={navigator} />;
      case 'SplashScreen': 
        return <SplashScreen appNavigator={navigator} onEnd={() => this._onEnd(navigator)}/>;
      case 'LoginScreen':
        return <LoginScreen appNavigator={navigator} />;
    }

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>404 notfound</Text> 
      </View>
    );
  }
}
