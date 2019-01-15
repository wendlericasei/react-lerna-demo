import React, { Component } from 'react'
import List from '../../components/List'
import { getVideos } from 'shared/Videos'

class Home extends Component {
  state = {
    videos: []
  }

  componentDidMount() {
    getVideos().then(videos => this.setState({ videos }))
  }

  render() {
    const { videos } = this.state

    return (
      <List collection={videos} />
    )
  }
}

export default Home