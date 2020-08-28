import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

import Post from './Post';
import colors from 'res/colors';
import * as Actions from 'actions';
import { connect } from 'react-redux';



class HomeScreen extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.dispatch({type: Actions.GET_POSTS})
    }

  render(){
      const {memes} = this.props.posts;
      return (
        <FlatList
          style={{backgroundColor: colors.background }}
          data={memes}
          renderItem={Post}
        />
      );
    }
}


const mapDispatchToProps = { };
const mapStateToProps = (state) => {
  return {posts: state.posts};
}


export default connect(mapStateToProps)(HomeScreen);
