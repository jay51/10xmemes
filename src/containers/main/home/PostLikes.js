import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
} from 'react-native';
import colors from 'res/colors';
import StoryListItem from 'components/StoryListItem';
import images from 'res/images';
import { TouchableOpacity } from 'react-native-gesture-handler';
import I18n from 'utils/I18n';

const PostLikes = ({ups}) => {
  return <TouchableOpacity style={styles.container} onPress={() => console.log('test')}>
    <Text style={styles.text}> {ups} </Text>
  </TouchableOpacity>
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  text: {
    color: colors.text,
    fontWeight: 'bold'
  },

});

export default PostLikes;
