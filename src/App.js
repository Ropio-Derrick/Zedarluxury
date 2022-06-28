import React from 'react'
import "./App.css"
import Nav from './Navigation/Nav'
import Home from './Home/Home'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
        <Nav/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default App