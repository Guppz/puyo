import React ,{Component} from 'react';
import {StyleSheet,View,TextInput} from 'react-native';
import { Form,Item ,Input, Button,Text} from 'native-base';


class Loginform extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.formView}>
                <View style={styles.inputsView} >
                <Form>
                    <Item>
                        <Input placeholder="Username" />
                    </Item>
                    <Item>
                        <Input placeholder="Password" />
                    </Item>
                </Form>
                </View>
                <Button style={styles.button} block rounded><Text>Login</Text></Button>
                
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
    button:{
        marginTop:40,

    }
  });

export default Loginform;