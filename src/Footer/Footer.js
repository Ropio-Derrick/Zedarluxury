import React from 'react'
import { LocationCityOutlined,Home, MessageOutlined,Call,Instagram,Facebook,LinkedIn,Twitter } from '@mui/icons-material'

import './Footer.css'

function Footer() {


  return (
    <div className="Footer-Main">
      <div className="Footer-House">
        <div className="Footer-Info">
          <h1>jijenge</h1>
          <p>There <span>For You</span> </p>
        </div>
        <ul className="Footer-Lister">
          <h1>Menu</h1>
          <a>Home</a>
          <a>Services</a>
          <a>Partners</a>
          <a>Our info</a>
          <a>Clients</a>
        </ul>
        <ul className="Footer-Lister">
          <h1>For You</h1>
          <a>Home</a>
          <a>Services</a>
          <a>Partners</a>
          <a>Our info</a>
          <a>Clients</a>
        </ul>
        <div className="locator">
          <h1 className="Footer-Head">Contact Us </h1>
          <h1 className="Footer-line"><Call  className="Hover-Icon4" />: 0768047900  </h1>
          <h1 className="Footer-line"> <LocationCityOutlined  className="Hover-Icon4" /> Buruburu 1</h1>
          <div className="Footer-Icons">
                    <a href="#"><LinkedIn className="Hover-Icon3"/></a>
                    <a href="#"><Facebook className="Hover-Icon3"/></a>
                    <a href="#"><Twitter className="Hover-Icon3"/></a>
                    <a href="#"><Instagram className="Hover-Icon3"/></a>
                </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer