import React,  {  Component  } from 'react';
import './club.css';
import Coding from './Logo4x.png';
import Insolvent from './Insolvent.png';
import AI from './AI Club.png';
import Cosmosoc from './cosmosoc_logo.jpg';
import Robotics from './RoboticsClubLogo_Original.png';
import Club from './club.json';
import OSS from "./OSS.png";



//edit this function to make changes for club webpage

function Clubs() {
  
  return (
  <div>
  <div className='resources1'id='resources'>
    <div className='box1' >
    <h2 className='club1' style={{paddingRight:'6rem'}}>IITDh Clubs</h2>
    <h2 className='organizer-head' style={{paddingRight:'4rem'}}>IITDh Organization</h2>
    <div>
    <ul className="panels">
      <li>
        <div className="front">
           
          <img src={Coding} className='article' style={{ width: 120, height: 120, borderRadius:'5rem',}} alt="Coding Club Logo"/>
          <p >{Club[0].Name}</p>
          
          </div>
        <div className="back">
          <p className="coding">{Club[0].desc}</p>
        </div>
      </li>
      <li>
        <div className="front">
          <img src={Cosmosoc}  style={{ width: 120, height: 120, borderRadius:'20rem' }} alt="Cmosmosoc Club Logo"/>
          <p> {Club[1].Name}</p>
          </div>
        <div className="back">
         
          <p>{Club[1].desc}</p>
        </div>
        
        
      </li>
      <li>
        <div className="front" >
          <img src={AI}  style={{ width: 120, height: 120 , borderRadius:'20rem'}} alt="Artificial Intelligence Logo"/>
          <p> {Club[2].Name}</p>
          </div>
        <div className="back">
          
          <p>{Club[2].desc}</p>
          </div>
      </li>
      <li>
        <div className="front">
          <img src={Robotics}  style={{ width: 120, height: 120 , borderRadius:'20rem'}} alt="Robotics Logo"/>
          <p>{Club[3].Name}</p>
          </div>
        <div className="back">
          <p>{Club[3].desc}</p>
        </div>
        
      </li>
      <li>
        <div className="front">
          <img src={Insolvent} style={{ width: 120, height: 120, borderRadius:'5rem'}} alt="Finance Logo"/>
        <p>{Club[4].Name}</p>
        </div>
        <div className="back">
          
          <p>{Club[4].desc}</p>
          </div>
        

      </li>

      
      <li className='organizer-body'>
        <div className="organizer-body" className="front" ><img src={OSS} style={{ width: 120, height: 120, borderRadius:'20rem' }} alt="Coding Club Logo"/>
        <p>{Club[5].Name}</p>
        </div>
        <div className="back">
        {Club[5].desc}
        </div>
        

      </li>
      </ul>
     </div>
  </div>
  </div>
  </div>
  )
}

export default Clubs