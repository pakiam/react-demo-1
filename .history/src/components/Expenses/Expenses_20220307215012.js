import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpensesFilter/>
      <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
    </Card>
  )
}

export default Expenses;