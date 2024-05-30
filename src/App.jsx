import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Growing from './components/Growing';
import SuperPower from './components/SuperPower';
import Community from './components/Community';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Growing/>
      <SuperPower/>
      <Community/>
      <Footer/>
    </div>
  )
}

export default App
