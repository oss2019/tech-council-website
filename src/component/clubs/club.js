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
<div className='resources1'>
<div className='box1' >
    <h2 className='club1'>IITDh Clubs</h2>
    <p/>
    <ul className="panels">
      <li className="sadock">
        <div className="front">
           
          <div className="moinub">
          <img src={Coding} className='article' style={{ width: 80, height: 80, borderRadius:'5rem',}} alt="Coding Club Logo"/>
          <p >{Club[0].Name}</p>
          </div>
          
          </div>
        <div className="back">
          <p className="coding">{Club[0].desc}</p>
        </div>
      </li>
      <li className="sadock">
        <div className="front">
          <img src={Cosmosoc}  style={{ width: 80, height: 80, borderRadius:'20rem' }} alt="Cmosmosoc Club Logo"/>
          <p> {Club[1].Name}</p>
          </div>
        <div className="back">
         
          <p>{Club[1].desc}</p>
        </div>
        
        
      </li>
      <li className="sadock">
        <div className="front" >
          <img src={AI}  style={{ width: 80, height: 80 , borderRadius:'20rem'}} alt="Artificial Intelligence Logo"/>
          <p> {Club[2].Name}</p>
          </div>
        <div className="back">
          
          <p>{Club[2].desc}</p>
          </div>
      </li>
      <li className="sadock">
        <div className="front">
          <img src={Robotics}  style={{ width: 80, height: 80 , borderRadius:'20rem'}} alt="Robotics Logo"/>
          <p>{Club[3].Name}</p>
          </div>
        <div className="back">
          <p>{Club[3].desc}</p>
        </div>
        
      </li>
      <li className="sadock">
        <div className="front">
          <img src={Insolvent} style={{ width: 80, height: 80, borderRadius:'5rem'}} alt="Finance Logo"/>
        <p>{Club[4].Name}</p>
        </div>
        <div className="back">
          
          <p>{Club[4].desc}</p>
          </div>
      </li>
      </ul>
   <div>
      <h2 className='club1'>IITDh Organization</h2>
      <p/>
      <ul className="panels">
      <li className="none">
        <div className="front" >
          <img src={AI}  style={{ width: 120, height: 120 , borderRadius:'20rem'}} alt="Artificial Intelligence Logo"/>
          <p> {Club[2].Name}</p>
          </div>
        <div className="back">
          
          <p>{Club[2].desc}</p>
          </div>
      </li>
      <li className="none">
        <div className="front">
          <img src={Robotics}  style={{ width: 120, height: 120 , borderRadius:'20rem'}} alt="Robotics Logo"/>
          <p>{Club[3].Name}</p>
          </div>
        <div className="back">
          <p>{Club[3].desc}</p>
        </div>
        
      </li>
      <li className='sadock'>
        <div className="front" ><img src={OSS} style={{ width: 120, height: 80, borderRadius:'20rem' }} alt="OSS"/>
        <p>{Club[5].Name}</p>
        </div>
        <div className="back">
        {Club[5].desc}
        </div>
      </li>
      <li className="none">
        <div className="front">
          <img src={Insolvent} style={{ width: 120, height: 120, borderRadius:'5rem'}} alt="Finance Logo"/>
        <p>{Club[4].Name}</p>
        </div>
        <div className="back">
          
          <p>{Club[4].desc}</p>
          </div>
        

      </li>
      <li className="none">
        <div className="front" >
          <img src={AI}  style={{ width: 120, height: 120 , borderRadius:'20rem'}} alt="Artificial Intelligence Logo"/>
          <p> {Club[2].Name}</p>
          </div>
        <div className="back">
          
          <p>{Club[2].desc}</p>
          </div>
      </li>
      </ul>
     </div>
     <div className="none">
      <h2 className='club1'>IITDh Organization</h2>
      </div>
  </div>
</div>
  )
}

export default Clubs