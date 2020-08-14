import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ProfileNavigator from './profile/ProfileNavigator';
import HomeNavigator from './home/HomeNavigator';
import AddPostNavigator from './addPost/AddPostNavigator';
import ActivityNavigator from './activity/ActivityNavigator';

import colors from 'res/colors';
import palette from 'res/palette';
import images from 'res/images';

const routeConfig = {
  Home: HomeNavigator,
  AddPost: AddPostNavigator,
  Activity: ActivityNavigator,
  Profile: ProfileNavigator,
};

const navigatorConfig = {
  initialRouteName: "Home",
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      keyboardHidesTabBar: true,
      style: { backgroundColor: colors.tabBackground },
    },
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state;
      var icon;
      switch (routeName) {
        case 'Home': icon = focused ? images.home_selected : images.home; break;
        case 'AddPost': icon = focused ? images.add_selected : images.add; break;
        case 'Activity': icon = focused ? images.activity_selected : images.activity; break;
        case 'Profile': icon = focused ? images.profile_selected : images.profile; break;
        default: icon = focused ? images.home_selected : images.home; break;
      }
      return <Image style={{...palette.header.image}} source={icon} />
    }
  })
}

export default TabNavigator = createBottomTabNavigator(routeConfig, navigatorConfig);
