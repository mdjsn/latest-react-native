// packages
import {createStackNavigator} from 'react-navigation-stack';

// imports
import Auth from '../containers/auth';
import {AuthRouteKeys} from '../config/routeKeys';

export const AuthStack = createStackNavigator(
  {
    [AuthRouteKeys.Auth]: Auth,
  },
  {
    headerMode: 'none',
    initialRouteName: AuthRouteKeys.Auth,
  },
);
