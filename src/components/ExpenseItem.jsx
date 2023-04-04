import React, { useState } from 'react'
import '../css/styles.css'

const ExpenseItem = (props) => {
  return (
    <div>
        <div className="expense-item">
            {props.dat}
      
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
        </div>
    </div>
  );
}

export default ExpenseItem;