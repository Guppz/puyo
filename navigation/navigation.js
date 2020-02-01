import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../Screens/HomeScreen'
import DashScreen from '../Screens/DashScreen'
import SearchScreen from '../Screens/SearchScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import GameScreen from '../Screens/GameScreen'


const TabNavigator = createBottomTabNavigator(
  {
  Dash: DashScreen,
  Search:SearchScreen,
  },
  {
    tabBarOptions: {
      style: {
       height: 30,
       backgroundColor:"#f95959"
      }
    }
  }
);



const appNavigator = createStackNavigator(
  {
    Home:HomeScreen,
    Game:GameScreen,
    Tap:TabNavigator,

  },
  {
    initialRouteName:'Home',
    headerMode:"none"
  },
  

)

export default createAppContainer(appNavigator);
