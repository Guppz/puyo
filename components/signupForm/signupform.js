import React ,{Component} from 'react';
import {StyleSheet,View,TextInput} from 'react-native';
import { Form,Item ,Input, Button,Text} from 'native-base';


class Signupform extends Component {
    state = {  }

    swichForm = () =>{
        this.props.onLoginClick();
    }

    render() {
        return (
            <View style={styles.formView}>
                <View style={styles.inputsView} >
                <Form>
                    <Item>
                        <Input placeholder="Username"/>
                    </Item>
                    <Item>
                        <Input placeholder="Email"/>
                    </Item>
                    <Item>
                        <Input placeholder="Password" secureTextEntry={true}/>
                    </Item>
                </Form>
                </View>
                <View style={styles.buttonView} >
                    <Button block rounded style={styles.button} ><Text>Signup</Text></Button>
                    <Button block rounded style={styles.button} onPress={this.swichForm} ><Text>Login</Text></Button>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    formView:{
      backgroundColor:'white',
      width:"80%",
      height:"25%",
      borderRadius:10
    },
    inputsView:{
        marginTop:30,
        paddingStart:10,
        paddingEnd:10
    },
    buttonView:{
        width:"100%",
        marginTop:40,
        flexDirection:'row',
    },
    button:{
        marginRight:10,
        width:"49%"
    }
  });

export default Signupform;