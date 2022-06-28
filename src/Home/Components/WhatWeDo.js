import React from 'react'
import './WhatWeDo.css'
import { FmdGoodOutlined, StackedBarChartRounded, FastfoodOutlined } from '@mui/icons-material'

function WhatWeDo() {
  return (
    <div className="Block-Main">
      <h1 className="Block-Main-Text">
        What we <span>offer</span>
      </h1>

      <div className="Block-House">
        <div className="Block-Box">
            
          <span>
            <StackedBarChartRounded className="Block-Icon" />
            <h1 className="Block-Head">Lorem ipsum</h1>
          </span>
          <span className="Block-closer">
            <p className="Block-Text">
              Module build failed (from ./node_modules/babel-loader
            </p> 
          </span>
       
        </div>  
        <div className="Block-Box">
          <span>
          <FastfoodOutlined  className="Block-Icon" />
          <h1 className="Block-Head">Lorem ipsum</h1>
          </span>
          <span className="Block-closer">
            <p className="Block-Text">
              Module build failed (from ./node_modules/babel-loader
            </p> 
          </span>
       
        </div> 
        <div className="Block-Box">
          <span>
          < FmdGoodOutlined className="Block-Icon" />
          <h1 className="Block-Head">Lorem ipsum</h1>
          </span>
          <span className="Block-closer">
            <p className="Block-Text">
              Module build failed (from ./node_modules/babel-loader
            </p> 
          </span>
       
        </div> 

      </div>
      
    </div>
  )
}

export default WhatWeDo