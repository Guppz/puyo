/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React ,{Component} from 'react';
import {SafeAreaView,StyleSheet,View,StatusBar,Image,Text} from 'react-native';




class GameScreen extends Component {
  state = {}
  render() {
    const gameData = this.props.navigation.getParam('GameData');
    return (
        <SafeAreaView>
          <View>
            <Text>{gameData.name}</Text>
          </View>
          </SafeAreaView>
          
          );
  }
}

GameScreen.navigationOptions ={
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
  logo:{
    marginTop:"-75%",
    width: "50%", 
    height:"40%",
  }
});

export default GameScreen;
