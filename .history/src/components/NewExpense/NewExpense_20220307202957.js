import NewExpenseForm from './NewExpenseForm.js'
import './NewExpense.css'

function NewExpense () {
  function onSaveExpenseData (expenseData) {
    const obj = {...expenseData, id: Math.random().toString()}
    console.log(obj)
  }

  return (
    <div className='new-expense'>
      <NewExpenseForm onSaveExpenseData={onSaveExpenseData}/>
    </div>
  )
}

export default NewExpense