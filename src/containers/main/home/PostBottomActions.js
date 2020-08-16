import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import colors from 'res/colors';
import images from 'res/images';

const PostBottomActions = ({ post }) => {
  const [isLike, toggleLike] = useState(false)

  return <View style={styles.container}>
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleLike(!isLike) }>
        <Image source={isLike ? images.like_selected:images.like} style={{ ...styles.icon, marginLeft: 0 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('add commnet')}>
        <Image source={images.comment} style={styles.icon} />
      </TouchableOpacity>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 15
  },

});

export default PostBottomActions;
