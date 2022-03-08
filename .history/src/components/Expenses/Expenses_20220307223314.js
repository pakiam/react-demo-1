import React, { useState } from 'react';

import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'

function Expenses(props) {
  const [localItems, setLocalItems] = useState(props.items)

  function onChangeFilter (selectedYear) {
    if (!selectedYear) setLocalItems(props.items)
    const filteredItems = localItems.filter(item => {
      let a = new Date(item.date).getFullYear().toString()
      console.log(1, a, a === selectedYear)
      return new Date(item.date).getFullYear().toString() === selectedYear
    })
    setLocalItems(filteredItems)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={onChangeFilter}/>
      <ExpenseItem title={localItems[0].title} amount={localItems[0].amount} date={localItems[0].date} />
    </Card>
  )
}

export default Expenses;