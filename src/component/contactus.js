import React from 'react';
import {Typography} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './css/contactus.css';
import { LocationOn as LocationOnIcon, GitHub as GitHubIcon, Link as LinkIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    flexGrow: 1,
    bottom: 0,
    padding: '2rem 2rem',
    paddingTop: '43rem',
    paddingLeft:'15rem'
    
  },
  icons : {
    paddingLeft:'30rem',
    '& > svg': {
      
      margin: theme.spacing(1),
    },
    
  }
}));
//For the footer of the ContactUs page
function Contactus() {
  const classes = useStyles();
  
  return (
    <div className='contact'>
      
    <div className={classes.root}> 
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item sm={6} xs={12}>
        <Typography variant="h6" className={classes.style}>
          Copyright&copy; 2021
        </Typography>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Typography variant="h6" container justifyContent="space-between" className={classes.icons}>
          <GitHubIcon/>
          <LocationOnIcon/>
          <LinkIcon/>
        </Typography>
      </Grid>
      </Grid>
      </div>
      </div>
)}

export default Contactus