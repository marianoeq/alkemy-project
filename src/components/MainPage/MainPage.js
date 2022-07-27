import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../MainPage/MainPage.module.css"
import axios from "axios";


export default function MainPage() {
  const [data, setData] = useState([]);
  let balance = 0;

//GET REQUEST
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:3000/expense`);
    setData(data.payload);
  };
  
  useEffect(() => {
    getData();
  }, []);
  
  
  //DELETE REQUEST
  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3000/expense/${id}`);
    alert(`The expense you seleced was deleted successfully`);
    getData();
    return res;
  };

  //BALANCE 
  data.map((element) => {
    if (element.type === "Income") {
      balance += element.amount;
    } else {
      balance -= element.amount;
    }
    return balance;
  });
  
  
  //Savingn ID of expense.
  const handleID = (id) => {
    console.log(id);
    sessionStorage.setItem("id", id);
    return;
  };


  return (
    <div className={styles["main-page-container"]}>
      <div className={styles["balance-container"]}>
        <h2>Current Balance:</h2>
        <h3>${balance}</h3>
      </div>

      <div className={styles["table-container"]}>
        <table >
          <tbody >
            <tr >
              <th >Concept</th>
              <th>Amount($)</th>
              <th>Date</th>
              <th>Type</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </tbody>
          {data.map((element, i) => (
            <tfoot key={i}>
              <tr >
                <td >{element.concept}</td>
                <td>{element.amount}</td>
                <td>{element.date}</td>
                <td>{element.type}</td>
                <td>
                <button onClick={() => handleID(element.id)}>

                    <Link className={styles["btn-edit"]} to="/formeditexpense">Edit </Link>
                  </button>
                </td>
                <td>
                  <button className={styles["btn-delete"]} onClick={() => handleDelete(element.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            </tfoot>
          ))}
        </table>
      </div>
    </div>
  );
}
