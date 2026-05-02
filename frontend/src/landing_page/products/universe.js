import React from 'react';
const logos = [
  '/media/images/zerodhaFundhouse.png',
  '/media/images/streakLogo.png',
  '/media/images/sensibullLogo.svg',
  '/media/images/smallcaseLogo.png',
  '/media/images/dittoLogo.png'
];

function Universe(){

    return (
        <>
        <h4  className='text-center' >The Zerodha Universe</h4>

          <div className="container my-5 mb-5">
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
        {logos.map((logo, i) => (
          <img key={i} src={logo} alt="" style={{ maxHeight:'60px' }} />
        ))}
      </div>
    </div>

    <div className='text-center'>
      <button className='btn btn-primary'>Sign up</button>
      </div>
    <br></br>
    <br></br>
    <br></br>
        </>
    );
}

export default Universe;