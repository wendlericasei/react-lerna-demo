import React from 'react'
import { FlatList } from 'react-native'

import { Button, Card, Title, Paragraph } from 'react-native-paper';

export default List = ({ collection }) => (
  <FlatList data={collection} keyExtractor={(item, index) => item.snippet.title} renderItem={({ item }) => (
    <Card style={{ marginBottom: 16 }}>
      <Card.Cover source={{ uri: item.snippet.thumbnails.high.url }} />
      <Card.Content>
        <Title>{ item.snippet.title }</Title>
        <Paragraph>{ item.snippet.description }</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>SHARE</Button>
        <Button>LEARN MORE</Button>
      </Card.Actions>
    </Card>
  )} />
)