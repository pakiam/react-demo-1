import React, { useState } from 'react';

import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'

function Expenses(props) {
  const [items, setItems] = useState(props.items)

  function onChangeFilter (date) {
    const filteredItems = items.filter.find(item => item.date === date)
    setItems(filteredItems)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={onChangeFilter}/>
      <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
    </Card>
  )
}

export default Expenses;