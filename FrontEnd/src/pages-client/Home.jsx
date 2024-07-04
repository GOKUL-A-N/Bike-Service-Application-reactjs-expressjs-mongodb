import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <AboutUs />
        <Footer />
    </div>
  )
}

export default Home