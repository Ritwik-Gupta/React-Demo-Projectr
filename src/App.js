import AllExpenses from "./components/Expenses/AllExpenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Chart from "./components/Charts/Chart";
import { useState } from "react";

const App = () => {

  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, updateExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseObject) => {
      const newExpense = {
        ...expenseObject,
        id: Math.floor((Math.random() * 100) + 1)
      }
      // expenses.push(newExpense);
      // console.log(expenses)
      console.log("Expense added!")

      updateExpenses((prevState) => {
          return([
            ...prevState,
            newExpense
          ])
      });

  }

  return (
    <div>
      <NewExpenses addExpense={addExpenseHandler}/>
      <AllExpenses data={expenses}/>
    </div>
  );
}

export default App;
