import React from 'react';
import Menu from './Menu';

const TopBar=()=>{
   return (


<div className='container'>
    <div  className='helo'>
    <div className='container nifty-50'>
       NIFTY-50
    </div>
    <div className='index-points'>{100.2}</div>
    </div>
    <div className='helo2 ' >

    
     <div className='container sensex'>
       SENSEX
        </div>
        <div className='index-points'>{100.2}</div>
        </div>
       <div className='menudiv'>  
         <Menu/> 
        
      </div>

   
       
</div>
  

   );

}
export default TopBar;