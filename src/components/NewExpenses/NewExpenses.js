import ExpensesForm from './ExpensesForm';
import './NewExpenses.css';

const NewExpenses = (props) => {
  return (
    <div className='new-expense'>
      <ExpensesForm addExpense={props.addExpense}/>
    </div>
  );
};

export default NewExpenses;