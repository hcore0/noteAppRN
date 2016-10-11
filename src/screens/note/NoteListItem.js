import React, {Component} from 'react';
import {
    Text, 
    View, 
    StyleSheet,
    TouchableHighlight 
} from 'react-native';

export default class NoteListItem extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        };
    }

    render () {
        return (
            <TouchableHighlight style={styles.noteItem} onPress={this.props.onPress} underlayColor="#ccc">
                <View style={styles.inner}>
                
                    <View>
                        <Text>{this.props.itemData.title}</Text>
                    </View>
                    <View>
                        <Text>{this.props.itemData.author}</Text>
                    </View>
                
                </View>
            </TouchableHighlight >
        )
    }
}

const styles = StyleSheet.create({
  noteItem: {
    flex: 1,
    height: 70
  },
  inner: {
    flex: 1,
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});