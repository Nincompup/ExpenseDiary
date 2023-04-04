import React, { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpenses/NewExpense";

const expensess = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    dat: new Date(2020, 7, 14).toDateString(),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, dat: new Date(2021, 2, 12).toDateString() },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    dat: new Date(2021, 2, 28).toDateString(),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    dat: new Date(2021, 5, 12).toDateString(),
  },
];

function App() {

 const [expenses, setexpenses] = useState(expensess);

 

  const onsaveinapp=(data)=>{
     setexpenses((prev)=>{
      console.log(data);
      console.log([data,...prev])
      return[data,...prev];
     })
  }

  return (
    <div>
      <NewExpense submitdatatoapp={onsaveinapp}/>
      {
        expenses.map((expense)=>(
          <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} dat={expense.dat}/>
        ))
      }
    </div>
  );
}

export default App;
