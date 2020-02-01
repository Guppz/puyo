/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React ,{Component} from 'react';
import {SafeAreaView,StyleSheet,View,Text} from 'react-native';
import { Container, Header, Item, Input, Icon,Spinner} from 'native-base'
import SearchList from '../components/ListView/ListViewSearchGames'



class SearchScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    search: '',
    isLoading: true,      
    data: [],
    extra:[],
  };


  componentDidMount() {
    return fetch('https://tarea-api-u.herokuapp.com/games')
    .then((response) => response.json())
    .then((responseJson) => {
      var newArray = [];
      for (let index = 0; index < responseJson.length; index++) {
        newArray = newArray.concat(responseJson[index].results);
      }

      this.setState({
        data: newArray,
        extra:newArray,
        isLoading:false,
      })
    })
    .catch((error) =>{
      console.error(error);
    });
  }


  render() {

    searchFilterFunction = text => {
      this.setState({
        search: text,
      });
  
      const newData = this.state.extra.filter(item => {
        const itemData = `${item.name.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({
        data: newData,
      });
    };


    return (
          <View style={[styles.primaryColor,styles.primaryView]}>
          <Header searchBar rounded  style={styles.primaryColor}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={text => searchFilterFunction(text)} />
          </Item>
          </Header>
          {this.state.isLoading && <Spinner color='white' style={styles.spiner}/>}
          {this.state.isLoading == false && <SearchList isLoading={this.state.isLoading} gamesList={this.state.data} navigation={this.props.navigation}/>}
          </View>
  
          );
  }
}

const styles = StyleSheet.create({
  primaryColor:{
    backgroundColor:'#323232'
  },
  primaryView:{
    height:"100%",
  },
  spiner:{
    justifyContent:"center",
    alignItems:"center"
  },
  Header:{

  }
});

export default SearchScreen;
