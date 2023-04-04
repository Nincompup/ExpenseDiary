import React from 'react'
import ExpenseForm from './ExpenseForm'
import '../../css/newExpense.css'

const NewExpense = (props) => {
  const onsavefun=(data)=>{
  props.submitdatatoapp(data);
  }
  return (
    <div className="new-expense">
          <ExpenseForm submitdatafun={onsavefun}/>
    </div>
  )
}

export default NewExpense