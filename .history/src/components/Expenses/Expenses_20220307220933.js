import React, { useState } from 'react';

import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'

function Expenses(props) {
  const [localItems, setLocalItems] = useState(props.items)
  console.log(localItems)

  function onChangeFilter (date) {

    if (!date) setLocalItems(props.items)
    const filteredItems = localItems.filter(item => {
      return new Date(item.date).getFullYear() === date
    })
    console.log(filteredItems, date)
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