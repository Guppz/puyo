import React ,{Component} from 'react';
import {SafeAreaView,StyleSheet,View,StatusBar,Image,Text} from 'react-native';
import ListViewGames from "../components/ListView/ListViewGames";



class DashScreen extends Component {
  state = {}
  render() {
    return (
        <SafeAreaView>
          <View Style={styles.View}>
            <ListViewGames/>
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




export default DashScreen;