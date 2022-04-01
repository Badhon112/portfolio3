import React from 'react'
import "./App.css"
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience'
import Navbar from './Components/Navbar/Navbar'
// import Portfolio from './Components/Portfolio/Portfolio'
import Portfolio2 from './Components/Portfolio2/Portfolio2'
import Services from './Components/Services/Services'
import Testimonial from './Components/Testimonial/Testimonial'
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
      {/* <Portfolio/> */}
      <Portfolio2/>
      <Testimonial/>
      <Contact/>
      </div>

    </div>
  )
}
