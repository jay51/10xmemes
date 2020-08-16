import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

import Post from './Post';
import colors from 'res/colors';
import { connect } from 'react-redux';



const HomeScreen = (props) => {

  return (
    <FlatList
      style={styles.container}
      data={[
        { key: '3' },
        { key: '4' },
        { key: '5' },
      ]}
      renderItem={() => <Post />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});

const mapStateToProps = (state) => {
  return { };
}

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
