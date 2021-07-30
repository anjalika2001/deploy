import React, { Component } from "react";

class Header extends Component
{
    render()
    {
        return(
          
  <div className="cover-container d-flex h-100  mx-auto flex-column">
  <div className="d-flex justify-content-center flex-column flex-md-row align-items-center p-1 px-md-4 mb-3 bg-white border-bottom box-shadow">

        <img src="images/logo.png" className="bi me-2" style={{width:"60px", height:"60px"}}></img>
      
<h1>  <strong className="nav-link text-dark">SCP</strong></h1>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mx-4">
      <li className="nav-item active mx-4 ">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link" href="#">Pages</a>
      </li>
    </ul>
     
    <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search"></input> 
  </div>
  
  <button className="btn btn-outline-primary mx-3 " type="submit">Sign Up</button>
</nav>
</div>
</div>


        );
    }
}

export default Header;


