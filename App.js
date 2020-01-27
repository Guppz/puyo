/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React ,{Component} from 'react';
import {SafeAreaView,StyleSheet,View,StatusBar,Image} from 'react-native';
import Navigation from "./navigation/navigation";
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={ store } >
        <Navigation/>
      </Provider>
    );
  }
}

export default App;
