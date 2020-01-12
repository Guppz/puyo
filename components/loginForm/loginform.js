import React ,{Component} from 'react';
import {StyleSheet,View,TextInput} from 'react-native';
import { Form,Item ,Input, Button,Text} from 'native-base';


class Loginform extends Component {
    state = {  }

    swichForm = () =>{
        this.props.onSignupClick();
    }

    render() {
        return (
            <View style={styles.formView}>
                <View style={styles.inputsView} >
                <Form>
                    <Item>
                        <Input placeholder="Username" />
                    </Item>
                    <Item>
                        <Input placeholder="Password" secureTextEntry={true}/>
                    </Item>
                </Form>
                </View>
                <View style={styles.buttonView} >
                    <Button block rounded style={styles.button} ><Text>Login</Text></Button>
                    <Button block rounded style={styles.button} onPress={this.swichForm}><Text>Signup</Text></Button>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    formView:{
      backgroundColor:'white',
      width:"80%",
      height:"20%",
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

export default Loginform;