import React ,{useState} from'react'; // this file buyactionwindow actually lets u buy the the stocks. 
import { Link } from "react-router-dom";  //actualy let u buy and cancel 
import { useContext} from "react";
import GeneralContext  from "./GeneralContext";
import axios from "axios";
import "./BuyActionWindow.css";

const BuyActionWindow=({uid})=>{
  
   const[stockQuantity,setStockQuantity]= useState(1);  //for buying 
  const [stockPrice,setStockPrice]= useState(0.0);      //for buying stock

 const handleBuyClick=()=>{
      console.log("BUY CLICKED");
    axios.post("http://localhost:3002/newOrder",{
        name:uid,
        qty:stockQuantity,
        price:stockPrice,
        mode:"BUY",
    });
      closeBuyWindow();
 }   
 const { closeBuyWindow } = useContext(GeneralContext);
 const handleCancelClick=()=>{
   closeBuyWindow();
 };

    return (
    <>
<div id="buy-window">

  <div className="regular-order">
    <div className="inputs">
      
      <fieldset>
        <legend>Qty.</legend>
        <input
          type="number"
          value={stockQuantity}
          onChange={(e) => setStockQuantity(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <legend>Price</legend>
        <input
          type="number"
          step="0.05"
          value={stockPrice}
          onChange={(e) => setStockPrice(e.target.value)}
        />
      </fieldset>

    </div>
  </div>

  {/* ✅ BUTTONS INSIDE SAME BOX */}
  <div className="actions">
    <span>Margin required Rs140.65</span>

    <div>
      <button onClick={handleBuyClick}>Buy</button>
      <button onClick={handleCancelClick}>Cancel</button>
    </div>
  </div>

</div>
    </>



    );
};

export default BuyActionWindow;