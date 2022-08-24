import React from 'react';
import Clubs from './clubs/SamyClub.js';
import Club_recruitment from './club_recruitment';
import Carousel_main from './carousel/carousel_main';
import ButtonAppBar from './buttonAppBar.js';
function Home() {
  
  return (
    <div className="overlay-none">
        <ButtonAppBar/>
        <Club_recruitment />
        <Clubs />
        <Carousel_main />
    </div>
  );
}

export default Home