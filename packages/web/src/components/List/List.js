import React from 'react'

export default ({ collection }) => (
  <div>
    <h2>LISTA DE NAVES STARWARS</h2>
    <ul>
      {collection.map(item => (
        <li key={item.id.videoId}>{item.snippet.title}</li>
      ))}
    </ul>
  </div>
)