import Header from  './Header.jsx'
import Footer from  './Footer.jsx'
import Hero from './Hero.jsx'
import Specials from './Specials.jsx'
import './app.css'
import Testimonials from './Testimonials.jsx'
import About from './About.jsx'
import React from 'react';
import {browserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import BooingPage from './BookingPage.jsx'

export function App() {


  return (
    <>
      <Header />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />  
    </>
  )
}

export default App;