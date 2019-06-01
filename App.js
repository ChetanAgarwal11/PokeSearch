/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Landing from './src/Landing';
import Search from './src/Search';
import {View} from 'react-native';

export default class App extends Component {
  state={
    currentScreen: 'landing'
  }

  switchScreen = (currentScreen) => {
    this.setState({currentScreen});
  }

  renderScreen = () => {
    if(this.state.currentScreen === 'landing'){
      return(
        <Landing switchScreen={this.switchScreen}/>
      )
    }else{
      return(
        <Search/>
      )
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
        {this.renderScreen()}
      </View>
      
    );
  }
}


