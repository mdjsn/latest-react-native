// packages
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// imports
import Splash from '../containers/splash';
import {AuthStack} from '../stacks/authStack';
import {AppStack} from '../stacks/appStack';

export default createAppContainer(
  createStackNavigator(
    {
      Splash: Splash,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      headerMode: 'none',
      initialRouteName: 'Splash',
    },
  ),
);
