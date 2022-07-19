import db from "../index.js";

async function deleteExpensesTable() {
    const res = await db.query(`DROP TABLE expenses;`);
    console.log("Deleted expenses table", res);
  }
  
  deleteExpensesTable();
  
  db.end();