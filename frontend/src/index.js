import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage  from './landing_page/home/homepage';

import Signup  from './landing_page/signup/signup';
import Aboutpage from './landing_page/about/Aboutpage';
import Pricingpage from './landing_page/pricing/pricingpage';
import Productpage from './landing_page/products/productpage';
 import Supportpage from './landing_page/support/support';
 import Notfound from './landing_page/notfound';


 import axios from "axios";

// backend base URL
axios.defaults.baseURL = "http://localhost:3002";

// attach token if exists
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(

    
   
    
   <BrowserRouter>
   <Routes>
       <Route path="/" element={<Homepage/>}></Route>
       <Route path="/signup" element={<Signup/>}></Route>
       <Route path="/about" element={<Aboutpage/>}></Route>
       <Route path="/pricing" element={<Pricingpage/>}></Route>
       <Route path="/support" element={<Supportpage/>}></Route>
       <Route path="/products" element={<Productpage/>}></Route>
       <Route path="*" element={<Notfound/>}></Route>


    </Routes>
    </BrowserRouter>       
);     


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
