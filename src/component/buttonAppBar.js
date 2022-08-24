import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { Link } from 'react-scroll'

import './css/style.css';
//function for the header of the main page
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 6,
    position: "relative",
    top : 0,

  },
  menuButton: {
    paddingRight:'12vh',
    marginRight: theme.spacing(10),
  },
  title: {

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    
    <div className={classes.root} style={{paddingLeft:"10vh"}}>
     
      <AppBar >
      <div className='navbar'>
        <Toolbar >
        <IconButton edge="start" className={classes.menuButton}  aria-label="menu">
            </IconButton>
            <Typography variant="h4" className={classes.title}>
            </Typography>
          <Button color="inherit"   className={classes.title}>
            <Link to="club_recruitment" spy={true} smooth={true} offset={50} duration={500}>
            Club_recruitment
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="club" spy={true} smooth={true} duration={500}>
              Resources
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="events" spy={true} smooth={true} duration={500}>
              Events
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="team" spy={true} smooth={true} duration={500}>
              Teams
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact Us
            </Link>
          </Button>
        </Toolbar>
      </div>

      </AppBar>
    </div>
  );
}