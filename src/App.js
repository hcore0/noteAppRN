import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import NoteScreen from './screens/NoteScreen';
import PersonalScreen from './screens/PersonalScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

//应用内容 以tab组织
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'note'};
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='rgba(22,22,22,0.5)' animated={true}/>
        
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'note'}
            title='笔记'
            onPress={() => this.setState({selectedTab: 'note'})}
            renderIcon={() => <Icon name="sticky-note" size={20} color="#ccc" />}
            renderSelectedIcon={() => <Icon name="sticky-note" size={20} color="#4285F4" />}
            >
            <NoteScreen appNavigator={this.props.appNavigator}/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'personal'}
            title='个人'
            onPress={() => this.setState({selectedTab: 'personal'})}
            renderIcon={() => <Icon name="user" size={20} color="#ccc" />}
            renderSelectedIcon={() => <Icon name="user" size={20} color="#4285F4" />}
            >
            <PersonalScreen appNavigator={this.props.appNavigator}/>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
