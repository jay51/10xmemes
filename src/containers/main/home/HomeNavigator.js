import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import images from 'res/images';
import palette from 'res/palette';
import HomeScreen from './HomeScreen';


const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      ...palette.header,
      headerLeft: () => (
        <View style={styles.headerLeftContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Main', { transition: 'toLeft' })}>
            <Image style={styles.headerLeftImage} source={images.photo_camera} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Image style={styles.headerLogo} source={images.logo} />
          </TouchableOpacity>
        </View>
      )
    })
  }
});

const styles = StyleSheet.create({
  headerLeftContainer: { ...palette.header.headerLeftContainer },
  headerLeftImage: {...palette.header.image},
  headerLogo: { marginLeft: 10, height: 30, width: 80, resizeMode: 'center' },
});

export default HomeNavigator;
