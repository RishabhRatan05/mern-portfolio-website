import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/r.jpg'

const Navbar= ()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid ">
    <NavLink className="navbar-brand ms-5" to="/">
        <img src={logo} alt="logo" style={{width: "40px", height: "40px"}}/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signin">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">SignUp</NavLink>
        </li>
 
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;