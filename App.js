/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React ,{Component} from 'react';
import {SafeAreaView,StyleSheet,View,StatusBar,Image} from 'react-native';
import HomeScreen from "./navigacion/HomeScreen"


class App extends Component {
  render() {
    return (
        <HomeScreen></HomeScreen>
    );
  }
}

export default App;
