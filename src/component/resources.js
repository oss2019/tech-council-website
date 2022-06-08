import React,  {  Component  } from 'react';
import './css/resources.css';
import Coding from './Logo4x.png';
import Insolvent from './Insolvent.png';
import AI from './AI Club.png';
import Cosmosoc from './cosmosoc_logo.jpg';
import Robotics from './RoboticsClubLogo_Original.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import mediaQuery from 'css-mediaquery';


//edit this function to make changes for club webpage

function Resources() {
  const ssrMatchMedia = (query) => ({
    matches: mediaQuery.match(query, {
      // The estimated CSS width of the browser.
      width: 800,
    }),
  });
  
  return (
  <div>
  <div className='resources'id='resources'>
    <div className='box' >
    <h2 className='club' style={{paddingRight:'6rem'}}>Clubs</h2>
    <h2 className='organizer' style={{paddingRight:'4rem'}}>Organizer</h2>
    <div >
    <ul className="panels">
      <li>
        <div className="front">
       
          <img src={Coding} className='article' style={{ width: 120, height: 120, borderRadius:'20rem' }} alt="Coding Club Logo"/>
          <p style={{paddingLeft:'2rem', position:'absolute'}}>Coding Club</p>
          
          </div>
        <div className="back">
          
         
          
          <p className="coding">The official coding club of IITDh</p>
        </div>
      </li>
      <li>
        <div className="front">
          <img src={Cosmosoc}  style={{ width: 120, height: 120, borderRadius:'5rem' }} alt="Cmosmosoc Club Logo"/>
          <p style={{paddingLeft:'2rem', position:'absolute'}}> Cosmosoc club</p>
          </div>
        <div className="back">
         
          <p>Official Page for Data Science Club of IITDh</p>
        </div>
        
        
      </li>
      <li>
        <div className="front" >
          <img src={AI}  style={{ width: 120, height: 120 , borderRadius:'5rem'}} alt="Coding Club Logo"/>
          <p style={{paddingLeft:'4.8rem', position:'absolute'}}> AI Club</p>
          </div>
        <div className="back">
          
          <p>Official Page for Artificial Intelligence Club of IITDh</p>
          </div>
      </li>
      <li>
        <div className="front">
          <img src={Robotics}  style={{ width: 120, height: 120 , borderRadius:'20rem'}} alt="Coding Club Logo"/>
          <p style={{paddingLeft:'2rem', position:'absolute'}}> Robotics Club</p>
          </div>
        <div className="back">
          <p>Official Page for Robotics Club of IITDh</p>
        </div>
        
      </li>
      <li >
        <div className="front"><img src={Insolvent} style={{ width: 120, height: 120, borderRadius:'20rem' }} alt="Coding Club Logo"/>
        <p style={{paddingLeft:'2rem', position:'absolute'}}>Insolvent Club </p>
        </div>
        <div className="back">
          
          <p>Official Page for Finance Club of IITDh</p>
          </div>
        

      </li>

      
      <li className='organizer'>
        <div className="organizer" className="front" ><img src={Insolvent} style={{ width: 120, height: 120, borderRadius:'20rem' }} alt="Coding Club Logo"/>
        <p  style={{paddingLeft:'5.5rem', position:'absolute'}}>OSS</p>
        </div>
        <div className="back">
          The official site for the Open Source Society
        </div>
        

      </li>
      </ul>
     </div>
  </div>
  </div>
  </div>
  )
}

export default Resources