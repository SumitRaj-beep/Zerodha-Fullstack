import React,{useState} from 'react';
import {Tooltip, Grow} from "@mui/material";
import {watchlist}  from "../data/data";
import { KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material";
import { useContext } from 'react';

import GeneralContext from "./GeneralContext";
const WatchList=()=>{


    
    return (
    <>
    <div className="watchlist-container">
    <div>
    <input  
    type='text'
    name='search'
    id='search'
    placeholder='search eng:infy ,bse,nifty ,fut weekly , gold acx'
    className='Search'
     />
    &nbsp;&nbsp;

  <span  className='counts'>{watchlist.length} / 50 </span>
    </div>    
        <ul className='list'>
                {watchlist.map((stock,index) => {
                 return  <WatchListItem stock={stock} key={index} />;
                })}       
            
             </ul>
        </div>
  
     
    </>

    );
};


const WatchListItem = ({stock})=>{
    const [showWacthlistActions, setShowWatchlistActions] = useState(false);
    const { openBuyWindow } = useContext(GeneralContext);
    const handleMouseEnter=(e)=>{   
          console.log("HOVER ON");        /* thehandlemouseenter and handlemouseleave is the eventahandlers */
        setShowWatchlistActions(true);
    }

     const handleMouseLeave=(e)=>{
        setShowWatchlistActions(false);
    }

   

    return (
      <li onMouseEnter={handleMouseEnter} onMouseLeave ={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up" }> {stock.name}</p> 
        <div className='itemInfo'>
            <span className='percent'>{stock.percent}</span>
            {
                stock.isDown ? (
                    <KeyboardArrowDown className='down'/>
                ): (<KeyboardArrowUp className='up' />)
            }

            <span className='price'> {stock.price}</span>

              {showWacthlistActions && (
      <div className="actions">
        <button onClick={()=>{
              console.log("BUTTON CLICKED");
            openBuyWindow(stock.name);
        }}>Buy</button>
        <button>Sell</button>
      </div>
    )}

     </div>
      </div>
      </li>
    )
}


export default WatchList;
