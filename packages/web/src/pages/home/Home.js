import React, { Component, Fragment } from 'react'
import List from '../../components/List'
import { getVideos } from 'shared/Videos'

import { AppBar, Toolbar, IconButton, Typography, InputBase, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import homeStyle from './Home.style'

class Home extends Component {
  state = {
    videos: []
  }

  componentDidMount() {
    getVideos().then(videos => this.setState({ videos }))
  }

  render() {
    const { videos } = this.state
    const { classes } = this.props

    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Youtube list videos
            </Typography>
            
            <div className={classes.grow} />
            
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <List collection={videos} />
      </Fragment>
    )
  }
}

const styles = theme => ({...homeStyle(theme)})

export default withStyles(styles)(Home)