import React, {useState} from 'react'

import './NewExpenseForm.css'

function NewExpenseForm () {
  // const [title, setTitle] = useState('')
  // const [amount, setAmount] = useState('')
  // const [date, setDate] = useState('')
  const [form, setForm] = useState({
    title: '',
    amount: '',
    date: '',
  })

  function onTitleChange (event) {
    // setTitle(event.target.value)
    setForm((prevState) => {
      return {...prevState, title: event.target.value}
    })
  }

  function onAmountChange (event) {
    // setAmount(event.target.value)
    setForm((prevState) => {
      return {...prevState, amount: event.target.value}
    })
  }

  function onDateChange (event) {
    // setDate(event.target.value)
    setForm((prevState) => {
      return {...prevState, date: event.target.value}
    })
  }

  function onFormSubmit (event) {
    event.preventDefault()

  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type="text" onChange={onTitleChange} value={form.title}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={onAmountChange} value={form.amount}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={onDateChange} value={form.date}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="submit">Add Expense</button>
      </div>
      <div>{form.title} {form.amount} {form.date}</div>
    </form>
  )
}

export default NewExpenseForm