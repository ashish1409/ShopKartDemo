import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';


const StackScreen1 = StackNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: () => ({
      title: 'Here is screen 1 !',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'red'
      }
    })
  }
});

const StackScreen2 = StackNavigator({
  Screen2: {
    screen: Screen2,
    navigationOptions: () => ({
      title: 'Here is screen 2 !',
      drawerLockMode: 'locked-closed'
    })
  }
});

export default Drawer = DrawerNavigator({
  Screen1: {
    screen: StackScreen1
  },
  Screen2: {
    screen: StackScreen2
  }
}, {
    drawerPosition: 'left'
  });