import React ,{Component} from 'react';
import {StyleSheet,View,TextInput} from 'react-native';
import { Form,Item ,Input, Button,Text} from 'native-base';
import { fetchUser} from '../../redux/Actions/users/userActions';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';



class Loginform extends Component {
    state = {email:"",password:""}
    login= () => {
        
        // this.props.fetchUser(this.state.email,this.state.password);
        // if(this.props.users){
        this.props.navigation.navigate('Dash');
    } 
    swichForm = () =>{
        this.props.onSignupClick();
    }

    render() {
        return (
            <View style={styles.formView}>
                <View style={styles.inputsView} >
                <Form>
                    <Item>
                        <Input placeholder="Email" onChangeText={(value) => this.setState({email: value})}/>
                    </Item>
                    <Item>
                        <Input placeholder="Password" secureTextEntry={true} onChangeText={(value) => this.setState({password: value})} />
                    </Item>
                </Form>
                </View>
                <View style={styles.buttonView} >
                    <Button block rounded style={styles.button} onPress={this.login}><Text>Login</Text></Button>
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

  Loginform.propTypes = {
    fetchUser: PropTypes.func.isRequired,
    users: PropTypes.bool.isRequired
  };
  
  const mapStateToProps = state => ({
    users: state.users.users
  });
  

export default connect(mapStateToProps, { fetchUser })(Loginform);
