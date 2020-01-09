import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'

const AppNavigator = createStackNavigator({
  SearchScreen: {
    screen: SearchScreen,
  },
  ResultsShow: {
    screen: ResultsShowScreen
  }
},{
  initialRouteName:'SearchScreen',
  defaultNavigationOptions: {
    title: 'Busniess Search'
  }
});

export default createAppContainer(AppNavigator);
