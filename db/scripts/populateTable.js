import db from '../index.js'

const gastos =[
  {id: 1,
  concept: "Salario",
  amount: 1230,
  date: "2017-3-5",
  type:"ingresos"  
  }

]
async function populateExpensesTable() {
  gastos.forEach(async (challenge) => {
    let response = await db.query(
      `INSERT INTO expenses (concept,amount,date,type) VALUES ($1,$2,$3,$4) RETURNING *`,
      [challenge.concept,
       challenge.amount,
       challenge.date,
       challenge.type 
      ]
    );

    console.log(`This is populateExpensesTable() response: `, response);
  });
}

populateExpensesTable();

db.end();