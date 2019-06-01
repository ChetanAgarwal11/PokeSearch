import React, { Component } from 'react'
import {View, ImageBackground} from 'react-native';

export default class PokeLoader extends Component {
    render() {
        return (
            <View>
                <ImageBackground 
                    source={{uri: 'https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif'}}
                    style={{height: 400, width: 400, flex: 1, justifyContent: 'center', alignItems: 'center'}}
                />
            </View>
        )
    }
}
