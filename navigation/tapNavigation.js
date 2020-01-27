import { createBottomTabNavigator } from 'react-navigation-tabs';
import  DashScreen  from '../Screens/DashScreen'
import  HomeScreen  from '../Screens/HomeScreen'



const TabNavigator = createBottomTabNavigator({
    Dash: DashScreen,
    Homme,HomeScreen
  });
  
  export default createAppContainer(TabNavigator);



