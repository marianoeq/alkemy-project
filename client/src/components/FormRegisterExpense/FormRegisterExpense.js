/* import React, { useState } from "react"; */
import styles from "./FormRegisterExpense.module.css";
/* import axios from "axios"; */

export default function FormRegisterExpense({nameButton, handleSubmit, data, handleChange}) {

  
  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-inputs-container"]}>
          <label>Concept</label>
          <input
            type="text"
            value={data.concept}
            name="concept"
            onChange={handleChange}
          />
        </div>
        <div className={styles["form-inputs-container"]}>
          <label>Amount</label>
          <input
            type="number"
            value={data.amount}
            name="amount"
            onChange={handleChange}
          />
        </div>
        <div className={styles["form-inputs-container"]}>
          <label>Date</label>
          <input
            type="date"
            value={data.date}
            name="date"
            onChange={handleChange}
          ></input>
        </div>
        <div className={styles["form-inputs-container"]}>
          <label>Type</label>
          <select
            id="type"
            value={data.type}
            name="type"
            onChange={handleChange}
          >
            <option value="">-- Choose --</option>
            <option value="Income">Income</option>
            <option value="Outcome">Outcome</option>
          </select>
        </div>
       <button className={styles["btn-submit-form"]} type="submit">
        {nameButton}
        </button>
    
      </form>
    </div>
  );
}
