import React, { useState } from 'react'
import NewExpenseForm from './NewExpenseForm.js'
import './NewExpense.css'

function NewExpense (props) {
  const [showForm, setShowForm] = useState(false)

  function onSaveExpenseData (expenseData) {
    const obj = {...expenseData, id: Math.random().toString()}
    console.log(obj)
    props.onAddExpense(obj)
  }

  function onShowForm () {
    setShowForm(true)
  }

  function onFormClose () {
    setShowForm(false)
  }

  return (
    <div className='new-expense'>
      {showForm ? <NewExpenseForm onFormClose={onFormClose} onSaveExpenseData={onSaveExpenseData}/> : <button type='button' onClick={onShowForm}>Add New Expense</button> }
    </div>
  )
}

export default NewExpense