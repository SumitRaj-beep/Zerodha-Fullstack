import React from 'react';

function Hero(){
     return  ( <>
     <div className='container-fluid' style={{backgroundColor:"skyblue"}}>
     <div className='container p-5' >

    
     <div className='row'>
          <div className='col'>
               <h6>
                    Support Portal
               </h6>
          </div>
          <div className='col'>
                  <h6>
               Track Tickets
               </h6>
          </div>
     </div>
 </div>

   <div className='container p-5 '>
       <div className='row' >
          <div className='col'>
            <h4>Search for an answer and or browse help topics to create  a ticket </h4>
            <input className='input'></input>
            <p>
               <a href=''>
             Track Account Opening 
             </a></p> 
              <p>
                <a href=''>Track segment activation </a></p>
              <p><a href=''>Intraday</a></p>
             <p><a href=''>margins </a></p>
              <p> <a href=''> Kite user manual </a> </p>

          </div>
          <div className='col'>
                <h4> Featured</h4> 
                <div >
                <a href=''>1. Current Listing and Delisting</a>
                <br></br>
                <a href=''>2. Latest intraday leverages</a>
                </div>
           </div>
       </div>
   </div>
</div>
     </>
     );
}

export default Hero ;