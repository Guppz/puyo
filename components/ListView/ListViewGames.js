import React ,{Component} from 'react';
import {SafeAreaView,StyleSheet,View,ScrollView} from 'react-native';
import { Button ,Spinner} from 'native-base';
import GameCards from '../Card/GameCard'


class ListViewGames extends Component {
  state = {
    isLoading:true,
    gamesList:{}
  }
  componentDidMount(){
    return fetch('https://api.rawg.io/api/games')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        gamesList: responseJson.results,
        isLoading:false,
      }, function(){

      });

    })
    .catch((error) =>{
      console.error(error);
    });

  }
  render() {

    if(!this.state.isLoading){
      var gameItems = this.state.gamesList.map(game => (
            <GameCards game={game} key={game.id}/>
      ));
    }else{
      gameItems = <Spinner/>
    }

    return (
        <SafeAreaView>
          <ScrollView Style={styles.View}>
            {gameItems}
          </ScrollView>
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

export default ListViewGames;