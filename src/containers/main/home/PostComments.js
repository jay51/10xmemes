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

const PostComments = ({ post }) => {

  return <TouchableOpacity style={styles.container} onPress={() => console.log('test')}>
    <Text style={styles.text}>
      my comment. make it expand and contract or make a model for displaying comments
    </Text>
  </TouchableOpacity>
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5
  },
  text: {
    color: colors.textFaded2,
  }
});

export default PostComments;
