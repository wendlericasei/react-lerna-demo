import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const { collection } = this.props
      
    return (
      <div>
        <h2>LISTA DE NAVES STARWARS</h2>
        <ul>
          {collection.map(item => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}
