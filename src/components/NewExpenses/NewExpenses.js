import { useState } from 'react';
import ExpensesForm from './ExpensesForm';
import './NewExpenses.css';


const NewExpenses = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const setIsEditingHandler = () => {
    setIsEditing(true)
  }

  const hideEditingFormHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className='new-expense'>
      {!isEditing && (<button onClick={setIsEditingHandler}>Add New Expense</button>)}
      {isEditing && (<ExpensesForm addExpense={props.addExpense} hideEditingForm={hideEditingFormHandler}/>)}
    </div>
  )
};

export default NewExpenses;