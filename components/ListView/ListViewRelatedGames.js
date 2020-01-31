import React ,{Component} from 'react';
import {SafeAreaView,StyleSheet,View,ScrollView,Text,Image} from 'react-native';
import { Button ,Spinner} from 'native-base';
import GameCards from '../Card/GameCard'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


class ListViewRelatedGames extends Component {
  state = {
    isLoading:true,
    gamesList:{}
  }
  componentDidMount(){
    return fetch('https://api.rawg.io/api/games/'+this.props.gameId+'/suggested')
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
    const renderGridItems = (data) =>{
      return(
        <TouchableOpacity style={styles.gridItem} onPress={()=>{
          this.props.navigation.replace({
                                          routeName:'Game',
                                          params:{
                                            GameData: data.item
                                          }});
        }}>
        <View>
        <Image
          style={styles.Image}
          source={{uri: data.item.background_image}}
          />
          <Text style={styles.text}>{data.item.name}</Text>
        </View>
        </TouchableOpacity>
      );
    }

    return (
        <SafeAreaView>
          <View>
            {this.state.isLoading && <Spinner color='white'/>}
            {this.state.isLoading == false && <FlatList horizontal={true}keyExtractor={(item,index)=> item.id} data={this.state.gamesList} renderItem={renderGridItems}></FlatList>}
          </View>
        </SafeAreaView>
          
          );
  }
}



const styles = StyleSheet.create({

  gridItem:{
    flex:1,
    margin:15,
    height:200,
    width:150,
    backgroundColor:"#f95959",
    borderRadius:10,
    shadowColor: "white",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  Image:{
    width: 150,
    height: 150,
  },
  text:{
    fontSize:12,
    marginTop:10,
    color:"white",
    textAlign:"center"
  }

});

export default ListViewRelatedGames;