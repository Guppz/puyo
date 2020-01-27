import React ,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';


class GameCards extends Component {
  render() {
    return (
        <View style={styles.card}>
            <Text>{this.props.game.name}</Text>
            <Image style={{width: 100, height: 100}} source={{uri: this.props.game.background_image}}/>
        </View>  
    );
  }
}

const styles = StyleSheet.create({
    card:{
        width:"55%",

        backgroundColor:"black",

    }
});
  


export default GameCards
