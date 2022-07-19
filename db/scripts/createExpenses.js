import db from '../index.js'

const sqlString = `CREATE TABLE IF NOT EXISTS 
expenses (id SERIAL PRIMARY KEY, concept TEXT NOT NULL, amount INT, date DATE, type TEXT NOT NULL);`;

async function createExpensesTable(){
    const res = await db.query(sqlString);
    console.log("created expenses table", res);
}

createExpensesTable();

db.end();
