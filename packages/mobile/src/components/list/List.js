import React from 'react'
import { FlatList, Text } from 'react-native'

export default List = ({ collection }) => (
  <FlatList data={collection} renderItem={({item}) => <Text key={item.id.videoId}>{item.snippet.title}</Text>} />
)