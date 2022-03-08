import React, { useState } from 'react';

import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString())
  // const [localItems, setLocalItems] = useState(props.items)

  const filteredExpenses = props.items.filter(item => {
    return new Date(item.date).getFullYear().toString() === filteredYear
  })



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
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  )
}

export default Expenses;