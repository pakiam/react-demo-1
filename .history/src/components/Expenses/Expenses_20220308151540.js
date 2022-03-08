import React, { useState } from 'react';

import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString())
  // const [localItems, setLocalItems] = useState(props.items)

  const filteredExpenses = props.items.filter(item => {
    return new Date(item.date).getFullYear().toString() === filteredYear
  })

  let expensesContent = <p>No expenses found</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
  }

  function onChangeFilter (selectedYear) {
    setFilteredYear(selectedYear)
    // if (!selectedYear) return setLocalItems(props.items)
    // const filteredExpenses = props.items.filter(item => {
    //   return new Date(item.date).getFullYear().toString() === selectedYear
    // })
    // setLocalItems(filteredExpenses)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter value={filteredYear} onChangeFilter={onChangeFilter}/>
      {expensesContent}
    </Card>
  )
}

export default Expenses;