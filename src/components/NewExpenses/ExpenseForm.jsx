import React, { useState } from 'react'
import '../../css/expenseFrom.css'

const ExpenseForm = (props) => {

    const [title, settitle] = useState('')
    const [amount, setamount] = useState('')
    const [date, setdate] = useState('')
   

    const titleChangeHandler =(e)=>{
        settitle(e.target.value);
    }
    const amountChangeHandler =(e)=>{
        setamount(e.target.value);
    }
    const dateChangeHandler =(e)=>{
        setdate(e.target.value);
    }
    const HandleSubmit=(e)=>{
        e.preventDefault();
        const data={
            id:'e5',
           title: title,
           amount: amount,
           dat: new Date().toDateString() ,
        };
        props.submitdatafun(data);
        settitle('');
        setamount('');
        setdate('')
    }


  return (
    <form onSubmit={HandleSubmit}>
        <div className="new-expense_controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01" />
            </div>
            {/* <div className="new-expense__control">
                <label>Date</label>
                <input type="date" onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" />
            </div> */}
        </div>
        <div className="new_expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm