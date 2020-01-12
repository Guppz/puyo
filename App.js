/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React ,{Component} from 'react';
import {SafeAreaView,StyleSheet,View,StatusBar,Image} from 'react-native';

import Loginform  from "./components/loginForm/loginform";
import Signupform  from "./components/signupForm/signupform";


class App extends Component {
  state = {
    btnLogin: true,
    btnSignup:false,
  }

  onSignupClick=()=>{
    this.setState({btnSignup:true,btnLogin:false})
  }
  onLoginClick=()=>{
    this.setState({btnSignup:false,btnLogin:true})
  }

  render() {
    return (
      <>
      <StatusBar backgroundColor="blue" barStyle="dark-content" />
      <SafeAreaView style={styles.primaryColor}>
      <View style={[styles.primaryColor,styles.primaryView]}>
        <Image style={styles.logo} source={require('./img/logo.png')}/>
        {this.state.btnLogin && <Loginform onSignupClick={this.onSignupClick}/>}
        {this.state.btnSignup && <Signupform onLoginClick={this.onLoginClick} />}
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
  logo:{
    marginTop:"-75%",
    width: "50%", 
    height:"40%",
  }
});

export default App;
