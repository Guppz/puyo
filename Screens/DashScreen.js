import React ,{Component} from 'react';
import {SafeAreaView,StyleSheet,View,StatusBar,Image,Text} from 'react-native';
import ListViewGames from "../components/ListView/ListViewGames";
import { Button } from 'native-base';



class DashScreen extends Component {
  state = {}
  render() {
    return (
        <SafeAreaView style={styles.primaryColor}>
          <View style={[styles.primaryColor,styles.primaryView]}>
            <ListViewGames navigation={this.props.navigation}/>
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
  }
});




export default DashScreen;