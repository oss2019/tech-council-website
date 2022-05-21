import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-scroll';
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
    paddingLeft:'26vh',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
     
      <AppBar >
      <div className='navbar'>
        <Toolbar >
        <IconButton edge="start" className={classes.menuButton}  aria-label="menu">
            </IconButton>
            <Typography variant="h4" className={classes.title}>
            </Typography>
          <Button color="inherit" paddingLeft='12vh'  className={classes.title}>
            <Link to="main" spy={true} smooth={true} offset={50} duration={500}>
              Home 
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="resources" spy={true} smooth={true} duration={500}>
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