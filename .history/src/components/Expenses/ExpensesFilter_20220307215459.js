import './ExpensesFilter.css';

function ExpensesFilter (props) {
  function onSelectYear (event) {
    props.onChangeFilter(event.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={onSelectYear}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value="" selected disabled hidden>Choose here</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;