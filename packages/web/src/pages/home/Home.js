import React, { Component } from 'react'
import List from '../../components/List'
import { getStarships } from 'shared/Starships'

class Home extends Component {
  state = {
    starships: []
  }

  componentDidMount() {
    getStarships().then(res => {
      this.setState({ starships: res })
    })
  }

  render() {
    const { starships } = this.state

    return (
      <List collection={starships} />
    )
  }
}

export default Home