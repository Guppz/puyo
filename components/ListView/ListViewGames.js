import React ,{Component} from 'react';
import {SafeAreaView,StyleSheet,View,ScrollView,Text} from 'react-native';
import { Button ,Spinner} from 'native-base';
import GameCards from '../Card/GameCard'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


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
    const renderGridItems = (data) =>{
      return(
        <TouchableOpacity style={styles.gridItem} onPress={()=>{
          this.props.navigation.navigate({
                                          routeName:'Game',
                                          params:{
                                            GameData: data.item
                                          }});
        }}>
        <View>
          <Text>{data.item.name}</Text>
        </View>
        </TouchableOpacity>
      );
    }

    return (
        <SafeAreaView>
          <View>
            {this.state.isLoading && <Spinner color='white'/>}
            {this.state.isLoading == false && <FlatList keyExtractor={(item,index)=> item.id} data={this.state.gamesList} renderItem={renderGridItems} numColumns={2}></FlatList>}
          </View>
        </SafeAreaView>
          
          );
  }
}



const styles = StyleSheet.create({

  gridItem:{
    flex:1,
    margin:15,
    height:150,
    width:150
  }
});

export default ListViewGames;