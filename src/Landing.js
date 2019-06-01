import React, { Component } from 'react'
import {View, Text, ImageBackground} from 'react-native';
import {Button} from 'native-base';

var background = require('../assets/icons/landing.jpg');

export default class Landing extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
                    <View style={styles.welcomeTxt}>
                        <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
                        <Button block={true} onPress={() => this.props.switchScreen('search')} style={styles.buttonStyle}>
                            <Text style={{color: 'white'}}>Start Searching !!</Text>
                        </Button>          
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = {
    container: {
      flex: 1
    },
    welcomeTxt: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonStyle: {
      margin: 10
    },
    titleStyle: {
      fontSize: 30,
      color: 'blue',
      alignItems: 'center'
    }
  }