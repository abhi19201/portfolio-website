import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {  makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    root: {
      backgroundColor: "#1c0000",
backgroundImage: `url(${"https://www.transparenttextures.com/patterns/scribble-light.png"})`,
      boxShadow: "0 0 10px 0 rgba(0, 0, 0, 1)",
      },

    header: {
      backgroundColor: "#1c0000",
      backgroundImage: `url(${"https://www.transparenttextures.com/patterns/scribble-light.png"})`,
      padding: "1% 1% 1% 1%", 
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
        height: "10.3%",
        position: "inline",
    },

    
  
  title: {
    fontWeight: "bold",
    fontSize: "26px"
  },

  fap: {

    paddingTop: "6.8%",
    paddingLeft: "83%",

  }
}));

function Header(){
    const classes = useStyles();

    return (
        <div >
        <AppBar className={classes.header}>
        <Toolbar position="static" className={classes.root} >
          <h1 className={classes.title} variant="h6">
            Polling Web App
          </h1>
        </Toolbar>
        
      </AppBar>
        </div>
        
    );
}


export default Header;