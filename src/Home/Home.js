import React from 'react'
import './Components/Home.css'
import WhatWeDo from './Components/WhatWeDo'
import LandingPage from './Components/LandingPage'

function Home() {
  return (
    <div className='Home'>
        <LandingPage/>
        <WhatWeDo/>
    </div>
  )
}

export default Home