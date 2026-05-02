import React from 'react';
import Hero from './hero';
import Leftsection from './leftsection';
import Rightsection from './rightsection';
import Universe from './universe';
import Navbar from '../Navbar';
import Footer from '../footer';


function Productpage(){
  return (
  <>
     <Navbar/>
     <Hero/>
     <Leftsection 
        imageurl='/media/images/kite.png'
        productname='kite' 
        productdescription='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.'
        trydemo=''
        learnmore=''
        googleplay=''
        appstore=''
       />

      <Rightsection
       imageurl='/media/images/console.png'
       productname='Console'
       productdescription='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.'
       learnmore='Learn more'
      
      />
       <Leftsection 
        imageurl='/media/images/coin.png'
        productname='Coin' 
        productdescription='Our ultra fast flat trading platform with streaming market data ,advanced chart  and enhanced ui .Enjoy the Kite seamlessly on your andriod , ios and more.'
        trydemo=''
        
        googleplay=''
        appstore=''
       />
     <Rightsection
       imageurl='media/images/kiteconnect.png'
       productname=' Kite Connect API'
       productdescription='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'
       learnmore='Learnmore'

       />
      <Leftsection 
        imageurl='/media/images/varsity.png'
        productname='Varsity' 
        productdescription='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.'
        trydemo=''
        learnmore=''
        googleplay=''
        appstore=''
       />
     <Universe/>
      <Footer/>
  </>


  ) ;

}

export default Productpage;