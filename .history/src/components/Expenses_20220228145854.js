import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  return <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
}

export default Expenses;