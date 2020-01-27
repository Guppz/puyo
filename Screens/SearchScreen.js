/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React ,{Component} from 'react';
import {SafeAreaView,StyleSheet,View,StatusBar,Image,Text} from 'react-native';




class SearchScreen extends Component {
  state = {}
  render() {
    return (
        <SafeAreaView>
          <View>
            <Text>Search</Text>
          </View>
          </SafeAreaView>
          
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
  logo:{
    marginTop:"-75%",
    width: "50%", 
    height:"40%",
  }
});

export default SearchScreen;
