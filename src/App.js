import React from 'react'
import "./App.css"
import Experience from './Components/Experience/Experience'
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio/Portfolio'
import Services from './Components/Services/Services'
import Work from './Components/Work/Work'
import Intro from './Intro/Intro'
export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='con'>
      <Intro />
      <Services />
      <Experience/>
      <Work/>
      <Portfolio/>
      </div>

    </div>
  )
}
