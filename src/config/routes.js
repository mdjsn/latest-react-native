// packages
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// imports
import Splash from '../screens/splash';
import {AuthStack} from './stacks/AuthStack';
import {AppStack} from './stacks/AppStack';

export default createAppContainer(
  createStackNavigator(
    {
      Splash: Splash,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      headerMode: 'none',
      initialRouteName: 'App',
    },
  ),
);
