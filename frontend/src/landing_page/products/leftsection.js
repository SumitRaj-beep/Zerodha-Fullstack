import React from 'react';

function Leftsection({
    imageurl,
    productname,
    productdescription,
    trydemo,
    learnmore,
    googleplay,
    appstore
}
){
    return (
<>
   <div className='container'>
     <br></br>
     <br></br>
     <br></br>
     
     <div className='row p-5 mb-5 style={{marginTop:10}}'>
        <div className='col-6 p-3 mr-5 style={{padding-Right:20}}'>
            <img src={imageurl} className='img-fluid  maxwidth:90' alt=""></img>
        </div>
        <div className='col-6 p-3 mt-5 shift-right ml-5' >
            <h1 className=''>{productname}</h1>
            <p className='p'>{productdescription }</p>
            <a href={trydemo} style={{marginRight:25, leftMargin:4}}>Trydemo</a>
            <a href={learnmore}>Learnmore</a>
            <div className='d-block'>
            <a href={googleplay} className=''><img src='/media/images/googlePlayBadge.svg' className='' alt=''/></a>
            <a href={appstore}  ><img src='/media/images/appstoreBadge.svg' className='p-3' alt=''/></a>
            </div>
        </div>
     </div>


  






   </div>

</>

    );
}

export default Leftsection;