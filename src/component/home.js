import React from 'react';
import ButtonAppBar from './buttonAppBar';
import Main from './main';
import Resources from './resources';
import Contactus from './contactus';
import Team from './team';
import Events from './events';
function Home() {
  return (
    <div>
        <ButtonAppBar />
        <Main />
        <Resources />
        <Events/>
        <Team/>
        <Contactus/>
        
    </div>
  )
}

export default Home