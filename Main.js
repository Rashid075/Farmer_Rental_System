import React from 'react'
import NavBar from './navBar';
import AboutUs from './aboutUs';
import Hero from './hero';
import Footer from './footer';
import Contact from './contacts';
import './main.css';

const HeroMain = () => {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <AboutUs/>
      <Contact/>
      <Footer/> 
    </div>
  );
}

export default HeroMain;