import React from 'react';
function Createticket(){
    return (
        <>
              <div className='container'> 

            <div className='row p-5 mb-5 mt-5 text-muted' style={{lineHeight:"1.5",fontWeight:"100" ,color:"#444",textDecoration:"none"}}>
             <h1>To Create ticket select relevant Topic.</h1>
    

            <div className='col  text-muted p-3'>
                <h3>
                    Account
                </h3>
              <p >
                <ul>
             <li>  <a href=''> Online Accout Opening.</a> </li>
              <li>  <a href=''> Offline Account Opening.</a></li>
               <li> <a href=''> Company, Partnership</a></li> 
              <li>  <a href=''> Opening</a></li>
              <li> <a href=''> NRI Account Opening </a></li> 
              </ul>
             </p>
             <br></br>
              <h3>
               Funds
              </h3>
              <p>
            <ul>
              <li>  <a href=''>Adding Fund </a></li>
              <li><a href=''> Fund Withdrawal </a></li> 
               <li><a href=''> eMandates </a></li>
               <li><a href=''>Adding Bank Accounts</a> </li>
                 <li><a href=''>Other Accounts</a> </li>

            </ul>
              </p>

            </div>

  <div className='col text-muted p-3'>
      <h4>Your Zerodha Account</h4>
              <p>
                <ul>
       <li> <a href=''>       Your Login Credentials</a>  </li>         
        <li><a href=''>   Account modification</a></li>
       <li><a href=''>   Master Report (CMR)</a> </li> 
      <li> <a href=''>  Your profile </a> </li>
      <li>   <a href=''>     Transfer and conversion of securities</a> </li>
           </ul>
              </p>
              <br></br>
              <h3>
                Console
              </h3>
           <p> 
            <ul>
           <li> <a href="">   Reports </a></li> 
            <li> <a href="">   Ledger </a></li>
            <li> <a href="">   Portfolio </a></li>
            <li> <a href="">   60 Day Challenge </a> </li>
            <li>  <a href="">   IPO </a></li>
          
             </ul>
            </p>
   </div>

 <div className='col text-muted p-3'>
          <h4>Your Zerodha Account</h4>
              <p>
                <ul>
             <li> <a href=''> Margin/leverage ,product.</a></li> 
             <li> <a href=''> Kite web and Mobile</a> </li> 
              <li><a href=''> Trading FAQs</a> </li> 
             <li> <a href=''> Corporate Actions</a></li> 
               <li><a href=''>Sentin </a></li>
              
                 </ul>
              </p>
              <br></br>
              <h3>
                Coin
              </h3>

              <p>
                <ul>
             <li> <a href=''>  Understanding the Mutual Funds</a></li>
             <li> <a href=''>  Buying and Sellign through Coin </a></li>
             <li> <a href=''>  Starting an SIP </a></li>
              <li><a href=''>  Managing your Portfolio</a> </li>
           
                </ul>
              </p>
            </div>
              </div>
        </div>
        </>
);

}
export default Createticket ;