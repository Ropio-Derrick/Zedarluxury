import React from 'react'
import './Nav.css'
import { MiscellaneousServicesSharp,HandshakeTwoTone, InfoSharp } from '@mui/icons-material'

function Nav() {
  return (
    <div className="Main-nav">
        <div className="Left">
          <div className="Logo" />
          <h1 className="Label" >Jijenge</h1>
        </div>
        <div className="Right ">
          <div className="Lister">
            <a className="Page"> <MiscellaneousServicesSharp className="Page-Icon" /> Services</a>
            <a className="Page"> <HandshakeTwoTone className="Page-Icon" /> Partners</a>
            <a className="Page"> <InfoSharp  className="Page-Icon" /> About Us</a>
          </div>
          <button className="Join-btn">Join Us</button>
        </div>
    </div>
  )
}

export default Nav