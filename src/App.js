import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Services/Services'
import Intro from './Intro/Intro'
export default function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Services/>
    </div>
  )
}
