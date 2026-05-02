import React from 'react';
import Hero from './hero';
import Brokerage from './Brokerage';
import Navbar from '../Navbar';
import Footer from '../footer';
import OpenAccount from '../OpenAccount';
function Pricing(){
    return (
    <>
     <Navbar/>
      <Hero/>
      <OpenAccount/>
      <Brokerage/>
     <Footer/>

    </>
    )
}

export default Pricing;