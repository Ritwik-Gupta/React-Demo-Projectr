import './ExpensesForm.css';
import { useState } from 'react';

const ExpensesForm = (props) => {

    const [title, updateTitle] = useState("")
    const [amount, updateAmount] = useState("")
    const [date, updateDate] = useState("")

    //using a single useState function instead of many

    // const [input, updateInput] = useState({
    //   updatedTitle : "",
    //   updateAmount : "",
    //   updatedDate : ""
    // })
    
    const titleChangeHandler = (event) => {
      updateTitle(event.target.value)
      // updateInput({
      //   ...input,
      //   updatedTitle: event.target.value
      // })
      // updateInput((prevState) => {
      //   return({
      //     ...prevState,
      //     updatedTitle: event.target.value
      //   })
      // })
    }

    const amountChangeHandler = (event) => {
      updateAmount(event.target.value)
      // updateInput({
      //   ...input,
      //   updatedAmount: event.target.value
      // })
      // updateInput((prevState) => {
      //   return({
      //     ...prevState,
      //     updatedAmount: event.target.value
      //   })
      // })
    }

    const dateChangeHandler = (event) => {
      updateDate(event.target.value)
      // updateInput({
      //   ...input,
      //   updatedDate: event.target.value
      // })
      // updateInput((prevState) => {
      //   return({
      //     ...prevState,
      //     updatedDate: event.target.value
      //   })
      // })
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
    }


  return (
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
        </div>
      </div>
    </form>
  );
};

export default ExpensesForm;