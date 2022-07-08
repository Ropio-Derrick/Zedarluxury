import React from 'react'
import "./App.css"
// import Hooks from './Learning hooks/Hooks'
import Nav from './Navigation/Nav'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import Hovered from './Home/Components/Hovered'

function App() {
  return (
    <div className="App">
        <Nav/>
        <Hovered/>
        <Home/>
        <Footer/>


    </div>
  )
}

export default App