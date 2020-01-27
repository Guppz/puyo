import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../Screens/HomeScreen'
import DashScreen from '../Screens/DashScreen'
import SearchScreen from '../Screens/SearchScreen'
import ProfileScreen from '../Screens/ProfileScreen'


const TabNavigator = createBottomTabNavigator({
  Dash: DashScreen,
  Search:SearchScreen,
  Profile:ProfileScreen
});



const appNavigator = createStackNavigator(
  {
    Home:HomeScreen,
    Tap:TabNavigator,
  },
  {
    initialRouteName:'Home',
    header:null,
    headerMode:'none'
  },
  

)

export default createAppContainer(appNavigator);
