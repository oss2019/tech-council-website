import React from 'react';
import ButtonAppBar from './buttonAppBar';
import Main from './main';
import Clubs from './clubs/club.js';
import Contactus from './contactus';
import Team from './team';
import Events from './events';
import mediaQuery from 'css-mediaquery';
import { ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';



function Home() {
  
  return (
    <div>
    
      
        <ButtonAppBar />
        <Main />
        <Clubs />
        <Events/>
        <Team/>
        <Contactus/>
    </div>
  );
}

export default Home