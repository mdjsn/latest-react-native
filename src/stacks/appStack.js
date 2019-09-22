import * as React from 'react';

// packages
import {createBottomTabNavigator} from 'react-navigation-tabs';

// imports
import Boiler from '../../screens/boiler';
import {TABS} from './routeKeys';

// styles
import Icon from 'react-native-vector-icons/FontAwesome';

const tabBarIcon = name => ({tintColor}) => (
  <Icon name={name} size={20} color={tintColor} />
);

class Discover extends React.Component {
  static navigationOptions = screenProps => ({
    tabBarLabel: 'Discover',
    tabBarIcon: tabBarIcon('rocket'),
    header: null,
    headerBackTitle: null,
    tabBarVisible: screenProps.navigation.getParam('visibility'),
  });

  render() {
    return <Boiler navigation={this.props.navigation} />;
  }
}

class Match extends React.Component {
  static navigationOptions = screenProps => ({
    tabBarLabel: 'Match',
    tabBarIcon: tabBarIcon('calendar'),
    header: null,
    headerBackTitle: null,
    tabBarVisible: screenProps.navigation.getParam('visibility'),
  });

  render() {
    return <Boiler navigation={this.props.navigation} />;
  }
}

class Search extends React.Component {
  static navigationOptions = screenProps => ({
    tabBarLabel: 'Search',
    tabBarIcon: tabBarIcon('search'),
    header: null,
    headerBackTitle: null,
    tabBarVisible: screenProps.navigation.getParam('visibility'),
  });

  render() {
    return <Boiler navigation={this.props.navigation} />;
  }
}

class Settings extends React.Component {
  static navigationOptions = screenProps => ({
    tabBarLabel: 'Settings',
    tabBarIcon: tabBarIcon('cog'),
    header: null,
    headerBackTitle: null,
    tabBarVisible: screenProps.navigation.getParam('visibility'),
  });

  render() {
    return <Boiler />;
  }
}

export const AppStack = createBottomTabNavigator(
  {
    [TABS.Discover]: Discover,
    [TABS.Match]: Match,
    [TABS.Search]: Search,
    [TABS.Settings]: Settings,
  },
  {
    navigationOptions: ({navigation}) => {
      const showTabBar =
        navigation.state &&
        navigation.state.params &&
        navigation.state.params.visibility
          ? navigation.state.params.visibility
          : true;
      return {tabBarVisible: showTabBar};
    },
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#8183a5',
      showLabel: true,
      style: {
        backgroundColor: '#42446f',
      },
    },
  },
);
