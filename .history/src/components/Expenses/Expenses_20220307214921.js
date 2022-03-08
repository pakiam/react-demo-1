import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {
  return (
    <div>
      <ExpensesFilter/>
      <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
    </div>
  )
}

export default Expenses;