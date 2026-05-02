import React from 'react';

function Rightsection({
    imageurl,
    productname,
    productdescription,
    learnmore


}){
    return (
        <>
          <div className='container'>
     <br></br>
     <br></br>
     <br></br>
     <div className='row p-5 mb-5'>
       
        <div className='col-6 p-3 mt-5'>
            <h1 className=''>{productname}</h1>
            <p className='p'>{productdescription }</p>
            <a href={learnmore}>Learnmore</a>
         
         </div>
         
         <div className='col-6 p-3'>
            <img src={imageurl} alt=" "></img>
         </div>
        </div>
     </div>
        
        </>
    );
}

export  default Rightsection;