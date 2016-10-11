import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * 上方导航栏按钮
 */
export default class NavBarButton extends Component {
    render () {
        var icon, title;
        if (!!this.props.icon) {
          icon = <Icon name={this.props.icon} size={20} color="#ccc" style={styles.icon}/>;
        }

        if (!!this.props.title) {
          title = <View style={styles.title}><Text style={{fontSize: 12}}>{this.props.title}</Text></View>;
        }
        
        return (
            <TouchableOpacity onPress={this.props.onPress}>
              <View style={styles.btn}>
                  {icon}{title}
              </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50
  },
  icon: {
    width: 20
  },
  title: {
    width: 30
  }
});