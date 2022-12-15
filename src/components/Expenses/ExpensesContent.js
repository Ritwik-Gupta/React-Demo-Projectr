import ExpenseItem from "./ExpenseItem";
import "./ExpensesContent.css"

const ExpensesContent = (props) => {

    const filteredExpenses = props.content;

    let expensesContent = <div className="expenses-list__fallback"><h2>No Expenses</h2></div>

    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense => 
                                <ExpenseItem 
                                    key={expense.id}
                                    title={expense.title} 
                                    amount={expense.amount} 
                                    date={expense.date} 
                                />
                            )
    }

    return expensesContent;
}

export default ExpensesContent;