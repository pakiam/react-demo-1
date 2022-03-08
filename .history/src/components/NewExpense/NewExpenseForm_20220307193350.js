import './NewExpenseForm.css'

function NewExpenseForm () {
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type="text"/>
        </div>
      </div>
    </form>
  )
}

export default NewExpenseForm