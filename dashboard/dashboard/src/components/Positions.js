import React,{useState,useEffect} from 'react';

import axios from "Axios";

// /import  {positions}  from '../data/data';

const Positions= () =>{
     const [allpositions, setallpositions]=useState([]);
         
         useEffect(()=>{
         axios.get("http://localhost:3002/allpositions",{headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }}).then((res)=>{
            
            console.log(res.data);
            setallpositions(res.data)});
        
        } ,[]);
    return (
        <>
 <h3 className="title">Positions ({allpositions.length}) </h3>
        <div className="order-table">
            <table>
                <tr>
                <th>Instrument </th> &nbsp;&nbsp;
                <th>Qty.</th>      &nbsp; &nbsp;          
                <th>Avg.cost</th>&nbsp; &nbsp;
                <th>LTP</th>&nbsp; &nbsp;
                <th>Cur. val </th>&nbsp; &nbsp;

                <th>P&L</th>&nbsp;
                <th>Net chg. </th>&nbsp;
                <th>Day chg.</th>&nbsp;
                </tr>
                {allpositions.map((stock,index) => {
                        const curValue=stock.price * stock.qty;
                        const isProfit=curValue- stock.avg * stock.qty >=0.0;
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
        </>
    );
}

 
export default Positions;