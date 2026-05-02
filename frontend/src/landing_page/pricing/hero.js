import React from 'react';

function Hero(){
 
    return ( 
    <>
    <div className='container p-5 mt-5'>
        <br></br>
        <br></br>
       <div className='text-center'> 
        <h4>
            Charges
            <h5>
                List of all the charges
            </h5>
        </h4>
        </div>
        <br></br>
      <div className='row'>
        <div className='col-4'>
      <img src='media/images/pricing0.svg'/>
      <h4>
        Free Equity Delivery
      </h4>
      <p>
        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
      </p>
        </div>
        <div className='col-4'>
     <img src='media/images/intradayTrades.svg'/>
     <h3>
        Intraday and T&O Trades
     </h3>
     <p>
        lat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
     </p>
        </div>
      <div className='col-4'>
       <img src='media/images/pricing0.svg'/>
       <h4>
        Free Direct MF
       </h4>
       <p>
        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
       </p>
      </div>



    </div>

  
  </div>

    </>
    );

}


export default Hero ;