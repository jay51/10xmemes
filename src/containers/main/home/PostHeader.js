import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import colors from 'res/colors';
import images from 'res/images';

const PostHeader = ({ post, author }) => {
  return <View style={styles.container}>
    <View style={styles.nameContainer}>
      <Image source={images.zafer} style={styles.personImage} />
      <Text style={styles.personName}>{author}</Text>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingStart: 20,
    paddingEnd: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  personImage: {
    width: 25, 
    height: 25, 
    borderRadius: 25,
  },
  personName: { 
    color: colors.text, 
    marginStart: 10, 
    fontWeight: 'bold' 
  }
});

export default PostHeader;
