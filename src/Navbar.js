import React from 'react'
//import  propTypes  from 'prop-types'
export default function Navbar() {
  return (
    
        <nav className="navbar navbar-expand-lg  " >
  <div className="navbar navbar-dark">
    <a className="navbar-brand" href="/" 
>logo</a>


    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav">


        <li className="nav-item">
          <a className="nav-link active"  aria-current="page" href="/" style={{color: 'white'}} 
>HOME</a>
         </li>


        <li className="nav-item">
          <a className="nav-link" href="/" 
>ABOUT US</a>
        </li>


        <li className="nav-item">
          <a className="nav-link" href="/" 
>CLUBS</a>
        </li>


        <li className="nav-item">
          <a className="nav-link" href="/" 
>CONTACT US</a>
        </li>

        
      
      </ul>
      
    </div>
  </div>
</nav>
     
  )
}
