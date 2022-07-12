import React from "react";

import "../index.css";
export default function List({ expenses }) {
  return (
    <div>
      {expenses.map((e, i) => (
        <div key={i}>
          <h3>{e.concept}</h3>
          <h3>{e.amount}</h3>
          <h3>{e.selection}</h3>
          <h3>{e.date}</h3>
        </div>
      ))}
    </div>
  );
}


/*   const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState("");
  const [select, setSelect] = useState("");
  const [date, setDate] = useState(getCurrentDate());

  const storage = ["hjfsdhk", "kfljfdls"]; */