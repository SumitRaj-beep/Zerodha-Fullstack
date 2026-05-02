import React from 'react';

import {Routes,Route} from "react-router-dom";
import Summary from "./Summary";
import WatchList from "./WatchList";
import Apps from  "./App";
import Holdings from "./Holdings";
import Funds from "./Funds";
import Orders from "./Orders";
import Positions from "./Positions"


const Dashboard=()=>{

return (

  <div className='dashboard-container'>
     <WatchList />
  <div className='content'>
      <Routes>
       <Route path='/' element={<Summary/>}/>
       <Route path='/orders' element={<Orders/>}/>
       <Route path='/holdings' element={<Holdings/>}/>
       <Route path ='/positions' element={<Positions/>}/>
       <Route path='/apps' element={<Apps/>}/>
       <Route path='/funds' element ={<Funds/>}/>
    
      </Routes>


  </div>
  
  </div>


);

    
};







export default Dashboard;