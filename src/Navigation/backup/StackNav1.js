import { StackNavigator } from 'react-navigation';
import Screen1 from '../../Screens/InnerScreen/DashboardPages/Screen1';
import Screen2 from '../Screens/InnerScreen/DashboardPages/Screen2';

export default StackHome = StackNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: () => ({
      title: 'Here is screen 1 !'
    })
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: () => ({
      title: 'Screen 2'
    })
  }
}, {
    initialRouteName: 'Screen2',

  });