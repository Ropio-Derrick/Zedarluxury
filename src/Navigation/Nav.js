import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div className="Main-nav">
        <div className="Left">
          <div className="Logo" />
          <h1 className="Label" >Jijenge</h1>
        </div>
        <div className="Right ">
          <div className="Lister">
            <a className="Page">Services</a>
            <a className="Page">Partners</a>
            <a className="Page">About Us</a>
          </div>
          <button className="Join-btn">Join Us</button>
        </div>
    </div>
  )
}

export default Nav