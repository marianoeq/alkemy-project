import React, { useState } from "react";
import List from "./List";
import "../index.css";
/* import { getCurrentDate } from "../utils/getCurrentDate"; */

export default function Forms() {
  const [data, setData] = useState(
    {
      concept: "",
      amount: "",
      selection: "",
      date: "",
    },
  );

  const [expenses, setExpenses] = useState([]);

  console.log(`Expenses:  `, expenses);
  console.log(`Data:  `, data);

  function handleSubmit(event) {
    event.preventDefault();
    addExpense(data);
  }
  function addExpense(data) {
    let newExpense = [...expenses];

    newExpense = [
      ...newExpense,
      
        
        {  concept: data.concept,
          amount: data.amount,
          selection: data.selection,
          date: data.date,
        },
      
    ];
    setExpenses(newExpense);
  }

  function handleChange(event) {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={data.concept}
          name="concept"
          onChange={handleChange}
        />
        <input
          type="number"
          value={data.amount}
          name="amount"
          onChange={handleChange}
        />
        <select value={data.selection} name="selection" onChange={handleChange}>
          <option  value="income">Income</option>
          <option value="outcome">Outcome</option>
        </select>
        <input
          type="date"
          value={data.date}
          name="date"
          onChange={handleChange}
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <List expenses={expenses} />
    </div>
  );
}
