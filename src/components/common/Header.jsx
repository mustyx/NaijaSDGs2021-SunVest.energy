import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Star} from "../../components/assets/star.svg";

function Header() {
  return (
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid " id="navbard">
    <Link className="navbar-brand" to="/">
     <Star/> SunVest.Energy
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/how">
           How It Works
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/market" className="nav-link" >
            Solar Project
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact Us
          </Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/login">
           Login
          </Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>)
;
}

export default Header;
