import React from 'react'

export default ({ collection }) => (
  <div>
    <h2>Youtube Videos</h2>
    <ul>
      {collection.map(item => (
        <li key={item.id.videoId}>{item.snippet.title}</li>
      ))}
    </ul>
  </div>
)