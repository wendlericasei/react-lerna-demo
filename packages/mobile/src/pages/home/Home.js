import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Appbar } from 'react-native-paper';

import List from '../../components/list/List';
import { getVideos } from 'shared/Videos'

import { VictoryPie } from "victory-native";


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
        <Appbar.Header>
          <Appbar.BackAction />
          <Appbar.Content title="Youtube list video" />
          <Appbar.Action icon="search" />
          <Appbar.Action icon="more-vert" />
        </Appbar.Header>

        <VictoryPie innerRadius={100} />

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