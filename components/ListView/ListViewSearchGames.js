import React ,{Component} from 'react';
import {SafeAreaView,StyleSheet,View,ScrollView,Text,Image, TouchableOpacity} from 'react-native';
import { Spinner} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';


class ListViewSearchGames extends Component {
  state = {
  }
  componentDidMount(){
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
            <FlatList keyExtractor={(item,index)=> item.id} data={this.props.gamesList} renderItem={renderGridItems} numColumns={1} initialNumToRender={20}></FlatList>
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
    width:"90%",
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
    width: "100%",
    height: 150,
  },
  text:{
    marginTop:10,
    color:"white",
    textAlign:"center"
  }

});

export default ListViewSearchGames;