import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* Brand Name */}
        <Link className="navbar-brand" to="#">{props.title}</Link>

        {/* Toggle Button for Mobile View */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items and Dark Mode Toggle */}
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav my-auto">
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/">Home</Link> 
              {/* <a className="nav-link mx-2" href="#">Home</a> */}

            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/about">{props.aboutText}</Link>
            </li> 
          </ul>

          {/* Right Side - Dark Mode Toggle */}
          <div className="d-flex">
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input 
                className="form-check-input" 
                onClick={props.toggleMode} 
                type="checkbox" 
                role="switch" 
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
