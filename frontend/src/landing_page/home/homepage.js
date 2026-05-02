import React from 'react';
import Hero  from './hero';
import Awards from './Awards';
import Stats from './stats';
import Education from './education';
import Pricing from './pricing';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../footer';


function Homepage(){
   return(
   <>

        <Navbar/>
       <Hero/>
       <Awards/>
       <Stats/>
      <Pricing/>
      <Education/>


      <OpenAccount/>
            <Footer/>

</>
);
}

export default Homepage;

