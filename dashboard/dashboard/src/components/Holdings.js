import React, {useState,useEffect} from 'react';
import   axios from "axios";
// import {holdings} from '../data/data';


const Holdings=()=>{
    
     const [allholdings, setallholdings]=useState([]);
      //dtata you will display  , function to update it 
     useEffect(()=>{
     axios.get("http://localhost:3002/allholdings",  { headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
     }
    }).then((res)=>{
        
        console.log(res.data);
        setallholdings(res.data)});
    
    } ,[]);


    return (

        <>
        <h3 className="title">Holdings({allholdings.length}) </h3>
        <div className="order-table">
            <table>
                <tr>
                <th>Instrument</th> &nbsp;&nbsp;
                <th>Qty.</th> &nbsp; &nbsp;         
                <th>Avg.cost</th>&nbsp;&nbsp;
                <th>LTP</th>&nbsp;&nbsp;
                <th>Cur. val </th>&nbsp;&nbsp;

                <th>P&L</th>&nbsp;&nbsp;
                <th>Net chg. </th>&nbsp;&nbsp;
                <th>Day chg.</th>&nbsp;&nbsp;
                </tr>
                {allholdings.map((stock,index) => {
                        const curValue=stock.price * stock.qty;
                        const isProfit=curValue- stock.avg * stock.qty >=0.0
                        const profClass= isProfit ? "profit" : "loss";
                        const dayClass= stock.isLoss ? "loss" : "profit";
                        return(
                            <tr  key ={index}>
                                 <td>{stock.name}</td>&nbsp;

                                 <td>  {stock.qty}</td>&nbsp;
                                 <td>{ stock.avg.toFixed(2)}</td>&nbsp;

                                 <td>{ stock.price.toFixed(2)}</td>&nbsp;
                                 <td className={profClass}>&nbsp;
                                    {(curValue -stock.avg * stock.qty ).toFixed(2)}
                                 </td>&nbsp;
                                 <td className={profClass}>{stock.net}</td>&nbsp;

                                 <td className={dayClass}>{stock.day}</td>&nbsp;
                             </tr>
                        );
                    })
                }
              
                 </table>

        </div>
     <div className="rowholding">
        <div className="col">
        <h5>
            29,875.<span>55</span>{""}
        </h5>
        <p> Total investment</p>
        </div>
        <div className='col'>
            <h5>
                31,428.<span>95</span>{""}
            </h5>
           <p> Current value</p> 
        </div>

        <div className='col'>
            <h5>
                1,553.40 (+5.20%)
            </h5>
            <p> P&L:</p>
        </div>
     </div>
     
    
        </>
    );
}



export default Holdings;