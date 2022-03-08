import NewExpenseForm from './NewExpenseForm.js'
import './NewExpense.css'

function NewExpense (props) {
  function onSaveExpenseData (expenseData) {
    const obj = {...expenseData, id: Math.random().toString()}
    console.log(obj)
    props.onAddExpense(obj)
  }

  return (
    <div className='new-expense'>
      <NewExpenseForm onSaveExpenseData={onSaveExpenseData}/>
    </div>
  )
}

export default NewExpense