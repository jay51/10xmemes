import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

import PostHeader from './PostHeader';
import PostBottomActions from './PostBottomActions';
import PostLikes from './PostLikes';
import PostDescription from './PostDescription';
import PostComments from './PostComments';
import PostPublishDate from './PostPublishDate';

const post = {
  username: 'ozaferayan',
  imgUrl: 'https://picsum.photos/512',
  likeCount: 103,
  commentCount: 42,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  publishedAt: '2019-11-24T17:28:31.123Z',
}

const Post = ({item}) => {
  return (
    <React.Fragment>
      <PostHeader post={post} author={item.author} />
      <Image source={{ uri: item.url }} style={styles.postImg} />
      <View style={styles.postBottomContainer}>
        <PostBottomActions post={post}/>
        <PostLikes ups={item.ups}/>
        <PostDescription post={post}/>
        <PostComments post={post}/>
        <PostPublishDate post={post}/>
      </View>
    </React.Fragment>
  );
};


const styles = StyleSheet.create({
  postImg: { 
    height: 400, 
  },
  postBottomContainer: { 
    paddingStart: 20, 
    paddingEnd: 20, 
    paddingTop: 15, 
  },
});

export default Post;
