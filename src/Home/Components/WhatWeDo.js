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
          <StackedBarChartRounded className="Block-Icon" />
          <div className="Block-closer">
            <h1 className="Block-Head">Lorem ipsum</h1>
            <p className="Block-Text">
              Module build failed (from ./node_modules/babel-loader
            </p> 
          </div>
       
        </div>  
        <div className="Block-Box">
          <FastfoodOutlined  className="Block-Icon" />
          <div className="Block-closer">
            <h1 className="Block-Head">Lorem ipsum</h1>
            <p className="Block-Text">
              Module build failed (from ./node_modules/babel-loader/
            </p> 
          </div>
       
        </div> 
        <div className="Block-Box">
          < FmdGoodOutlined className="Block-Icon" />
          <div className="Block-closer">
            <h1 className="Block-Head">Lorem ipsum</h1>
            <p className="Block-Text">
              Module build failed (from ./node_modules/babel-loader/
            </p> 
          </div>
       
        </div>  

      </div>
      
    </div>
  )
}

export default WhatWeDo