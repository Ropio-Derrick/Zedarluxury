import React from 'react'
import './LandingPage.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function LandingPage() {
  return (
    <div className="Main-Land">
        <div className="Right-Land">
            <h1 className="Starter">Together With You</h1>
            <h1 className="Bolder">Bring <span>Success</span> 
            <br/>At Your Door <span>Step</span></h1>
            <p className="Explainer">We give you the resources that you need<br/>
            to make and build your business with.
            </p>

            <div className="crosser">
                <a className="read">Read More</a>
                <div className='circle'>
                  <ArrowForwardIcon />
                </div>
            </div>

        </div>
        
        <div className="Left-Land">
          <div className="Image-Land"/>
        </div>
    </div>
  )
}

export default LandingPage