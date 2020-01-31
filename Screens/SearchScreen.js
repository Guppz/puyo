/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React ,{Component} from 'react';
import {SafeAreaView,StyleSheet,View,Text} from 'react-native';
import { Container, Header, Item, Input, Icon} from 'native-base'
import SearchList from '../components/ListView/ListViewSearchGames'



class SearchScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    search: '',
    loading: false,      
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
        isLoading:true,
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
          <View>
            <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={text => searchFilterFunction(text)} />
          </Item>
        </Header>
          <SearchList isLoading={this.state.loading} gamesList={this.state.data} navigation={this.props.navigation}/>
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
    justifyContent:"center",
    alignItems:"center",
  },
  spiner:{
    justifyContent:"center",
    alignItems:"center"
  }
});

export default SearchScreen;
