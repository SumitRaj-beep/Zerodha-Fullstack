import React from 'react';

const Summary=()=>{
    return (
        <>
        <div className='width'>
<h5>Hi User</h5>

  <hr></hr>
  <div className='container1'>
  <div className='row'>
    <p>Equity 19 %  </p> 
     <div className='col-6'>
      <h3>3.47k </h3>
      <p>Margin available</p>
      </div>
      <div className='col-6'>
        <p> Margin used:0</p>
         <p className='display:flex'> opening amount:2.89k</p>
      </div>
     
  </div>
 </div>

</div>
        </>
    );
}

export default Summary;