import React from "react";


export default function MainPage({ expenses }) {
  return (
    <div className="list-container">
      {expenses.map((e, i) => (
        <div key={i}>
          <h3>{e.concept}</h3>
          <h3>{e.amount}</h3>
          <h3>{e.selection}</h3>
          <h3>{e.date}</h3>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
}

