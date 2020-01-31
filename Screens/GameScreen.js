/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React ,{Component} from 'react';
import {SafeAreaView,StyleSheet,View,StatusBar,Image,Text, ScrollView} from 'react-native';
import {Content, Card, CardItem, Body} from 'native-base';
import RelatedGames from '../components/ListView/ListViewRelatedGames'


class GameScreen extends Component {
  state = {GameInfo:{},
           isLoading:true}
  componentDidMount(){
    const gameData = this.props.navigation.getParam('GameData');
    return fetch('https://api.rawg.io/api/games/'+gameData.id)
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        GameInfo: responseJson,
        isLoading:false,
      }, function(){

      });


    })
    .catch((error) =>{
      console.error(error);
    });
  }
  render() {
    const gameData = this.props.navigation.getParam('GameData');
    return (

      <SafeAreaView style={styles.primaryColor} >
      <ScrollView style={[styles.primaryColor,styles.MainView]}>
      <View style={styles.textView}>
        <Text style={styles.title}>{this.state.GameInfo.name}</Text>
      <Image
      style={styles.Image}
      source={{uri: gameData.background_image}}
      />
      </View>
      <View style={styles.cardView}>
      <Content>
      <Card>
        <CardItem  style={styles.card}>
          <Body>
            <Text style={styles.text}>
              {this.state.GameInfo.description_raw}
            </Text>
          </Body>
        </CardItem>
      </Card>
    </Content>
    </View>
      <View style={styles.textViewScore}>
        <View>
          <Text style={styles.scoreText}>{this.state.GameInfo.metacritic}</Text>
          <Text style={styles.text}>Game Score</Text>
        </View>

        <View>
          <Text style={[styles.scoreText,styles.margin]}>{this.state.GameInfo.released} </Text>
          <Text style={styles.text}>Game Realse</Text>
        </View>

      </View>
      <View style={styles.relatedView}>
      <Text style={styles.relatedText}>You may like this games</Text>
        <RelatedGames gameId={gameData.id} navigation={this.props.navigation}/>
      </View>
      </ScrollView>
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
  MainView:{
    height:"100%",
  },
  textView:{
    justifyContent:"center",
    alignItems:"center",
    borderBottomColor: '#f95959',
    borderBottomWidth: 3,
    marginBottom:10,
  },

  textViewScore:{
    justifyContent:"center",
    flexDirection:"row",
    borderColor: '#f95959',
    borderTopWidth: 3,
    borderBottomWidth: 3,
    marginBottom:10,
  },
  title:{
      color:"white",
      fontSize:30
  },
  text:{
    textAlign:"center",
    color:"white",
    fontSize:20
  },
  
  cardView:{
    paddingStart:10,
    paddingEnd:10,
  },
  card:{
    backgroundColor:"#f95959"
  },
  Image:{
    width:"100%", 
    height:250,
    marginBottom:10
  },
  scoreText:{
    textAlign:"center",
    color:"white",
    fontSize:40
  },
  margin:{
    marginLeft:10
  },
  relatedView:{
    borderBottomColor: '#f95959',
    borderBottomWidth: 3,
    marginBottom:10,
  },
  relatedText:{
    color:"white",
    fontSize:30,
    textAlign:"center",
  }
});

export default GameScreen;
