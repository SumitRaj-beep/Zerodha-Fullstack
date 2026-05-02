import React from 'react';

function Brokerage(){
   return <>
     <div className='container'>
     <div className='row'>
        <div className='col-8 p-5'>
         <h5  style={{textDecoration:"none"}}>
            Brokerage
         </h5>
         <ul style={{ textAlign:"left",lineheight:"2.5",fontSize:"12"}} className='text-muted'>
           <li> Call & Trade and RMS auto-squareoff:</li> 
             <li>Additional charges of Rs 50 + GST per order.Digital contract notes wil be sent via e-mail.</li>
              <li>Physical copies of contract notes, if required , shall be charged Rs 20 per contract note.</li>
              <li>Courier charges apply.</li> 
               <li>For NRI account (Non-PIS),0.5% or rs 100 per executed order for equity (whichever is lower).</li>
                <li>if the account is in debit balance, any order placed will be charged Rs40 per executed order instead of Rs20 per executed order.</li>

         </ul>
        </div>
        <div className='col-4 p-5'>
         <h5  style={{textDecoration:"none"}}>
        List of Charges 
         </h5>
        </div>
      
     </div>
     </div>
     <br></br>
   </>
}


export default Brokerage;