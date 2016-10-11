import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    Navigator
} from 'react-native';

import NavBarButton from '../components/NavBarButton';
import NavBarTitle from '../components/NavBarTitle';
import PersonalListScreen from './personal/PersonalListScreen';

export default class PersonalScreen extends Component {
    constructor(props) {
      super(props);
      this._renderScene = this._renderScene.bind(this);
    }

    _renderScene (route, navigator) {

      return <route.screen tabNavigator={navigator} appNavigator={this.props.appNavigator}/>

    }

    _renderNavBar () {
      var routeMapper = {
        LeftButton: function (route, navigator, index, navState) {
          if (index > 0) {
            return <NavBarButton title='返回' onPress={() => {navigator.pop();}} icon="chevron-left" />;
          } else {
            return '';
          }
        },
        RightButton: function (route, navigator, index, navState) {
          return '';
        },
        Title: function (route, navigator, index, navState) {
          return (<NavBarTitle>{route.title}</NavBarTitle>);
        }
      };

      return (
        <Navigator.NavigationBar
           routeMapper={routeMapper}
           style={styles.navBar}
         />
        );
    }

    render () {
        return (
            <Navigator
              initialRoute={{
                screen: PersonalListScreen,
                title: '个人'
              }}
              renderScene={this._renderScene}
              sceneStyle={styles.scene}
              navigationBar={this._renderNavBar()}
            />
        )
    }
}

const styles = StyleSheet.create({
  navBar: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: 50
  },
  scene: {
    paddingTop: 50
  }
});