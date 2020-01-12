/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React ,{Component} from 'react';
import {SafeAreaView,StyleSheet,View,StatusBar} from 'react-native';

import Loginform  from "./components/loginForm/loginform";


class App extends Component {
  state = {  }
  render() {
    return (
      <>
      <StatusBar backgroundColor="blue" barStyle="dark-content" />
      <SafeAreaView style={styles.primaryColor}>
      <View style={[styles.primaryColor,styles.primaryView]}>
        <Loginform></Loginform>
      </View>
      </SafeAreaView>
      </>
    );
  }
}


const styles = StyleSheet.create({
  primaryColor:{
    backgroundColor:'#323232'
  },
  primaryView:{
    height:"100%",
    justifyContent:"center",
    alignItems:"center",
  },
});

export default App;
