import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import List from '../../components/list/List';
import { getVideos } from 'shared/Videos'

export default class Home extends Component {
  state = {
    videos: []
  }

  componentDidMount() {
    getVideos().then(videos => this.setState({ videos }))
  }

  render() {
    const { videos } = this.state

    return (
      <View style={styles.container}>
        <List collection={videos} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});