import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Typography, InputBase, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import List from '../../components/List'
import { getVideos } from 'shared/Videos'
import homeStyle from './Home.style'

import { Doughnut } from 'react-chartjs'
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

    const chartData = [
      {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
      },
      {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
      },
      {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
      }
    ]

    const chartOptions = {
      //Boolean - Whether we should show a stroke on each segment
      segmentShowStroke : true,
    
      //String - The colour of each segment stroke
      segmentStrokeColor : "#fff",
    
      //Number - The width of each segment stroke
      segmentStrokeWidth : 2,
    
      //Number - The percentage of the chart that we cut out of the middle
      percentageInnerCutout : 50, // This is 0 for Pie charts
    
      //Number - Amount of animation steps
      animationSteps : 100,
    
      //String - Animation easing effect
      animationEasing : "easeOutBounce",
    
      //Boolean - Whether we animate the rotation of the Doughnut
      animateRotate : true,
    
      //Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale : false,
  
      //String - A legend template
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"
    }

    return (
      <section className={classes.root}>
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
        
        <Doughnut data={chartData} options={chartOptions} width="600" height="250" />

        <List collection={videos} />
      </section>
    )
  }
}

const styles = theme => ({ ...homeStyle(theme) })

export default withStyles(styles)(Home)