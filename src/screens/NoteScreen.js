import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    Navigator
} from 'react-native';

import NavBarButton from '../components/NavBarButton';
import NavBarTitle from '../components/NavBarTitle';
import NoteListScreen from './note/NoteListScreen';
import NoteEditScreen from './note/NoteEditScreen';

export default class NoteScreen extends Component {
    constructor(props) {
      super(props);
      this._renderScene = this._renderScene.bind(this);
    }

    _renderScene (route, navigator) {

      return <route.screen tabNavigator={navigator} {...route.params}/>

    }

    _renderNavBar () {
      var routeMapper = {
        LeftButton: function (route, navigator, index, navState) {
          if (index > 0) {
            return <NavBarButton title='返回' onPress={() => {navigator.pop()}} icon="chevron-left" />;
          } else {
            return '';
          }
        },
        RightButton: function (route, navigator, index, navState) {
          if (index === 0) {
            return <NavBarButton onPress={() => {navigator.push({
                screen: NoteEditScreen,
                title: '新增'
            })}} icon="plus" />;
          } else {
            return '';
          }
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
                screen: NoteListScreen,
                title: '列表'
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
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: 50
  },
  scene: {
    paddingTop: 50
  }
});