import React, {Component} from 'react';
import {
    StyleSheet, 
    View, 
    Image, 
    Animated, 
    StatusBar
} from 'react-native';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            opacity: new Animated.Value(1)
        };
    }

    render () {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} animated={true} />
                <Animated.Image 
                    onLoadEnd={() => {
                        Animated.sequence([
                            Animated.timing(this.state.opacity, {toValue: 0, duration: 3000, delay: 1000})
                        ]).start(this.props.onEnd);
                    }} 
                    source={require('../assets/images/cat.png')}
                    style={[styles.img, {opacity: this.state.opacity}]} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    flex: 1,
    width: 400,
    height: 200,
    resizeMode: 'contain',
    opacity: 0
  }
});