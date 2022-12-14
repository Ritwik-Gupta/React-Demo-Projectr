import './ExpensesForm.css';
import { useState } from 'react';

const ExpensesForm = (props) => {

    const [title, updateTitle] = useState("")
    const [amount, updateAmount] = useState("")
    const [date, updateDate] = useState("")

    const titleChangeHandler = (event) => {
      updateTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
      updateAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
      updateDate(event.target.value)
    }

    

    const addExpenseHandler = (event) => {
      event.preventDefault();
      var myObj = {
        title:title,
        amount:amount,
        date: new Date(date)
      }
      console.log(myObj);
      props.addExpense(myObj);

      props.hideEditingForm();
    }

    const cancelButtonClickHandler = () => {
      props.hideEditingForm();
    }

    const expenseFormContent = 
          <form onSubmit={addExpenseHandler}>
            <div className='new-expense__controls'>
              <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={title} onChange={titleChangeHandler}/>
              </div>
              <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={amount} onChange={amountChangeHandler}/>
              </div>
              <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={date} onChange={dateChangeHandler}/>
              </div>
              <div className='new-expense__actions'>
                  <button type='submit'>Add Expense</button>
                  <button type='reset' onClick={cancelButtonClickHandler}>Cancel</button>
              </div>
            </div>
          </form>

  return(
    expenseFormContent
  )
};

export default ExpensesForm;