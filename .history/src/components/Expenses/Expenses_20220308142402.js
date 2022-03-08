import React, { useState } from 'react';

import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'

function Expenses(props) {
  const [localItems, setLocalItems] = useState(props.items)

  function onChangeFilter (selectedYear) {
    if (!selectedYear) return setLocalItems(props.items)
    const filteredItems = props.items.filter(item => {
      return new Date(item.date).getFullYear().toString() === selectedYear
    })
    setLocalItems(filteredItems)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={onChangeFilter}/>
      {localItems.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)}
    </Card>
  )
}

export default Expenses;