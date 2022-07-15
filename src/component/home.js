import React from 'react';
import ButtonAppBar from './buttonAppBar';
import Main from './main';
import Clubs from './clubs/club.js';
import Contactus from './contactus';
import Club_recruitment from './club_recruitment'
import Team from './team';
import Events from './events';
import { ThemeProvider } from '@material-ui/core/styles';
import FooterIconsDemo from './FooterIconsDemo.jsx';



function Home() {
  
  return (
    <div>
    
      
        <ButtonAppBar />
        <Club_recruitment />
        <Clubs />
        <Events/>
        <Team/>
    </div>
  );
}

export default Home