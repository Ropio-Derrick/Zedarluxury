import React from 'react'
import './WhatWeDo.css'
import { Help } from '@mui/icons-material'

function WhatWeDo() {
  return (
    <div className="Block-Main">
      <h1 className="Block-Main-Text">
        What We Do
      </h1>

      <div className="Block-House">
        <div className="Block-Box">
          <Help className="Block-Icon" />
          <h1 className="Block-Head">Lorem ipsum</h1>
          <p className="Block-Text">
            Module build failed (from ./node_modules/babel-loader/lib/index.js):
            SyntaxError: 
          </p> 
        </div>    
        <div className="Block-Box">
          <Help className="Block-Icon"/>
          <h1 className="Block-Head">Lorem ipsum</h1>
          <p className="Block-Text">
            Module build failed (from ./node_modules/babel-loader/lib/index.js):
            SyntaxError: 
          </p> 
        </div>
        <div className="Block-Box">
          <Help className="Block-Icon"/>
          <h1 className="Block-Head">Lorem ipsum</h1>
          <p className="Block-Text">
            Module build failed (from ./node_modules/babel-loader/lib/index.js):
            SyntaxError: 
          </p> 
        </div>  

      </div>
      
    </div>
  )
}

export default WhatWeDo