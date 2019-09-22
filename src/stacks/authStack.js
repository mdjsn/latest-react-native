// packages
import {createStackNavigator} from 'react-navigation-stack';

// imports
import Auth from '../containers/auth';
export const AuthStack = createStackNavigator(
  {
    Auth: Auth,
  },
  {
    headerMode: 'none',
    initialRouteName: Auth,
  },
);
