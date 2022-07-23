import React, { useState, useEffect } from "react";

import axios from "axios";

export default function MainPage() {
  const [data, setData] = useState([]);
  let balance = 0;
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:3000/expense`);
    setData(data.payload);
   
  };
  
 
  //BALANCE 
  data.map((element) => {
    if (element.type === "Income") {
      balance += element.amount
    } else {
      balance -=element.amount;
    }
    return balance
  });

  //DELETE 
 const handleDelete = (id) =>{
   console.log(id)
  }
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      <div>
        <h2>Current Balance</h2>
        <h3>${balance}</h3>
      </div>

      <div className="[style.table-container]">
        <table>
          <tbody>
            <tr>
              <th>Concept</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </tbody>
          {data.map((element, i) => (
            <tfoot key={i}>
              <tr>
                <td>{element.concept}</td>
                <td>{element.amount}</td>
                <td>{element.date}</td>
                <td>{element.type}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button onClick={() =>handleDelete(element.id)}>Delete</button>
                </td>
              </tr>
            </tfoot>
          ))}
        </table>
      </div>
    </div>
  );
}
