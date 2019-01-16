import React from 'react'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import listStyle from './List.style'

const List = ({ collection, classes }) => (
  <div>
    <Typography gutterBottom variant="h4" component="h4">Youtube Videos</Typography>
    
    <section className={classes.wrapper}>
      {collection.map(item => (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={item.snippet.thumbnails.high.url} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">{ item.snippet.title }</Typography>
              <Typography component="p">{ item.snippet.description }</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </section>
  </div>
)

export default withStyles(listStyle)(List);
