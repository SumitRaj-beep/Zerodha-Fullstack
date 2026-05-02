import React,{useState} from 'react';

import {Link} from 'react-router-dom';
import myImg from "./images/unnamed.webp";


const Menu=()=>{
const [selectedMenu,setSelectedMenu]=useState(0); //selectedMenuis a varibale with 0 and setselected menu is a functinon that chnages it values 
const[isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false); //tels whthe the drop down men u isopen or closed 
 

 const handleMenuClick=(index)=>{ 
      setSelectedMenu(index);   // this whole section checks which i active adn change sthe color whichis not i skkept normal;
 };        

 const handleProfileClick=(index)=>{
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
 };

 const menuClass='menu'; // use to apply css 
 const activeMenuClass='menu selected';

    return (

         <>
         <div className='menu-container'>
           

              <img src={myImg} alt='unnamed' style={{ width: "50px",marginRight:"15px", marginBottom:"10px"}} />
            <div className='menus'>
                <ul>
                   <li>
                    <Link to="/" style={{textDecoration:"none"}} onClick={()=>handleMenuClick(0)}> 
                    <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
                    </Link>
                    </li> 
                    
                
                    <li>
                        <Link to="/orders" style={{textDecoration:"none"}} onClick={()=> handleMenuClick(1)}> 
                         <p className={selectedMenu === 1 ? activeMenuClass : menuClass}> Orders</p> </Link>
                     
                    </li>
                    <li>
                      <Link to="/holdings" style={{textDecoration:"none"}} onClick={() => handleMenuClick(2)}>  
                        <p className={selectedMenu === 2 ? activeMenuClass : menuClass}> Holdings</p> 
                      </Link>
                    </li>
                    <li>
                     <Link to="/positions"  style={{textDecoration:"none"}} onClick={() => handleMenuClick(3)}> 
                      <p className={ selectedMenu === 3 ? activeMenuClass: menuClass}> Positions</p></Link>
                    </li>
                     <li>
                    <Link to="/funds"  style={{textDecoration:"none"}} onClick={()=>handleMenuClick(4)}>
                     <p className={ selectedMenu === 4 ? activeMenuClass : menuClass }>Funds</p></Link>
                     </li>
                    <li>
                    <Link to="/apps"  style={{textDecoration:"none"}}  onClick={()=>handleMenuClick(5)}>  <p> Apps</p></Link>
                    </li>


                </ul>
               <hr/>
             
             <div className='profiles' onClick={handleProfileClick}>
              <div className='avatar'>ZU</div>
              <div className='username'> USERID</div> 
                
              </div>
            
            </div>
             
         </div>

       
 


        </>
    );
}

export default  Menu ;